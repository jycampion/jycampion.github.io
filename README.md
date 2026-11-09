# jycampion.github.io

Site académique de Jacques-Yves Campion — psychiatre de la personne âgée (CMRR, CHRU de Tours), IA et neuroimagerie.

Site statique construit avec [Astro](https://astro.build), en français (racine) et en anglais (`/en/`), déployé automatiquement sur GitHub Pages à chaque push sur `main`.

## Modifier le contenu

| Pour… | Modifier |
| --- | --- |
| Ajouter ou corriger une publication | `src/data/publications.yaml` |
| Changer les textes des pages (FR et EN) | `src/i18n/copy.ts` |
| Liens (Scholar, GitHub, LinkedIn), e-mail, photo | `src/i18n/ui.ts` → `profile` |
| Mise en page d'une page | `src/views/*.astro` |
| Couleurs et typographie | `src/styles/global.css` |

Une publication s'ajoute en copiant un bloc existant du fichier YAML. Les champs `doi` et `pmid` génèrent les liens automatiquement ; `selected: true` la fait apparaître sur la page d'accueil ; `axes` la relie aux thèmes de la page Recherche. Le fichier est validé à la compilation : une faute de champ bloque le build avec un message explicite.

On peut tout modifier directement depuis l'interface web de GitHub : le site se recompile et se met en ligne en une à deux minutes.

## Travailler en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Déploiement

Le workflow `.github/workflows/deploy.yml` compile le site et le publie sur GitHub Pages.
Réglage nécessaire une seule fois : **Settings → Pages → Build and deployment → Source : GitHub Actions**.

Les anciennes adresses du site Wowchemy (`/publication/…`, `/post/…`, `/talk/…`) redirigent vers les nouvelles pages (voir `astro.config.mjs`).
