import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import useSiteMotion from '../../motion/useSiteMotion';
import { ui } from '../../data/site';
import '@fontsource-variable/bricolage-grotesque/wght.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource/dm-mono/400.css';
import '@fontsource/dm-mono/500.css';
import '../../styles/pf/index.scss';

// Shared shell: skip link, cursor, scroll progress bar and nav. Pages render a
// <main> and their own FooterCta through the outlet.
export default function Layout() {
  const rootRef = useRef(null);
  const { pathname, hash } = useLocation();

  useSiteMotion(rootRef, pathname);

  // Scope the paper background / smooth scroll to this design only.
  useEffect(() => {
    document.documentElement.classList.add('pf-on');
    return () => document.documentElement.classList.remove('pf-on');
  }, []);

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  // After a route change, move focus to the new page's <main> so keyboard and
  // screen-reader users start at the top of the content (not on the first load).
  const lastPath = useRef(pathname);
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <div className="pf" id="top" ref={rootRef}>
      <a className="skipl" href="#main">
        {ui.skip}
      </a>
      <div className="prog" aria-hidden="true" />
      <div className="cursor" aria-hidden="true">
        <span className="cursor-label" />
      </div>
      <div className="shell">
        <Nav />
      </div>
      <Outlet />
    </div>
  );
}
