import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav, site, ui } from '../../data/site';
import { createMenuMotion } from '../../motion/menu';
import Line from './Line';

const DESKTOP = '(min-width: 900px)';

// Desktop: inline links. Below 900px: fixed pill bar + full-screen overlay menu.
// NavLink sets aria-current="page" on the active link.
export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false); // logical state (aria-expanded)
  const [shown, setShown] = useState(false); // overlay is in the layout (stays true while the close animation runs)
  const headerRef = useRef(null);
  const overlayRef = useRef(null);
  const buttonRef = useRef(null);
  const motionRef = useRef(null);
  const inertRef = useRef([]);
  const scrollRef = useRef(0);

  useLayoutEffect(() => {
    motionRef.current = createMenuMotion(overlayRef.current);
    return () => motionRef.current.kill();
  }, []);

  const lock = useCallback((on, { restore = true } = {}) => {
    const html = document.documentElement;
    const shell = headerRef.current?.parentElement;
    const root = headerRef.current?.closest('.pf');
    if (on) {
      scrollRef.current = window.scrollY;
      html.classList.add('menu-lock');
      // Everything behind the menu is inert (and hidden from assistive tech).
      inertRef.current = [...root.children].filter((el) => el !== shell && !el.hasAttribute('inert'));
      inertRef.current.forEach((el) => el.setAttribute('inert', ''));
    } else {
      html.classList.remove('menu-lock');
      inertRef.current.forEach((el) => el.removeAttribute('inert'));
      inertRef.current = [];
      if (restore) window.scrollTo({ top: scrollRef.current, behavior: 'instant' });
    }
  }, []);

  const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const openMenu = () => {
    setOpen(true);
    setShown(true);
    lock(true);
  };

  const closeMenu = useCallback(
    ({ animate = true, focusButton = true, restore = true } = {}) => {
      setOpen(false);
      const finish = () => {
        setShown(false);
        lock(false, { restore });
        if (focusButton) buttonRef.current?.focus();
      };
      if (animate && !reduced()) motionRef.current.close(finish);
      else {
        motionRef.current.kill();
        finish();
      }
    },
    [lock],
  );

  // Play the open animation once the overlay is in the layout; move focus inside.
  useLayoutEffect(() => {
    if (!shown || !open) return;
    if (!reduced()) motionRef.current.open();
    overlayRef.current.querySelector('a')?.focus();
  }, [shown, open]);

  // Esc closes, Tab stays inside the header (bar + overlay) while open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = [...headerRef.current.querySelectorAll('a[href], button')].filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, closeMenu]);

  // Close when the viewport grows to desktop width.
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP);
    const onChange = (e) => e.matches && open && closeMenu({ animate: false, focusButton: false });
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [open, closeMenu]);

  // Close on route change (the new page starts at the top, so do not restore the old scroll).
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (open) closeMenu({ animate: false, focusButton: false, restore: false });
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Never leave the page locked if the nav unmounts while open.
  useEffect(() => () => lock(false, { restore: false }), [lock]);

  return (
    <header className="topnav" ref={headerRef}>
      <div className="bar">
        <Link className="nav-i brand" to="/" data-cursor="">
          mohit<span>.</span>raghav
        </Link>

        <nav className="menu" aria-label={ui.navLabel}>
          {nav.map((item) =>
            item.pill ? (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-i pill mag ${isActive ? 'solid' : 'line'}`}>
                {item.label}
              </NavLink>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `nav-i nl${isActive ? ' on' : ''}`}>
                <span className="r">
                  <span>{item.label}</span>
                  <span aria-hidden="true">{item.label}</span>
                </span>
              </NavLink>
            ),
          )}
        </nav>

        <button
          type="button"
          ref={buttonRef}
          className="nav-i navbtn"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => (open ? closeMenu() : openMenu())}
        >
          <span className="nb-r">
            <span aria-hidden={open}>{ui.menu.open}</span>
            <span aria-hidden={!open}>{ui.menu.close}</span>
          </span>
          <span className="nb-i" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div id="site-menu" ref={overlayRef} className={`overlay${shown ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label={ui.menu.label}>
        <nav aria-label={ui.navLabel}>
          <ul className="ov-list">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className="ov-link">
                  <span className="ov-name">
                    <Line>{item.label}</Line>
                  </span>
                  <span className="ov-hint">{item.hint}</span>
                </NavLink>
                <span className="ov-rule" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </nav>
        <div className="ov-foot">
          <span className="ov-status">
            <i aria-hidden="true" />
            {ui.menu.status}
          </span>
          <a className="ov-mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>
    </header>
  );
}
