import type { Lang, AxisKey } from './ui';

/**
 * Textes des pages, en français et en anglais.
 * Modifier ici le contenu rédactionnel ; la mise en page est dans src/views/.
 */

type Axis = { key: AxisKey; id: string; summary: string; body: string[]; status?: string };

type Copy = {
  meta: Record<'home' | 'research' | 'publications' | 'clinical' | 'cv', { title: string; description: string }>;
  home: {
    lede: string;
    affiliations: string[];
    figureCaption: string;
    sections: { axes: string; selected: string; clinical: string; thesis: string };
    clinical: string;
    clinicalLink: string;
    thesisIntro: string;
    researchLink: string;
  };
  research: {
    heading: string;
    intro: string;
    axesHeading: string;
    axes: Axis[];
    relatedLabel: string;
    thesis: {
      heading: string;
      title: string;
      facts: [string, string][];
      summary: string;
      link: string;
    };
    methods: { heading: string; items: string[] };
    collaborations: { heading: string; items: [string, string][] };
  };
  publications: { heading: string; intro: string };
  clinical: {
    heading: string;
    paragraphs: string[];
    patientsHeading: string;
    patients: string;
    patientsLink: string;
  };
  cv: {
    heading: string;
    timelineHeading: string;
    timeline: { when: string; what: string; where: string; detail?: string }[];
    trainingHeading: string;
    training: { when: string; what: string; where: string }[];
    talksHeading: string;
    talks: { when: string; what: string; where: string }[];
    skillsHeading: string;
    skills: string[];
  };
};

