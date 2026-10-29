// Responsive photo: WebP srcset from public/images/optimized (see `npm run images`),
// explicit width/height so nothing shifts, and the focal point from site.js.
export default function Photo({ image, sizes, eager = false, className }) {
  const dir = '/images/optimized';
  const largest = image.widths[image.widths.length - 1];
  const srcSet = image.widths.map((w) => `${dir}/${image.name}-${w}.webp ${w}w`).join(', ');

  return (
    <img
      className={className}
      src={`${dir}/${image.name}-${largest}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchpriority={eager ? 'high' : undefined}
      decoding="async"
      style={{ objectPosition: image.position }}
    />
  );
}
