import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import useDocumentMeta from '../hooks/useDocumentMeta';

// Shared page shell: ambient glow, nav, <main>, footer, per-route title.
export default function Page({ title, description, glow = 'tr', nav = true, footer = 'social', children }) {
  const { pathname } = useLocation();
  useDocumentMeta(title, description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="pg">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className={`glow ${glow}`} aria-hidden="true" />
      {nav && <Navbar />}
      <main id="main">{children}</main>
      <Footer variant={footer} />
    </div>
  );
}