const fr: Copy = {
  meta: {
    home: {
      title: 'Jacques-Yves Campion — Psychiatre de la personne âgée, IA et neuroimagerie',
      description:
        'Psychiatre de la personne âgée au CMRR du CHRU de Tours et doctorant en neurosciences (iBraiN, Inserm – Université de Tours). Intelligence artificielle appliquée à la neuroimagerie.',
    },
    research: {
      title: 'Recherche — Jacques-Yves Campion',
      description:
        'Âge cérébral, discordance IRM–TEP, inquiétude du sujet âgé et biomarqueurs : apprentissage profond appliqué à la neuroimagerie.',
    },
    publications: {
      title: 'Publications — Jacques-Yves Campion',
      description: 'Articles, préprints, communications et thèses de Jacques-Yves Campion.',
    },
    clinical: {
      title: 'Clinique — Jacques-Yves Campion',
      description: 'Activité clinique en psychiatrie de la personne âgée au CMRR du CHRU de Tours.',
    },
    cv: {
      title: 'Parcours — Jacques-Yves Campion',
      description: 'Formation, postes, communications et compétences de Jacques-Yves Campion.',
    },
  },
  home: {
    lede:
      'Je consulte au Centre Mémoire de Ressources et de Recherche du CHRU de Tours et je développe des méthodes d’intelligence artificielle pour lire dans l’IRM et la TEP ce qui sépare le vieillissement cérébral normal des maladies neurodégénératives et psychiatriques.',
    affiliations: [
      'Centre Mémoire de Ressources et de Recherche (CMRR), CHRU de Tours',
      'UMR 1253 iBraiN, Inserm – Université de Tours',
      'En collaboration avec le Department of Psychiatry, University of Pittsburgh',
    ],
    figureCaption:
      'Coupe axiale stylisée et carte de saillance, calculées pour ce site : les zones colorées figurent les régions sur lesquelles un modèle s’appuie pour prédire.',
    sections: {
      axes: 'Axes de recherche',
      selected: 'Publications choisies',
      clinical: 'Clinique',
      thesis: 'Thèse en cours',
    },
    clinical:
      'Au CMRR, j’interviens dans l’évaluation des troubles cognitifs du sujet âgé, à l’interface entre psychiatrie et neurologie. Les questions que pose cette clinique — dépression ou maladie neurodégénérative débutante, anxiété ou déclin cognitif — sont le point de départ de ma recherche.',
    clinicalLink: 'Activité clinique',
    thesisIntro: 'sous la direction du Pr Thomas Desmidt (Université de Tours) et de Helmet T. Karim (University of Pittsburgh), depuis 2022.',
    researchLink: 'Détail des axes de recherche',
  },
  research: {
    heading: 'Recherche',
    intro:
      'Une même question traverse ces travaux : comment extraire des examens d’imagerie réalisés en routine des marqueurs fiables, individuels et interprétables de la santé cérébrale du sujet âgé ? J’y travaille avec des modèles d’apprentissage profond entraînés sur de grandes bases multicentriques, en confrontant toujours leurs résultats à la clinique.',
    axesHeading: 'Axes',
    axes: [
      {
        key: 'brainage',
        id: 'age-cerebral',
        summary: 'Estimer l’âge du cerveau sur l’IRM pour repérer les écarts au vieillissement normal selon les pathologies.',
        body: [
          'L’écart entre l’âge estimé du cerveau et l’âge réel résume en un seul indicateur l’intégrité structurale du cerveau. Nous entraînons des réseaux de neurones convolutifs 3D sur des IRM de sujets sains issues de nombreuses cohortes, puis nous étudions comment cet écart varie selon les pathologies neurologiques et psychiatriques et quelles régions guident la prédiction.',
          'Un travail associé explore les représentations compactes de l’IRM cérébrale apprises par des autoencodeurs 3D, et la place qu’y occupent les différences entre sites d’acquisition.',
        ],
        status: 'Manuscrit en préparation',
      },
      {
        key: 'multimodal',
        id: 'discordance',
        summary: 'Combiner IRM et TEP-FDG dans un index de discordance pour détecter tôt la neurodégénérescence.',
        body: [
          'L’atrophie visible en IRM et l’hypométabolisme visible en TEP-FDG n’évoluent pas au même rythme. J’ai proposé trois index de discordance entre ces modalités (absolu, relatif et tanh) et évalué leur capacité à prédire l’âge et le stade clinique — sujet sain, trouble cognitif léger précoce ou tardif, maladie d’Alzheimer — dans la base ADNI. L’index tanh s’est montré le plus performant, en particulier pour les stades précoces.',
          'Ce travail prolonge mon mémoire de master (2017) et a fait l’objet de ma thèse de médecine (2024).',
        ],
      },
      {
        key: 'worry',
        id: 'inquietude',
        summary: 'Décoder les états d’inquiétude en IRM fonctionnelle avec des réseaux récurrents.',
        body: [
          'L’inquiétude excessive est fréquente et invalidante chez le sujet âgé. À partir d’IRM fonctionnelles acquises pendant une tâche d’induction de l’inquiétude puis de réévaluation, nous entraînons des réseaux récurrents (LSTM) à reconnaître ces états mentaux et testons leur généralisation sur une cohorte indépendante.',
          'Le réseau de l’attention dorsale, l’hippocampe antérieur et l’aire motrice supplémentaire contribuent le plus à la prédiction de l’inquiétude.',
        ],
      },
      {
        key: 'biomarkers',
        id: 'biomarqueurs',
        summary: 'Évaluer des marqueurs biologiques et d’imagerie utiles en pratique de psychiatrie gériatrique.',
        body: [
          'Avec l’équipe de psychiatrie de Tours et nos partenaires, je contribue à l’étude de marqueurs utilisables en pratique : neurofilaments à chaîne légère, signature métabolique de l’usage chronique de benzodiazépines, intégrité de la substance blanche dans les hypersignaux (ratio T1w/T2w-FLAIR), pulsatilité cérébrale dans la dépression.',
        ],
      },
      {
        key: 'pet',
        id: 'tep',
        summary: 'Travaux antérieurs en TEP cérébrale, menés à Marseille.',
        body: [
          'Avec le Pr Eric Guedj (AP-HM, Institut Fresnel et CERIMED, Aix-Marseille Université) : profils d’hypométabolisme en TEP-FDG dans le COVID long chez l’adulte et l’enfant, encéphalites auto-immunes, effets du confinement sur le métabolisme cérébral et normalisation des données TEP.',
        ],
      },
    ],
    relatedLabel: 'Travaux liés',
    thesis: {
      heading: 'Thèse de sciences',
      title: 'Diagnostic par algorithmes d’apprentissage profond de pathologies neuropsychiatriques à partir de données de neuroimagerie',
      facts: [
        ['Direction', 'Pr Thomas Desmidt (Université de Tours) et Helmet T. Karim (University of Pittsburgh)'],
        ['Laboratoire', 'UMR 1253 iBraiN, équipe Psychiatrie expérimentale et translationnelle'],
        ['École doctorale', 'Santé, Sciences biologiques et Chimie du vivant, Université de Tours'],
        ['Début', 'Novembre 2022'],
      ],
      summary:
        'Les modèles d’apprentissage profond classent de mieux en mieux les pathologies à l’échelle des populations, mais restent peu utilisés en clinique : prédictions individuelles peu fiables, robustesse limitée face à de nouvelles catégories diagnostiques, classification restreinte à quelques pathologies à la fois. Cette thèse vise un modèle probabiliste, multimodal (IRM, TEP-FDG) et capable de traiter simultanément plusieurs pathologies neuropsychiatriques, à partir de grandes bases internationales.',
      link: 'Fiche sur theses.fr',
    },
    methods: {
      heading: 'Méthodes et outils',
      items: ['Python, PyTorch, TorchIO', 'ANTs, FreeSurfer, Clinica', 'R et statistiques', 'Calcul sur grappes GPU'],
    },
    collaborations: {
      heading: 'Collaborations',
      items: [
        ['University of Pittsburgh', 'Department of Psychiatry — Helmet T. Karim, Carmen Andreescu'],
        ['Johns Hopkins University', 'Department of Applied Mathematics and Statistics — Rushil Srirambhatla'],
        ['Aix-Marseille Université', 'Institut Fresnel, CERIMED — Eric Guedj'],
      ],
    },
  },
  publications: {
    heading: 'Publications',
    intro: 'Articles, préprints, communications et thèses, du plus récent au plus ancien. Les citations sont suivies sur',
  },
  clinical: {
    heading: 'Clinique',
    paragraphs: [
      'Mon activité clinique principale se déroule au Centre Mémoire de Ressources et de Recherche (CMRR) du CHRU de Tours. Les CMRR sont des centres de recours pour le diagnostic des troubles cognitifs et des maladies neurodégénératives ; ils associent consultation spécialisée, expertise diagnostique et recherche clinique.',
      'En tant que psychiatre de la personne âgée, j’interviens à l’interface entre psychiatrie et neurologie. Une part importante de cette clinique consiste à démêler ce qui relève d’un trouble psychiatrique — dépression, anxiété, trouble psychotique à début tardif — de ce qui annonce une maladie neurodégénérative, et à reconnaître leur intrication.',
      'Cette pratique oriente mes questions de recherche : les outils d’imagerie et d’intelligence artificielle que je développe visent précisément ces situations diagnostiques difficiles.',
    ],
    patientsHeading: 'Patients et aidants',
    patients:
      'Pour une consultation, rapprochez-vous de votre médecin traitant et du secrétariat du CMRR du CHRU de Tours. Ce site ne permet pas de répondre à des demandes médicales.',
    patientsLink: 'Site du CHRU de Tours',
  },
  cv: {
    heading: 'Parcours',
    timelineHeading: 'Formation et postes',
    timeline: [
      {
        when: 'Depuis 2022',
        what: 'Doctorat en neurosciences',
        where: 'Université de Tours — UMR 1253 iBraiN, Inserm',
        detail: 'Apprentissage profond et neuroimagerie pour le diagnostic des pathologies neuropsychiatriques.',
      },
      {
        when: 'Depuis 2021',
        what: 'DES de psychiatrie, option psychiatrie de la personne âgée',
        where: 'CHRU et Université de Tours',
      },
      {
        when: '2024',
        what: 'Doctorat en médecine',
        where: 'Université de Tours',
        detail: 'Thèse sur les index de discordance IRM–TEP-FDG, soutenue le 5 septembre 2024.',
      },
      {
        when: '2019 – 2021',
        what: 'Analyse d’imagerie moléculaire et apprentissage automatique',
        where: 'Équipe IMoTheP, Institut Fresnel et CERIMED, Aix-Marseille Université',
      },
      {
        when: '2021',
        what: 'Diplôme de formation approfondie en sciences médicales',
        where: 'Aix-Marseille Université',
      },
      {
        when: '2017',
        what: 'Master de neurosciences',
        where: 'Aix-Marseille Université',
        detail: 'Processus neurodégénératifs physiologiques du cortex en IRM et TEP-FDG, et leurs corrélats cognitifs (Pr Mathieu Ceccaldi, Pr Eric Guedj).',
      },
    ],
    trainingHeading: 'Formation complémentaire',
    training: [{ when: '2020', what: 'Virtual Training School « Radiomics and AI for Molecular Medicine »', where: 'IFAMP' }],
    talksHeading: 'Communications',
    talks: [
      {
        when: '2026',
        what: 'Autoencodeur 3D sans connexions résiduelles pour la reconstruction d’IRM cérébrale (communication orale, co-auteur)',
        where: 'AI4M3D Workshop, ECCV',
      },
      {
        when: '2020',
        what: 'Introduction à l’intelligence artificielle appliquée à la neuroimagerie 3D',
        where: 'Séminaire annuel de l’Institut d’imagerie de Marseille, Aix-Marseille Université',
      },
    ],
    skillsHeading: 'Compétences techniques',
    skills: ['Python, PyTorch, TorchIO', 'ANTs, FreeSurfer, Clinica', 'R et statistiques', 'Calcul sur grappes GPU', 'Développement web'],
  },
};

