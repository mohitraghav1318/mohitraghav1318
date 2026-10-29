import { projects } from './site.js';

// Slugs come from the project name, so adding a project to site.js is enough.
export const slugify = (text) =>
  text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');

export const projectSlug = (p) => slugify(p.title);
export const projectPath = (p) => `/projects/${projectSlug(p)}`;
export const findProject = (slug) => projects.find((p) => projectSlug(p) === slug);
export const kindOf = (p) => p.tag.split(' · ')[0];

// Next project in site.js order, wrapping around at the end.
export const nextProject = (p) => projects[(projects.indexOf(p) + 1) % projects.length];

// Screenshots for a project: explicit list, else the single cover image, else none.
export const projectShots = (p) => (p.screenshots?.length ? p.screenshots : p.img ? [{ src: p.img }] : []);
