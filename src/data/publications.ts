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
