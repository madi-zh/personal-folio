import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    period: z.string(),
    highlights: z.array(z.string()),
    tech: z.array(z.string()),
    metrics: z.object({
      commits: z.string().optional(),
      contribution: z.string().optional(),
      users: z.string().optional(),
      impact: z.string().optional(),
    }).optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
