// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Anciennes adresses du site Wowchemy/Hugo, redirigées vers les nouvelles pages
const legacy = {
  '/home': '/',
  '/author/jacques-yves-campion': '/',
  '/authors': '/',
  '/publication': '/publications/',
  '/publication/guedj-2022-impact': '/publications/',
  '/publication/guedj-202118': '/publications/',
  '/publication/de-2021-decrease': '/publications/',
  '/publication/di-2021-fairembo': '/publications/',
  '/publication/guedj-2021-early': '/publications/',
  '/publication/fond-2021-peripheral': '/publications/',
  '/publication/morand-2021-similar': '/publications/',
  '/publication/verger-2021-pons': '/publications/',
  '/post': '/recherche/',
  '/post/ms-neurosciences': '/recherche/#discordance',
  '/project': '/recherche/',
  '/project/project-phd': '/recherche/#these',
  '/talk': '/parcours/',
  '/talk/2020_december_imi': '/parcours/',
  '/talk/universite-d-ete': '/parcours/',
};

export default defineConfig({
  site: 'https://jycampion.github.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  redirects: legacy,
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-US' } },
      filter: (page) => !Object.keys(legacy).some((p) => page.endsWith(p + '/')),
    }),
  ],
});
