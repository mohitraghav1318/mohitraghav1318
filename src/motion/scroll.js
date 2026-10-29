import { gsap, ScrollTrigger as ST } from './gsap';

// Scroll-driven behaviour. Hidden start states (.rv, .w, mask lines) are set from
// JS only, so content is never stuck hidden if scripts fail.
export function scrollEffects(root) {
  const q = (sel) => gsap.utils.toArray(sel, root);
  const has = (sel) => !!root.querySelector(sel);
  let ticker;

  gsap.to('.prog', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });

  if (has('.intro-h')) {
    gsap.to('.intro-h', {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: { trigger: root.querySelector('.intro, .phead'), start: 'top top', end: 'bottom top', scrub: true },
    });
  }

  q('[data-par]').forEach((el) => {
    const amount = parseFloat(el.getAttribute('data-par')) || 6;
    gsap.fromTo(
      el,
      { yPercent: -amount },
      { yPercent: amount, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } },
    );
  });

  q('.frame[data-reveal]').forEach((el) => {
    gsap.from(el, {
      clipPath: 'inset(100% 0% 0% 0%)',
      duration: 1.4,
      ease: 'expo.inOut',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  q('.hd').forEach((h) => {
    gsap.from(h.querySelectorAll('.in'), {
      yPercent: 118,
      duration: 1.2,
      ease: 'expo.out',
      stagger: 0.1,
      scrollTrigger: { trigger: h, start: 'top 88%', once: true },
    });
  });

  if (has('.w')) {
    gsap.fromTo(
      q('.w'),
      { opacity: 0.16 },
      { opacity: 1, ease: 'none', stagger: 0.12, scrollTrigger: { trigger: root.querySelector('.about-p, .strong-p'), start: 'top 82%', end: 'bottom 52%', scrub: 0.6 } },
    );
  }

  if (has('.rv')) {
    const items = q('.rv');
    gsap.set(items, { opacity: 0, y: 46 });
    ST.batch(items, {
      start: 'top 92%',
      once: true,
      onEnter: (els) => gsap.to(els, { y: 0, opacity: 1, duration: 0.95, ease: 'power3.out', stagger: 0.09, overwrite: true }),
    });
  }

  if (has('.mq-track')) {
    const mq = gsap.to(q('.mq-track'), { xPercent: -50, duration: 34, ease: 'none', repeat: -1 });
    let timeScale = 1;
    // The marquee speeds up with scroll velocity, then eases back.
    ST.create({ start: 0, end: 'max', onUpdate: (self) => (timeScale = Math.min(1 + Math.abs(self.getVelocity()) / 250, 7)) });
    ticker = () => {
      timeScale += (1 - timeScale) * 0.06;
      mq.timeScale(timeScale);
    };
    gsap.ticker.add(ticker);
  }

  if (has('.c-btn')) {
    gsap.from('.c-btn', {
      scale: 0.4,
      opacity: 0,
      duration: 1.2,
      ease: 'elastic.out(1,0.6)',
      scrollTrigger: { trigger: '.c-row', start: 'top 85%', once: true },
    });
  }

  return () => ticker && gsap.ticker.remove(ticker);
}
