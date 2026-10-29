import { gsap, listen } from './gsap';

// Pointer-driven effects for the current page: magnetic buttons, card/poster
// tilt, the floating project preview and the hero parallax. Fine pointers only.
export function hoverEffects(root) {
  const q = (sel) => gsap.utils.toArray(sel, root);
  const offs = [];

  q('.mag').forEach((el) => {
    const mx = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1,0.5)' });
    const my = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1,0.5)' });
    offs.push(
      listen(el, 'mousemove', (e) => {
        const r = el.getBoundingClientRect();
        mx((e.clientX - (r.left + r.width / 2)) * 0.35);
        my((e.clientY - (r.top + r.height / 2)) * 0.35);
      }),
      listen(el, 'mouseleave', () => {
        mx(0);
        my(0);
      }),
    );
  });

  q('.tilt').forEach((el) => {
    const lift = parseFloat(el.dataset.lift) || 0; // cards also rise on hover
    offs.push(
      listen(el, 'mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(el, { rotationY: nx * 12, rotationX: -ny * 12, y: lift, transformPerspective: 900, duration: 0.5, ease: 'power3.out' });
      }),
      listen(el, 'mouseleave', () => gsap.to(el, { rotationX: 0, rotationY: 0, y: 0, duration: 0.9, ease: 'elastic.out(1,0.5)' })),
    );
  });

  const peek = root.querySelector('.peek');
  const rowsEl = root.querySelector('.rows');
  if (peek && rowsEl) {
    const items = q('.peek-i');
    gsap.set(peek, { xPercent: 0, yPercent: -50, x: 0, y: 0, scale: 0.7, rotation: -4, autoAlpha: 0 });
    const px = gsap.quickTo(peek, 'x', { duration: 0.7, ease: 'power3' });
    const py = gsap.quickTo(peek, 'y', { duration: 0.7, ease: 'power3' });
    offs.push(
      listen(rowsEl, 'mousemove', (e) => {
        px(e.clientX + 130);
        py(e.clientY);
      }),
      listen(rowsEl, 'mouseleave', () =>
        gsap.to(peek, { autoAlpha: 0, scale: 0.7, rotation: -4, duration: 0.35, ease: 'power3.in', overwrite: 'auto' }),
      ),
    );
    q('.row').forEach((row, i) => {
      offs.push(
        listen(row, 'mouseenter', () => {
          gsap.to(peek, { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
          items.forEach((it, j) => gsap.to(it, { autoAlpha: j === i ? 1 : 0, duration: 0.25, overwrite: 'auto' }));
        }),
      );
    });
  }

  const hero = root.querySelector('.intro');
  const disc = root.querySelector('.disc');
  const photo = root.querySelector('.photo');
  if (hero && disc && photo) {
    const dX = gsap.quickTo(disc, 'x', { duration: 1.2, ease: 'power3' });
    const dY = gsap.quickTo(disc, 'y', { duration: 1.2, ease: 'power3' });
    const pX = gsap.quickTo(photo, 'x', { duration: 1.2, ease: 'power3' });
    const pY = gsap.quickTo(photo, 'y', { duration: 1.2, ease: 'power3' });
    offs.push(
      listen(hero, 'mousemove', (e) => {
        const r = hero.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        dX(nx * 70);
        dY(ny * 50);
        pX(nx * -18);
        pY(ny * -12);
      }),
    );
  }

  return () => offs.forEach((off) => off());
}
