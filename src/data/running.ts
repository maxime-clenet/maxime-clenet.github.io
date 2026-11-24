// Running: efforts listed by year on the /running page.
// Race reports (the mini blog) live in src/content/running/, one Markdown file per report.

export const runner = {
  handle: 'Crêpe Secrète',
};

export type Effort = {
  year: number;
  date?: string; // 'YYYY-MM-DD' or 'YYYY-MM'
  title: string;
  href?: string; // makes the title itself a link
  place?: string;
  stats?: string[]; // e.g. ['7 h 41 min 42 s', 'Unsupported']
  tag?: string; // short label, e.g. 'FKT'
  links: { label: string; href: string }[];
  report?: string; // slug of a race report in src/content/running/
};

export const efforts: Effort[] = [
  {
    year: 2026,
    date: '2026-07-27',
    title: 'GR 340 – Tour de Belle-Île',
    place: 'Belle-Île-en-Mer, France',
    stats: ['77.41 km', '2,352 m D+', '7 h 41 min 42 s', 'Unsupported'],
    tag: 'FKT',
    links: [
      { label: 'FKT', href: 'https://fastestknowntime.com/fkt/maxime-clenet-gr-340-tour-de-belle-ile-france-2026-07-27' },
      { label: 'Strava', href: 'https://www.strava.com/activities/19487049475' },
    ],
  },
  {
    year: 2025,
    date: '2025-04',
    title: 'Montreal Circumnavigation',
    place: 'Montréal, QC, Canada',
    stats: ['123.87 km', '9 h 52 min'],
    links: [{ label: 'Strava', href: 'https://www.strava.com/activities/21104028975' }],
  },
  {
    year: 2024,
    date: '2024-05',
    title: 'Climbing Mont Blanc on Mont Royal',
    place: 'Montréal, QC, Canada',
    stats: ['57.72 km', '4,879 m D+', '9 h 42 min'],
    links: [{ label: 'Strava', href: 'https://www.strava.com/activities/21103976085' }],
  },
];
