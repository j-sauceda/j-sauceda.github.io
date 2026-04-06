import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.md",
  }),
  schema: z.object({
    title: z.string(),
    image_url: z.string(),
    backend_url: z.string().url().optional(),
    frontend_url: z.string().url().optional(),
    monorepo_url: z.string().url().optional(),
    deployment_url: z.string().url().optional(),
    download_url: z.string().url().optional(),
  }),
});

export const collections = {
  projects,
};
