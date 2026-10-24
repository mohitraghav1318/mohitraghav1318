import { useEffect } from 'react';

const DEFAULT_TITLE = 'Mohit Raghav | Full Stack Developer & AI/ML Engineer';

// Sets the tab title (and optionally the description) for the current route.
export default function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title || DEFAULT_TITLE;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }
  }, [title, description]);
}
