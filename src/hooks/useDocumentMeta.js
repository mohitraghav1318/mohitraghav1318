import { useEffect } from 'react';

const DEFAULT_TITLE = 'Mohit Raghav | Full Stack Developer & AI/ML Engineer';
let defaultDescription; // read once from index.html, before any page overrides it

// Sets the tab title and meta description for the current route. A page without its
// own description gets the site default back (not the previous page's).
export default function useDocumentMeta(title, description) {
  useEffect(() => {
    const tag = document.querySelector('meta[name="description"]');
    if (defaultDescription === undefined) defaultDescription = tag?.getAttribute('content') ?? '';
    document.title = title || DEFAULT_TITLE;
    tag?.setAttribute('content', description || defaultDescription);
  }, [title, description]);
}
