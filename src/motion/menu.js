import { gsap } from './gsap';

// Mobile menu overlay motion. Owned by the Nav component, which calls kill() on unmount.
// Open: clip-path reveal, link labels rise out of their masks, rules draw, footer fades up.
// Close: the same overlay wipes away, faster.
export function createMenuMotion(overlay) {
  const ctx = gsap.context(() => {}, overlay);
  const q = (sel) => gsap.utils.toArray(sel, overlay);
  let tl;

  return {
    open() {
      tl?.kill();
      ctx.add(() => {
        tl = gsap.timeline();
        tl.fromTo(overlay, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.7, ease: 'expo.inOut' })
          .fromTo(q('.ov-name .in'), { yPercent: 115 }, { yPercent: 0, duration: 0.8, ease: 'expo.out', stagger: 0.07 }, 0.3)
          .fromTo(q('.ov-hint'), { opacity: 0 }, { opacity: 1, duration: 0.5, stagger: 0.07 }, 0.5)
          .fromTo(q('.ov-rule'), { scaleX: 0 }, { scaleX: 1, transformOrigin: '0 50%', duration: 0.8, ease: 'expo.out', stagger: 0.07 }, 0.35)
          .fromTo(q('.ov-foot > *'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.08 }, '>-0.25');
      });
    },
    close(onDone) {
      tl?.kill();
      ctx.add(() => {
        tl = gsap.to(overlay, { clipPath: 'inset(0 0 100% 0)', duration: 0.45, ease: 'expo.inOut', onComplete: onDone });
      });
    },
    kill() {
      tl?.kill();
      ctx.revert();
    },
  };
}
