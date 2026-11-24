// Running: efforts listed by year on the /running page.
// Race reports (the mini blog) live in src/content/running/, one Markdown file per report.

export const runner = {
  handle: 'Crêpe Secrète',
};

export type Effort = {
  year: number;
  date?: string; // 'YYYY-MM-DD'
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
    stats: ['7 h 41 min 42 s', 'Unsupported'],
    tag: 'FKT',
    links: [
      { label: 'FKT', href: 'https://fastestknowntime.com/fkt/maxime-clenet-gr-340-tour-de-belle-ile-france-2026-07-27' },
      { label: 'Strava', href: 'https://www.strava.com/activities/19487049475' },
    ],
  },
  {
    year: 2025,
    title: 'Activity on Strava',
    href: 'https://www.strava.com/activities/21104028975',
    links: [],
  },
  {
    year: 2024,
    title: 'Activity on Strava',
    href: 'https://www.strava.com/activities/21103976085',
    links: [],
  },
];
