// Flat card colours, cycled by index: [background, text]. Never gradients.
export const tones = [
  ['var(--accent)', 'var(--paper-hi)'],
  ['var(--green)', 'var(--paper)'],
  ['var(--tan)', 'var(--ink)'],
  ['var(--sage)', 'var(--paper-hi)'],
];
export const tone = (i) => tones[i % tones.length];
