// Research themes. `glyph` selects the small illustration drawn for each theme.

export type Theme = {
  id: string;
  title: string;
  field: string;
  question: string;
  text: string;
  project?: string;
  glyph: 'contribution' | 'disk' | 'patches' | 'temporal' | 'qubits';
  papers: string[]; // titles, matched against publications for the list on the research page
};

export const themes: Theme[] = [
  {
    id: 'functional-ecology',
    title: 'Unique species, major effects',
    field: 'Functional ecology',
    question: 'Why does a small fraction of species account for most ecosystem functions?',
    text: 'In most ecosystems, a few species seem to contribute disproportionately to how the ecosystem works. My current project aims to disentangle the contributions of individual species to ecosystem functions and to understand the mechanisms behind these unequal contributions.',
    project: 'CEFE, CNRS & Université de Montpellier (2025 –), with Lucie Mahaut and Cyrille Violle',
    glyph: 'contribution',
    papers: ['The partitioning of ecosystem functions across species'],
  },
  {
    id: 'large-communities',
    title: 'Coexistence in large communities',
    field: 'Community dynamics',
    question: 'How many species can coexist when they all interact, and which ones survive?',
    text: 'Ecological communities often contain many interacting species. Using large Lotka-Volterra systems and tools from random matrix theory, I study when species can coexist, how stable these communities are and how many species survive, and how the structure of interactions changes the answer.',
    project: 'Ph.D., Université Gustave Eiffel (2019 – 2022), with François Massol and Jamal Najim',
    glyph: 'disk',
    papers: [
      'Complex systems in ecology: a guided tour with the large Lotka-Volterra model and random matrices',
      'Coexistence of many species under a random competition-colonization trade-off',
      'Impact of a block structure on Lotka-Volterra systems',
      'Equilibrium and surviving species in a large Lotka-Volterra system of differential equations',
      'Equilibrium in a large Lotka-Volterra system with pairwise correlated interactions',
      'Approximate message passing for block-structured ecological systems',
    ],
  },
  {
    id: 'metapopulations',
    title: 'Metapopulations in space and time',
    field: 'Spatial ecology',
    question: 'How do species persist in landscapes that change over space and time?',
    text: 'Species persist across networks of habitat patches, but these habitats change: with the seasons, with disturbances, along migration routes. I develop metapopulation models that integrate the temporal dimension of habitats, and connect metapopulation dynamics to island biogeography.',
    project: 'Université de Sherbrooke (2025), FRQNT postdoctoral fellowship, with Guillaume Blanchet and Dominique Gravel',
    glyph: 'patches',
    papers: [
      'Island biogeography through the lens of multiscale metapopulation dynamics: insights into species-area relationships',
      'Site fidelity and the persistence of migratory metapopulations',
      'Modeling metapopulations in dynamic landscapes: toward a unified concept of temporal metapopulation capacity',
      'Persistence of metapopulations in seasonally fluctuating landscapes',
    ],
  },
  {
    id: 'temporal-networks',
    title: 'Interaction networks over time',
    field: 'Ecological networks',
    question: 'What do we learn by treating ecological interactions as networks that change over time?',
    text: 'Interactions between species appear, disappear and change in strength. I study how time-varying interaction networks shape community dynamics and stability, and I co-organize a workshop on this topic in Namur in 2027, funded by naXys (University of Namur).',
    glyph: 'temporal',
    papers: ['How graph cycles shape ecosystem stability'],
  },
  {
    id: 'quantum-ecology',
    title: 'Quantum computing for ecology',
    field: 'New computational tools',
    question: 'Can quantum computing help solve computationally hard problems in ecology?',
    text: 'Many ecological questions lead to hard optimization problems, from detecting communities in ecological networks to planning forest restoration. I explore how quantum computing, and the optimization methods it builds on, can help address them.',
    project: 'Université de Sherbrooke (2023 – 2025), with Guillaume Blanchet and Dominique Gravel',
    glyph: 'qubits',
    papers: [
      'Addressing ecological challenges from a quantum computing perspective',
      'Optimization as a bridge between ecology and quantum computing',
      'Efficient spatial planning for forest restoration via optimization algorithms: a proof of concept for potential quantum computing applications',
    ],
  },
];
