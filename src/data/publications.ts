// Publications. Add `doi` (e.g. '10.1073/pnas.xxxx') or `url` to make a title clickable.
// Authors: write "M. Clenet" exactly as below so the name is highlighted automatically.
// "*" after a name = equal contribution. Names listed in `students` are underlined.

export type Pub = {
  authors: string;
  title: string;
  venue: string;
  year?: number;
  note?: string;
  short?: string; // short venue label shown as a tag
  selected?: boolean; // shown on the home page
  doi?: string;
  url?: string;
};

export const students = ['S. Harimanana', 'R. Dubé'];

export const articles: Pub[] = [
  {
    authors: 'M.-A. Blais, G. Blanchet, M. Clenet, L. Boulerice, M. Laporte, O. Morisette, L. Chavarie',
    title: 'From data to ecological insight: a comprehensive statistical toolkit for environmental DNA',
    venue: 'Environmental DNA',
    year: 2026,
    note: 'in press',
    short: 'eDNA',
  },
  {
    authors: 'M. Clenet, M. Dion, G. Blanchet',
    title: 'Addressing ecological challenges from a quantum computing perspective',
    venue: 'Methods in Ecology and Evolution',
    year: 2026,
    short: 'MEE',
    selected: true,
  },
  {
    authors: 'M. Clenet, F. Massol, J. Najim',
    title: 'Impact of a block structure on Lotka-Volterra systems',
    venue: 'Peer Community Journal',
    year: 2024,
    short: 'PCJ',
  },
  {
    authors: 'I. Akjouj, M. Barbier, M. Clenet, W. Hachem, M. Maïda, F. Massol, J. Najim, V. C. Tran',
    title: 'Complex systems in ecology: a guided tour with the large Lotka-Volterra model and random matrices',
    venue: 'Proceedings of the Royal Society A',
    year: 2024,
    short: 'Proc. R. Soc. A',
    selected: true,
  },
  {
    authors: 'Z. Miller*, M. Clenet*, K. Della Libera, F. Massol, S. Allesina',
    title: 'Coexistence of many species under a random competition-colonization trade-off',
    venue: 'Proceedings of the National Academy of Sciences',
    year: 2024,
    short: 'PNAS',
    selected: true,
  },
  {
    authors: 'M. Clenet, F. Massol, J. Najim',
    title: 'Equilibrium and surviving species in a large Lotka-Volterra system of differential equations',
    venue: 'Journal of Mathematical Biology',
    year: 2023,
    short: 'J. Math. Biol.',
    selected: true,
  },
  {
    authors: 'M. Clenet*, H. El Ferchichi*, J. Najim',
    title: 'Equilibrium in a large Lotka-Volterra system with pairwise correlated interactions',
    venue: 'Stochastic Processes and their Applications',
    year: 2022,
    short: 'SPA',
  },
  {
    authors: 'M. Clenet, M. Bentivegni, G. Druart',
    title: 'Statistical modeling of heat exchange coefficient evolution during quenching',
    venue: 'La Metallurgia Italiana',
    year: 2018,
    short: 'Metall. Ital.',
  },
];

export const conference: Pub[] = [
  {
    authors: 'M. Clenet, F. Massol, J. Najim',
    title: 'Surviving species in a large Lotka-Volterra system of differential equations',
    venue: 'GRETSI',
    year: 2022,
    short: 'GRETSI',
  },
  {
    authors: 'P. Bizeul, M. Clenet, J. Najim',
    title: 'Positive solutions for large random linear systems',
    venue: 'IEEE International Conference on Acoustics, Speech and Signal Processing',
    year: 2020,
    short: 'ICASSP',
  },
];

export const submitted: Pub[] = [
  {
    authors: 'S. Harimanana, M. Clenet, D. Gravel',
    title: 'Site fidelity and the persistence of migratory metapopulations',
    venue: 'Submitted to Ecology Letters',
  },
  {
    authors: 'M. Clenet*, F. Munoz*, C. Picard, A. Bernard, E. Pitard',
    title: 'Island biogeography through the lens of multiscale metapopulation dynamics: insights into species-area relationships',
    venue: 'Submitted to The American Naturalist',
  },
  {
    authors: 'M. Clenet*, M.-Y. Gueddari*',
    title: 'Approximate message passing for block-structured ecological systems',
    venue: 'Submitted to Bulletin of Mathematical Biology',
  },
];

export const inPrep: Pub[] = [
  {
    authors: 'M. Clenet, L. Mahaut, A. Celle, B. McGill, D. Mouillot, B. Enquist, N. Mouquet, C. Violle',
    title: 'The partitioning of ecosystem functions across species',
    venue: 'In preparation',
  },
  {
    authors: 'M. Clenet, S. Harimanana, G. Blanchet, D. Gravel',
    title: 'Modeling metapopulations in dynamic landscapes: toward a unified concept of temporal metapopulation capacity',
    venue: 'In preparation',
  },
  {
    authors: 'F. Thibault, M. Clenet, D. Gravel, A. Allard',
    title: 'How graph cycles shape ecosystem stability',
    venue: 'In preparation',
  },
  {
    authors: 'R. Dubé, M. Dion, G. Blanchet, J. Vivian, M. Clenet',
    title: 'Optimization as a bridge between ecology and quantum computing',
    venue: 'In preparation',
  },
  {
    authors: 'J. Vivian, M. Clenet, M. Dion, G. Blanchet',
    title: 'Efficient spatial planning for forest restoration via optimization algorithms: a proof of concept for potential quantum computing applications',
    venue: 'In preparation',
  },
  {
    authors: 'M. Clenet, G. Blanchet, D. Gravel',
    title: 'Persistence of metapopulations in seasonally fluctuating landscapes',
    venue: 'In preparation',
  },
];
