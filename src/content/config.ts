import { defineCollection } from 'astro:content';

// Minimal content collections to verify sync
const articles = defineCollection({});
const categories = defineCollection({});

export const collections = { articles, categories };
