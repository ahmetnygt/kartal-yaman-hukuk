import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // Yeni eklenen zımbırtı bu

const makalelerCollection = defineCollection({
  // Eski type: 'content' iptal, artık klasörü bu loader ile gösteriyoruz
  loader: glob({ pattern: "**/*.md", base: "./src/content/makaleler" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('Av. Kartal Yaman'),
    description: z.string(),
  }),
});

export const collections = {
  'makaleler': makalelerCollection,
};