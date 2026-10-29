import { gsap, listen } from './gsap';

// Custom cursor: a dot that grows into a labelled circle over [data-cursor].
// Persistent (mounted once with the layout). Fine pointers only; the native
// cursor is hidden after the first mousemove, so touch/keyboard users never lose it.
export function mountCursor(root) {
  const mm = gsap.matchMedia();

  mm.add('(hover: hover) and (pointer: fine)', () => {
    const cur = root.querySelector('.cursor');
    const label = root.querySelector('.cursor-label');
    if (!cur || !label) return undefined;

    gsap.set(cur, { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    const cx = gsap.quickTo(cur, 'x', { duration: 0.3, ease: 'power3' });
    const cy = gsap.quickTo(cur, 'y', { duration: 0.3, ease: 'power3' });
    const html = document.documentElement;
    let seen = false;

    const grow = (size, text) => {
      label.textContent = text || '';
      gsap.to(cur, { width: size, height: size, duration: 0.45, ease: 'power3.out', overwrite: 'auto' });
      gsap.to(label, { opacity: text ? 1 : 0, duration: 0.25 });
    };

    const offs = [
      listen(window, 'mousemove', (e) => {
        if (!seen) {
          seen = true;
          html.classList.add('has-cursor');
          gsap.to(cur, { opacity: 1, duration: 0.3 });
        }
        cx(e.clientX);
        cy(e.clientY);
      }),
      listen(root, 'mouseover', (e) => {
        const withLabel = e.target.closest?.('[data-cursor]');
        const interactive = e.target.closest?.('a,button');
        if (withLabel?.getAttribute('data-cursor')) grow(96, withLabel.getAttribute('data-cursor'));
        else if (interactive) grow(44, '');
        else grow(14, '');
      }),
      listen(html, 'mouseleave', () => gsap.to(cur, { opacity: 0, duration: 0.2 })),
      listen(html, 'mouseenter', () => seen && gsap.to(cur, { opacity: 1, duration: 0.2 })),
    ];

    return () => {
      offs.forEach((off) => off());
      html.classList.remove('has-cursor');
    };
  });

  return () => mm.revert();
}
