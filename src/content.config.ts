import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Race reports: one Markdown file per report in src/content/endurance/.
// Put photos next to the file (e.g. src/content/endurance/belle-ile/finish.jpg) and
// reference them with a relative path, in the text or as `cover`.
const endurance = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/endurance' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      summary: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { endurance };
