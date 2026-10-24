import { useId } from 'react';

const RAY_X = [20, 80, 140, 200, 260, 320, 380];
const WAVE_H = [60, 100, 150, 80, 190, 120, 210, 130, 70, 170, 100, 50, 110, 30];
const BLADES = [
  [200, 25, 200, 93],
  [286, 75, 228, 109],
  [286, 175, 228, 141],
  [200, 225, 200, 157],
  [114, 175, 172, 141],
  [114, 75, 172, 109],
];

// Generated cover art. Each instance gets its own gradient id.
export default function ProjectArt({ art }) {
  const id = useId().replace(/:/g, '');
  const g = `grad-${id}`;
  const vertical = art === 'wave';

  return (
    <svg viewBox="0 0 400 250" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2={vertical ? 0 : 1} y2="1">
          <stop offset="0" stopColor="#00c9ff" />
          <stop offset="1" stopColor="#7a5cff" />
        </linearGradient>
      </defs>

      {art === 'rays' && (
        <>
          <circle cx="330" cy="-10" r="70" fill={`url(#${g})`} opacity=".55" />
          <g stroke={`url(#${g})`} strokeWidth="1.6" opacity=".8">
            {RAY_X.map((x) => (
              <line key={x} x1="330" y1="-10" x2={x} y2="260" />
            ))}
          </g>
        </>
      )}

      {art === 'wave' && (
        <g fill={`url(#${g})`}>
          {WAVE_H.map((h, i) => (
            <rect key={i} x={30 + 25 * i} y={125 - h / 2} width="12" height={h} rx="6" />
          ))}
        </g>
      )}

      {art === 'receipt' && (
        <>
          <rect x="130" y="25" width="140" height="205" rx="12" fill="#0e1013" stroke="#2a2e36" />
          <g stroke="#3a3f48" strokeWidth="3" strokeLinecap="round">
            {[
              [60, 248],
              [82, 226],
              [104, 240],
              [126, 218],
            ].map(([y, x2]) => (
              <line key={y} x1="152" y1={y} x2={x2} y2={y} />
            ))}
          </g>
          <rect x="152" y="160" width="96" height="40" rx="8" fill={`url(#${g})`} />
        </>
      )}

      {art === 'aperture' && (
        <g fill="none" stroke={`url(#${g})`} strokeWidth="2">
          {[100, 66, 32].map((r) => (
            <circle key={r} cx="200" cy="125" r={r} />
          ))}
          {BLADES.map(([x1, y1, x2, y2]) => (
            <line key={`${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
        </g>
      )}
    </svg>
  );
}
