export type Lang = 'fr' | 'en';
export const langs: Lang[] = ['fr', 'en'];

/** Coordonnées et liens. Laisser `email` vide pour ne pas l'afficher. */
export const profile = {
  name: 'Jacques-Yves Campion',
  honorific: 'MD, MSc',
  email: '',
  photo: '/images/jy-campion.webp',
  links: {
    scholar: 'https://scholar.google.com/citations?user=Ob6-mpQAAAAJ',
    github: 'https://github.com/jycampion',
    linkedin: 'https://www.linkedin.com/in/jacques-yves-campion/',
    thesesfr: 'https://theses.fr/s356524',
  },
};

/** Correspondance des pages entre les deux langues */
export const routes = {
  home: { fr: '/', en: '/en/' },
  research: { fr: '/recherche/', en: '/en/research/' },
  publications: { fr: '/publications/', en: '/en/publications/' },
  clinical: { fr: '/clinique/', en: '/en/clinical/' },
  cv: { fr: '/parcours/', en: '/en/cv/' },
} as const;
export type RouteKey = keyof typeof routes;

export const ui = {
  fr: {
    nav: { home: 'Accueil', research: 'Recherche', publications: 'Publications', clinical: 'Clinique', cv: 'Parcours' },
    skip: 'Aller au contenu',
    switchLabel: 'English',
    switchShort: 'EN',
    role: 'Psychiatre de la personne âgée',
    allPubs: 'Toutes les publications',
    pubTypes: {
      all: 'Tout',
      article: 'Articles',
      review: 'Revues',
      preprint: 'Préprints',
      conference: 'Conférences',
      thesis: 'Thèses',
    },
    pubTypeSingular: {
      article: 'Article',
      review: 'Revue de la littérature',
      preprint: 'Préprint',
      conference: 'Conférence',
      thesis: 'Thèse',
    },
    filterLabel: 'Filtrer par type',
    footerNote: 'Les opinions exprimées sur ce site n’engagent que leur auteur.',
    updated: 'Mis à jour en',
  },
  en: {
    nav: { home: 'Home', research: 'Research', publications: 'Publications', clinical: 'Clinical work', cv: 'CV' },
    skip: 'Skip to content',
    switchLabel: 'Français',
    switchShort: 'FR',
    role: 'Geriatric psychiatrist',
    allPubs: 'All publications',
    pubTypes: {
      all: 'All',
      article: 'Articles',
      review: 'Reviews',
      preprint: 'Preprints',
      conference: 'Conferences',
      thesis: 'Theses',
    },
    pubTypeSingular: {
      article: 'Article',
      review: 'Review',
      preprint: 'Preprint',
      conference: 'Conference paper',
      thesis: 'Thesis',
    },
    filterLabel: 'Filter by type',
    footerNote: 'Views expressed on this site are the author’s own.',
    updated: 'Updated',
  },
} as const;

/** Axes de recherche : titre court et ancre sur la page Recherche */
export const axes = {
  brainage: {
    fr: 'Âge cérébral et trajectoires de vieillissement',
    en: 'Brain age and ageing trajectories',
  },
  multimodal: {
    fr: 'Discordance entre structure et métabolisme',
    en: 'Structure–metabolism discordance',
  },
  worry: {
    fr: 'Inquiétude et anxiété du sujet âgé',
    en: 'Worry and anxiety in late life',
  },
  biomarkers: {
    fr: 'Biomarqueurs en psychiatrie du sujet âgé',
    en: 'Biomarkers in geriatric psychiatry',
  },
  pet: {
    fr: 'Imagerie TEP cérébrale',
    en: 'Brain PET imaging',
  },
} as const;
export type AxisKey = keyof typeof axes;