const en: Copy = {
  meta: {
    home: {
      title: 'Jacques-Yves Campion — Geriatric psychiatry, AI and neuroimaging',
      description:
        'Geriatric psychiatrist at the Memory Resource and Research Centre (CMRR), Tours University Hospital, and PhD candidate in neuroscience (iBraiN, Inserm – University of Tours). AI applied to neuroimaging.',
    },
    research: {
      title: 'Research — Jacques-Yves Campion',
      description: 'Brain age, MRI–PET discordance, late-life worry and biomarkers: deep learning applied to neuroimaging.',
    },
    publications: {
      title: 'Publications — Jacques-Yves Campion',
      description: 'Articles, preprints, conference papers and theses by Jacques-Yves Campion.',
    },
    clinical: {
      title: 'Clinical work — Jacques-Yves Campion',
      description: 'Geriatric psychiatry at the Memory Resource and Research Centre, Tours University Hospital.',
    },
    cv: {
      title: 'CV — Jacques-Yves Campion',
      description: 'Education, positions, talks and skills of Jacques-Yves Campion.',
    },
  },
  home: {
    lede:
      'I see patients at the Memory Resource and Research Centre of Tours University Hospital and develop artificial intelligence methods that read, in MRI and PET, what separates normal brain ageing from neurodegenerative and psychiatric disease.',
    affiliations: [
      'Memory Resource and Research Centre (CMRR), Tours University Hospital',
      'UMR 1253 iBraiN, Inserm – University of Tours',
      'In collaboration with the Department of Psychiatry, University of Pittsburgh',
    ],
    figureCaption:
      'Stylised axial slice and saliency map computed for this site: coloured areas stand for the regions a model relies on to make its prediction.',
    sections: {
      axes: 'Research themes',
      selected: 'Selected publications',
      clinical: 'Clinical work',
      thesis: 'Doctoral thesis',
    },
    clinical:
      'At the memory centre I take part in the assessment of cognitive disorders in older adults, at the interface between psychiatry and neurology. The questions this work raises — depression or early neurodegeneration, anxiety or cognitive decline — are where my research starts.',
    clinicalLink: 'Clinical work',
    thesisIntro: 'supervised by Prof. Thomas Desmidt (University of Tours) and Helmet T. Karim (University of Pittsburgh), since 2022.',
    researchLink: 'Research themes in detail',
  },
  research: {
    heading: 'Research',
    intro:
      'One question runs through this work: how can routine imaging yield reliable, individual and interpretable markers of brain health in older adults? I approach it with deep learning models trained on large multi-site datasets, always checking their output against clinical reality.',
    axesHeading: 'Themes',
    axes: [
      {
        key: 'brainage',
        id: 'brain-age',
        summary: 'Estimating brain age from MRI to detect departures from normal ageing across diseases.',
        body: [
          'The gap between estimated brain age and chronological age summarises structural brain integrity in a single measure. We train 3D convolutional neural networks on MRI from healthy participants across many cohorts, then study how this gap varies across neurological and psychiatric disorders and which regions drive the prediction.',
          'Related work explores compact representations of brain MRI learned by 3D autoencoders, and how much of them reflects differences between acquisition sites.',
        ],
        status: 'Manuscript in preparation',
      },
      {
        key: 'multimodal',
        id: 'discordance',
        summary: 'Combining MRI and FDG-PET into a discordance index to detect neurodegeneration early.',
        body: [
          'Atrophy seen on MRI and hypometabolism seen on FDG-PET do not progress at the same pace. I proposed three discordance indices between these modalities (absolute, relative and tanh) and assessed how well they predict age and clinical stage — healthy, early or late mild cognitive impairment, Alzheimer’s disease — in the ADNI database. The tanh index performed best, especially for early stages.',
          'This work extends my master’s thesis (2017) and was the subject of my medical doctoral thesis (2024).',
        ],
      },
      {
        key: 'worry',
        id: 'worry',
        summary: 'Decoding worry states from functional MRI with recurrent neural networks.',
        body: [
          'Excessive worry is common and disabling in older adults. Using functional MRI acquired during a worry induction and reappraisal task, we train recurrent networks (LSTM) to recognise these mental states and test how they generalise to an independent cohort.',
          'The dorsal attention network, the anterior hippocampus and the supplementary motor area contribute most to predicting worry.',
        ],
      },
      {
        key: 'biomarkers',
        id: 'biomarkers',
        summary: 'Evaluating biological and imaging markers useful in geriatric psychiatry practice.',
        body: [
          'With the Tours psychiatry team and our partners, I contribute to work on markers usable in practice: neurofilament light chain, the metabolic signature of chronic benzodiazepine use, white matter integrity within hyperintensities (T1w/T2w-FLAIR ratio), and brain pulsatility in depression.',
        ],
      },
      {
        key: 'pet',
        id: 'pet',
        summary: 'Earlier brain PET work carried out in Marseille.',
        body: [
          'With Prof. Eric Guedj (AP-HM, Institut Fresnel and CERIMED, Aix-Marseille University): FDG-PET hypometabolism patterns in long COVID in adults and children, autoimmune encephalitis, the effect of lockdown on brain metabolism, and PET intensity normalisation.',
        ],
      },
    ],
    relatedLabel: 'Related work',
    thesis: {
      heading: 'PhD thesis',
      title: 'Deep learning diagnosis of neuropsychiatric disorders from neuroimaging data',
      facts: [
        ['Supervisors', 'Prof. Thomas Desmidt (University of Tours) and Helmet T. Karim (University of Pittsburgh)'],
        ['Laboratory', 'UMR 1253 iBraiN, Experimental and Translational Psychiatry team'],
        ['Doctoral school', 'Health, Biological Sciences and Chemistry of Life, University of Tours'],
        ['Started', 'November 2022'],
      ],
      summary:
        'Deep learning models classify diseases increasingly well at the population level but remain rarely used in clinics: individual predictions are unreliable, robustness to new diagnostic categories is limited, and classification covers only a few disorders at a time. This thesis aims at a probabilistic, multimodal (MRI, FDG-PET) model able to handle several neuropsychiatric disorders at once, built on large international databases.',
      link: 'Entry on theses.fr',
    },
    methods: {
      heading: 'Methods and tools',
      items: ['Python, PyTorch, TorchIO', 'ANTs, FreeSurfer, Clinica', 'R and statistics', 'GPU cluster computing'],
    },
    collaborations: {
      heading: 'Collaborations',
      items: [
        ['University of Pittsburgh', 'Department of Psychiatry — Helmet T. Karim, Carmen Andreescu'],
        ['Johns Hopkins University', 'Department of Applied Mathematics and Statistics — Rushil Srirambhatla'],
        ['Aix-Marseille University', 'Institut Fresnel, CERIMED — Eric Guedj'],
      ],
    },
  },
  publications: {
    heading: 'Publications',
    intro: 'Articles, preprints, conference papers and theses, most recent first. Citations are tracked on',
  },
  clinical: {
    heading: 'Clinical work',
    paragraphs: [
      'My main clinical activity is at the Memory Resource and Research Centre (CMRR) of Tours University Hospital. French CMRRs are referral centres for the diagnosis of cognitive disorders and neurodegenerative diseases, combining specialist consultation, diagnostic expertise and clinical research.',
      'As a geriatric psychiatrist, I work at the interface between psychiatry and neurology. Much of this work means telling apart what belongs to a psychiatric disorder — depression, anxiety, late-onset psychosis — from what heralds a neurodegenerative disease, and recognising when the two are intertwined.',
      'This practice shapes my research questions: the imaging and AI tools I develop target exactly these difficult diagnostic situations.',
    ],
    patientsHeading: 'Patients and carers',
    patients:
      'For an appointment, please speak with your general practitioner and contact the CMRR office at Tours University Hospital. This site cannot answer medical requests.',
    patientsLink: 'Tours University Hospital website',
  },
  cv: {
    heading: 'CV',
    timelineHeading: 'Education and positions',
    timeline: [
      {
        when: 'Since 2022',
        what: 'PhD in neuroscience',
        where: 'University of Tours — UMR 1253 iBraiN, Inserm',
        detail: 'Deep learning and neuroimaging for the diagnosis of neuropsychiatric disorders.',
      },
      {
        when: 'Since 2021',
        what: 'Psychiatry residency, geriatric psychiatry track',
        where: 'Tours University Hospital and University of Tours',
      },
      {
        when: '2024',
        what: 'Doctor of Medicine (MD)',
        where: 'University of Tours',
        detail: 'Thesis on MRI–FDG-PET discordance indices, defended on 5 September 2024.',
      },
      {
        when: '2019 – 2021',
        what: 'Molecular imaging analysis and machine learning',
        where: 'IMoTheP team, Institut Fresnel and CERIMED, Aix-Marseille University',
      },
      {
        when: '2021',
        what: 'Advanced medical studies diploma (DFASM)',
        where: 'Aix-Marseille University',
      },
      {
        when: '2017',
        what: 'MSc in neuroscience',
        where: 'Aix-Marseille University',
        detail: 'Physiological cortical neurodegeneration on MRI and FDG-PET and its cognitive correlates (Prof. Mathieu Ceccaldi, Prof. Eric Guedj).',
      },
    ],
    trainingHeading: 'Further training',
    training: [{ when: '2020', what: 'Virtual Training School “Radiomics and AI for Molecular Medicine”', where: 'IFAMP' }],
    talksHeading: 'Talks',
    talks: [
      {
        when: '2026',
        what: 'Skip-connection-free 3D autoencoder for whole-brain MRI reconstruction (oral, co-author)',
        where: 'AI4M3D Workshop, ECCV',
      },
      {
        when: '2020',
        what: 'Introduction to artificial intelligence applied to 3D neuroimaging',
        where: 'Annual seminar of the Marseille Imaging Institute, Aix-Marseille University',
      },
    ],
    skillsHeading: 'Technical skills',
    skills: ['Python, PyTorch, TorchIO', 'ANTs, FreeSurfer, Clinica', 'R and statistics', 'GPU cluster computing', 'Web development'],
  },
};

export const copy: Record<Lang, Copy> = { fr, en };
