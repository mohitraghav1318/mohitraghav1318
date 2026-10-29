import { gsap } from './gsap';

let navIntroPlayed = false; // the nav lives in the layout: animate it on first load only

// Page-load reveal: nav, kicker, masked heading lines, copy, buttons, hero art.
export function intro(root) {
  const has = (sel) => !!root.querySelector(sel);
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

  if (!navIntroPlayed && has('.nav-i')) {
    navIntroPlayed = true;
    tl.from(gsap.utils.toArray('.nav-i', root), { y: -30, opacity: 0, duration: 0.9, stagger: 0.07 });
  }
  if (has('.intro-k')) tl.from('.intro-k', { y: 20, opacity: 0, duration: 0.8 }, 0.2);
  if (has('.intro-h .in')) tl.from('.intro-h .in', { yPercent: 118, duration: 1.3, stagger: 0.12 }, 0.25);
  if (has('.lede')) tl.from('.lede', { y: 30, opacity: 0, duration: 1 }, 0.7);
  if (has('.intro-cta > *')) tl.from('.intro-cta > *', { y: 24, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.85);
  if (has('.intro .photo')) tl.from('.intro .photo', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.5, ease: 'expo.inOut' }, 0.2);
  if (has('.disc')) tl.from('.disc', { scale: 0, duration: 1.6, ease: 'elastic.out(1,0.65)' }, 0.55);
  if (has('.badge')) {
    tl.from('.badge', { scale: 0, rotation: -120, duration: 1.1, ease: 'back.out(1.6)' }, 1.1);
    gsap.to('.badge svg', { rotation: 360, duration: 16, repeat: -1, ease: 'none' });
  }
}
