import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Une publication = une entrée dans src/data/publications.yaml.
 * Pour en ajouter une : copier un bloc existant, changer l'id et les champs.
 */
const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number().int(),
    type: z.enum(['article', 'review', 'preprint', 'conference', 'thesis']),
    // Axes de recherche (voir src/i18n/ui.ts) — servent à relier les travaux aux thèmes
    axes: z.array(z.enum(['brainage', 'multimodal', 'worry', 'biomarkers', 'pet'])).default([]),
    doi: z.string().optional(),
    pmid: z.string().optional(),
    url: z.string().url().optional(),
    pdf: z.string().url().optional(),
    code: z.string().url().optional(),
    selected: z.boolean().default(false),
    note: z.object({ fr: z.string(), en: z.string() }).optional(),
  }),
});

export const collections = { publications };
