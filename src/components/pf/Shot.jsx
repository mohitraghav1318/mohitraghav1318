import shots from '../../data/shots.json';

// Project screenshot: WebP srcset and intrinsic size from the generated manifest
// (`npm run images`). Falls back to the plain file if the manifest has no entry.
export default function Shot({ src, alt, sizes, eager = false, className }) {
  const entry = shots[src];
  const loading = eager ? 'eager' : 'lazy';

  if (!entry) return <img className={className} src={src} alt={alt} loading={loading} decoding="async" />;

  const dir = '/images/optimized/projects';
  const largest = entry.sizes[entry.sizes.length - 1];
  return (
    <img
      className={className}
      src={`${dir}/${entry.name}-${largest}.webp`}
      srcSet={entry.sizes.map((w) => `${dir}/${entry.name}-${w}.webp ${w}w`).join(', ')}
      sizes={sizes}
      width={entry.width}
      height={entry.height}
      alt={alt}
      loading={loading}
      fetchpriority={eager ? 'high' : undefined}
      decoding="async"
    />
  );
}
