/**
 * Génère, au moment de la compilation, une coupe axiale de cerveau stylisée
 * (contour cortical, ruban de substance grise, ventricules) et une carte de
 * saillance en courbes de niveau. Aucun JavaScript n'est envoyé au navigateur.
 */
import { contours } from 'd3-contour';
import { interpolateInferno } from 'd3-scale-chromatic';

const W = 400;
const H = 480;
const CX = W / 2;
const CY = H / 2 + 4;

// Générateur pseudo-aléatoire déterministe (même dessin à chaque build)
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

type Pt = [number, number];

function brainRadius(theta: number, scale: number, gyri: number, phase: number[]) {
  // Ellipse allongée d'avant en arrière, un peu plus large en arrière
  const back = Math.max(0, Math.sin(theta)); // 1 en arrière (bas de la figure)
  const a = 148 * (1 + 0.05 * back);
  const b = 196;
  const c = Math.cos(theta);
  const s = Math.sin(theta);
  const base = (a * b) / Math.sqrt((b * c) ** 2 + (a * s) ** 2);
  // Circonvolutions : somme de sinusoïdes de hautes fréquences
  const g =
    gyri *
    (0.55 * Math.sin(19 * theta + phase[0]) +
      0.3 * Math.sin(31 * theta + phase[1]) +
      0.15 * Math.sin(47 * theta + phase[2]));
  // Scissure interhémisphérique en avant (θ = -π/2) et en arrière (θ = π/2)
  const fissure = (t0: number, depth: number, width: number) => {
    let d = Math.abs(theta - t0);
    d = Math.min(d, 2 * Math.PI - d);
    return depth * Math.exp(-(d * d) / (2 * width * width));
  };
  const notch = fissure(-Math.PI / 2, 0.11, 0.045) + fissure(Math.PI / 2, 0.07, 0.04);
  return base * scale * (1 + g - notch);
}

function ring(scale: number, gyri: number, phase: number[], n = 720): Pt[] {
  const pts: Pt[] = [];
  for (let i = 0; i < n; i++) {
    const t = -Math.PI + (2 * Math.PI * i) / n;
    const r = brainRadius(t, scale, gyri, phase);
    pts.push([CX + r * Math.cos(t), CY + r * Math.sin(t)]);
  }
  return pts;
}

const toPath = (pts: Pt[], close = true) =>
  pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join('') + (close ? 'Z' : '');

function inside(pts: Pt[], x: number, y: number) {
  let c = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i];
    const [xj, yj] = pts[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
}

export function buildSlice() {
  const r = rng(1253); // UMR 1253
  const phase = [r() * 6.28, r() * 6.28, r() * 6.28];

  const pial = ring(1, 0.034, phase);
  const white = ring(0.87, 0.085, phase);

  // Scissure interhémisphérique : ligne médiane légèrement sinueuse
  const seg = (y0: number, y1: number) => {
    const pts: Pt[] = [];
    for (let y = y0; y <= y1; y += 4) pts.push([CX + 1.6 * Math.sin(y / 9), y]);
    return toPath(pts, false);
  };
  const midline = seg(CY - 172, CY - 78) + seg(CY + 74, CY + 184);

  // Ventricules latéraux : cornes frontales larges, corps effilé vers l'arrière
  const ventricle = (side: 1 | -1) => {
    const top = CY - 66;
    const len = 124;
    const pts: Pt[] = [];
    for (let i = 0; i <= 48; i++) {
      const t = i / 48;
      const bulge = 20 * Math.sin(Math.PI * Math.min(1, t * 1.6)) * (1 - 0.55 * t) + 9 * t * t;
      pts.push([CX + side * (5 + bulge), top + t * len]);
    }
    for (let i = 48; i >= 0; i--) {
      const t = i / 48;
      const inner = 4 + 5 * Math.sin(Math.PI * t) + 6 * t * t;
      pts.push([CX + side * inner, top + t * len]);
    }
    return toPath(pts);
  };

  // Carte de saillance : gaussiennes symétriques masquées par le cerveau
  const nx = 160;
  const ny = 192;
  const sx = W / nx;
  const sy = H / ny;
  const blobs = [
    { x: 44, y: -112, s: 22, w: 1.0 }, // région orbitofrontale
    { x: 86, y: 24, s: 19, w: 0.85 }, // région temporale médiale
    { x: 34, y: -2, s: 15, w: 0.7 }, // noyaux gris centraux
    { x: 58, y: 108, s: 24, w: 0.5 }, // cortex pariéto-occipital
  ];
  const values = new Float64Array(nx * ny);
  for (let j = 0; j < ny; j++) {
    for (let i = 0; i < nx; i++) {
      const x = (i + 0.5) * sx;
      const y = (j + 0.5) * sy;
      // Masque doux : la carte s'estompe avant d'atteindre le cortex
      const th = Math.atan2(y - CY, x - CX);
      const rr = Math.hypot(x - CX, y - CY) / brainRadius(th, 0.9, 0, phase);
      const mask = rr >= 1 ? 0 : rr <= 0.78 ? 1 : 0.5 + 0.5 * Math.cos((Math.PI * (rr - 0.78)) / 0.22);
      if (mask === 0) continue;
      let v = 0;
      for (const b of blobs) {
        for (const side of [-1, 1]) {
          const dx = x - (CX + side * b.x * (side === 1 ? 1 : 0.94));
          const dy = y - (CY + b.y);
          v += b.w * Math.exp(-(dx * dx + dy * dy) / (2 * b.s * b.s));
        }
      }
      values[j * nx + i] = v * mask;
    }
  }
  const levels = [0.14, 0.24, 0.34, 0.44, 0.54, 0.64, 0.74, 0.84];
  const heat = contours()
    .size([nx, ny])
    .thresholds(levels)(Array.from(values))
    .map((geom, k) => {
      const d = geom.coordinates
        .map((poly) =>
          poly
            .map((ringPts) =>
              ringPts.map((p, i) => `${i ? 'L' : 'M'}${(p[0] * sx).toFixed(1)} ${(p[1] * sy).toFixed(1)}`).join('') + 'Z',
            )
            .join(''),
        )
        .join('');
      const t = 0.38 + (0.54 * k) / (levels.length - 1);
      return { d, fill: interpolateInferno(t), level: k };
    })
    .filter((h) => h.d.length > 0);

  return {
    viewBox: `0 0 ${W} ${H}`,
    pial: toPath(pial),
    white: toPath(white),
    midline,
    ventricles: [ventricle(-1), ventricle(1)],
    heat,
  };
}
