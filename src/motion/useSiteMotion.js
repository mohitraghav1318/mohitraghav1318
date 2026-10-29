import { useLayoutEffect } from 'react';
import { gsap, ScrollTrigger } from './gsap';
import { mountCursor } from './cursor';
import { hoverEffects } from './hover';
import { intro } from './intro';
import { scrollEffects } from './scroll';

// Wires all motion to the layout root.
//  - cursor: mounted once for the layout's lifetime
//  - everything else: rebuilt on every route change (the page DOM is new), after
//    killing the previous page's tweens and ScrollTriggers via matchMedia.revert()
// Layout effects run after children commit, so the new page's DOM already exists,
// and hidden start states are applied before first paint (no flash).
export default function useSiteMotion(rootRef, pathname) {
  useLayoutEffect(() => mountCursor(rootRef.current), [rootRef]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const mm = gsap.matchMedia(root);

    mm.add(
      { fine: '(hover: hover) and (pointer: fine)', motion: '(prefers-reduced-motion: no-preference)' },
      (ctx) => {
        const { fine, motion } = ctx.conditions;
        const cleanups = [];
        if (fine) cleanups.push(hoverEffects(root));
        if (motion) {
          intro(root);
          cleanups.push(scrollEffects(root));
        }
        return () => cleanups.forEach((fn) => fn && fn());
      },
    );

    // Layout shifts after fonts load would leave triggers misplaced.
    let cancelled = false;
    document.fonts?.ready.then(() => !cancelled && ScrollTrigger.refresh());
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      mm.revert();
    };
  }, [rootRef, pathname]);
}
