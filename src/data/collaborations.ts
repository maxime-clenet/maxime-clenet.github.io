// Collaborations shown on the map (CV page).
// One entry per city. `lon`/`lat` in degrees. Places in France are drawn on the France panel,
// the others on the world panel. `label` sets where the city name goes next to its dot.

export type Place = {
  id: string;
  city: string;
  country: string;
  lon: number;
  lat: number;
  france?: boolean;
  role?: string; // a position I held there
  label?: 'left' | 'right' | 'above' | 'below';
  institutions: { name: string }[];
};

export const home = 'montpellier';

export const places: Place[] = [
  // France
  {
    id: 'montpellier',
    city: 'Montpellier',
    country: 'France',
    lon: 3.88,
    lat: 43.61,
    france: true,
    role: 'Postdoc, 2025 –',
    label: 'below',
    institutions: [
      { name: 'CEFE, CNRS & Université de Montpellier' },
      { name: 'MARBEC, Université de Montpellier' },
      { name: 'Eco&Sols, IRD, CIRAD, INRAE & Institut Agro' },
    ],
  },
  {
    id: 'paris',
    city: 'Paris',
    country: 'France',
    lon: 2.35,
    lat: 48.86,
    france: true,
    role: 'Ph.D., 2019 – 2022',
    label: 'left',
    institutions: [
      { name: 'LIGM & LAMA, CNRS & Université Gustave Eiffel' },
      { name: 'EDF R&D, LNHE, Chatou' },
    ],
  },
  {
    id: 'lille',
    city: 'Lille',
    country: 'France',
    lon: 3.06,
    lat: 50.63,
    france: true,
    label: 'right',
    institutions: [{ name: 'CNRS & Université de Lille' }],
  },
  {
    id: 'lyon',
    city: 'Lyon',
    country: 'France',
    lon: 4.87,
    lat: 45.78,
    france: true,
    label: 'left',
    institutions: [{ name: 'LBBE, Université Claude Bernard Lyon 1' }],
  },
  {
    id: 'grenoble',
    city: 'Grenoble',
    country: 'France',
    lon: 5.72,
    lat: 45.19,
    france: true,
    label: 'right',
    institutions: [{ name: 'LECA, Université Grenoble Alpes' }],
  },
  {
    id: 'toulouse',
    city: 'Toulouse',
    country: 'France',
    lon: 1.44,
    lat: 43.6,
    france: true,
    label: 'left',
    institutions: [],
  },
  {
    id: 'surba',
    city: 'Surba',
    country: 'French Pyrenees, France',
    lon: 1.57,
    lat: 42.86,
    france: true,
    label: 'left',
    institutions: [],
  },

  // World
  {
    id: 'as',
    city: 'Ås',
    country: 'Norway',
    lon: 10.77,
    lat: 59.67,
    label: 'right',
    institutions: [{ name: 'Norwegian University of Life Sciences (NMBU)' }],
  },
  {
    id: 'sherbrooke',
    city: 'Sherbrooke',
    country: 'Québec, Canada',
    lon: -71.93,
    lat: 45.38,
    role: 'Postdoc, 2023 – 2025',
    label: 'left',
    institutions: [{ name: 'Université de Sherbrooke' }],
  },
  {
    id: 'quebec',
    city: 'Québec',
    country: 'Québec, Canada',
    lon: -71.21,
    lat: 46.81,
    label: 'above',
    institutions: [{ name: 'Université Laval' }],
  },
  {
    id: 'orono',
    city: 'Orono',
    country: 'Maine, USA',
    lon: -68.67,
    lat: 44.9,
    label: 'right',
    institutions: [{ name: 'University of Maine' }],
  },
  {
    id: 'new-haven',
    city: 'New Haven',
    country: 'Connecticut, USA',
    lon: -72.93,
    lat: 41.31,
    label: 'right',
    institutions: [{ name: 'Yale University' }],
  },
  {
    id: 'chicago',
    city: 'Chicago',
    country: 'Illinois, USA',
    lon: -87.6,
    lat: 41.79,
    label: 'below',
    institutions: [{ name: 'University of Chicago' }],
  },
  {
    id: 'boulder',
    city: 'Boulder',
    country: 'Colorado, USA',
    lon: -105.27,
    lat: 40.01,
    label: 'above',
    institutions: [{ name: 'University of Colorado Boulder' }],
  },
  {
    id: 'tucson',
    city: 'Tucson',
    country: 'Arizona, USA',
    lon: -110.95,
    lat: 32.23,
    label: 'right',
    institutions: [{ name: 'University of Arizona' }],
  },
  {
    id: 'los-angeles',
    city: 'Los Angeles',
    country: 'California, USA',
    lon: -118.44,
    lat: 34.07,
    label: 'above',
    institutions: [{ name: 'University of California Los Angeles' }],
  },
  {
    id: 'sao-paulo',
    city: 'São Paulo',
    country: 'Brazil',
    lon: -46.73,
    lat: -23.56,
    label: 'right',
    institutions: [{ name: 'Universidade de São Paulo' }],
  },
  {
    id: 'cordoba',
    city: 'Córdoba',
    country: 'Argentina',
    lon: -64.19,
    lat: -31.44,
    label: 'left',
    institutions: [{ name: 'IMBIV, CONICET & Universidad Nacional de Córdoba' }],
  },
  {
    id: 'sunshine-coast',
    city: 'Sunshine Coast',
    country: 'Queensland, Australia',
    lon: 153.06,
    lat: -26.72,
    label: 'left',
    institutions: [{ name: 'University of the Sunshine Coast' }],
  },
];
