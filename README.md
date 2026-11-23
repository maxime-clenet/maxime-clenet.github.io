# maxime-clenet.github.io

Personal research website of Maxime Clenet, built with [Astro](https://astro.build/) and deployed with GitHub Pages.

## Edit the content

All the text lives in `src/data/` — you rarely need to touch the pages themselves.

| What | File |
|---|---|
| Name, position, links, research statement, career, news | `src/data/site.ts` |
| Publications (`selected: true` = shown on the home page, add `doi` to link a title) | `src/data/publications.ts` |
| Research themes | `src/data/research.ts` |
| Talks | `src/data/talks.json` |
| Teaching and supervision | `src/data/teaching.ts` |
| CV | replace `public/Clenet_CV.pdf` |

Design: colors and fonts are defined at the top of `src/styles/global.css`.
The home-page figure uses real eigenvalues of random 500-species community matrices (`src/data/eigenvalues.json`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build in dist/
```

## Publish

Every push to `main` runs `.github/workflows/deploy.yml`.
In the repository settings, set **Pages → Source** to **GitHub Actions**.
