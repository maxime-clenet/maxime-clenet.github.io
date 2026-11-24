// Endurance: running and cycling efforts listed by year on the /endurance page.
// Race reports (the mini blog) live in src/content/endurance/, one Markdown file per report.

export const runner = {
  handle: 'Crêpe Secrète',
  strava: 'https://www.strava.com/athletes/206398766',
};

export type Effort = {
  year: number;
  sport: 'run' | 'bike';
  date?: string; // 'YYYY-MM-DD' or 'YYYY-MM'
  title: string;
  href?: string; // makes the title itself a link
  place?: string;
  stats?: string[]; // e.g. ['7 h 41 min', 'Unsupported']
  tag?: string; // short label, e.g. 'FKT'
  links: { label: string; href: string }[];
  report?: string; // slug of a race report in src/content/endurance/
};

export const efforts: Effort[] = [
  {
    year: 2026,
    sport: 'run',
    date: '2026-07-27',
    title: 'GR 340 – Tour de Belle-Île',
    place: 'Belle-Île-en-Mer, France',
    stats: ['77 km', '2,352 m D+', '7 h 41 min', 'Unsupported'],
    tag: 'FKT',
    links: [
      { label: 'FKT', href: 'https://fastestknowntime.com/fkt/maxime-clenet-gr-340-tour-de-belle-ile-france-2026-07-27' },
      { label: 'Strava', href: 'https://www.strava.com/activities/19487049475' },
    ],
  },
  {
    year: 2026,
    sport: 'bike',
    title: 'Montpellier – Mont Aigoual and back',
    place: 'Hérault & Gard, France',
    stats: ['219 km', '2,594 m D+', '7 h 27 min'],
    links: [{ label: 'Strava', href: 'https://www.strava.com/activities/19851663951' }],
  },
  {
    year: 2025,
    sport: 'run',
    date: '2025-04',
    title: 'Montreal Circumnavigation',
    place: 'Montréal, QC, Canada',
    stats: ['124 km', '9 h 52 min'],
    links: [{ label: 'Strava', href: 'https://www.strava.com/activities/21104028975' }],
  },
  {
    year: 2024,
    sport: 'run',
    date: '2024-05',
    title: 'Climbing Mont Blanc on Mont Royal',
    place: 'Montréal, QC, Canada',
    stats: ['58 km', '4,879 m D+', '9 h 42 min'],
    links: [{ label: 'Strava', href: 'https://www.strava.com/activities/21103976085' }],
  },
];
