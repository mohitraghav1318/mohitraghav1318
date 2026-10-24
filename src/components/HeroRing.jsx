import { useId } from 'react';
import { home } from '../data/site';

export default function HeroRing() {
  const id = useId().replace(/:/g, '');
  const rg = `rg-${id}`;
  const gl = `gl-${id}`;

  return (
    <div className="ring">
      <svg viewBox="0 0 600 600" width="100%" height="100%" aria-hidden="true">
        <defs>
          <linearGradient id={rg} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00c9ff" />
            <stop offset="1" stopColor="#7a5cff" />
          </linearGradient>
          <filter id={gl} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
        </defs>
        <circle cx="300" cy="300" r="190" fill="none" stroke={`url(#${rg})`} strokeWidth="46" opacity=".55" filter={`url(#${gl})`} />
        <circle cx="300" cy="300" r="190" fill="none" stroke={`url(#${rg})`} strokeWidth="40" />
        <circle cx="300" cy="300" r="148" fill="#07080a" />
        <circle cx="300" cy="300" r="250" fill="none" stroke="#fff" strokeOpacity=".10" />
        <circle cx="300" cy="300" r="290" fill="none" stroke="#fff" strokeOpacity=".06" />
        <g className="orb1">
          <circle cx="300" cy="50" r="7" fill="#00c9ff" />
          <circle cx="550" cy="300" r="4" fill="#fff" opacity=".6" />
        </g>
        <g className="orb2">
          <circle cx="300" cy="10" r="5" fill="#7a5cff" />
          <circle cx="10" cy="300" r="4" fill="#fff" opacity=".5" />
        </g>
        <text x="300" y="338" textAnchor="middle" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800" fontSize="120" fill="#f3f3ef" letterSpacing="-4">
          &lt;/&gt;
        </text>
      </svg>

      <div className="code-card float" aria-hidden="true">
        <div className="dots"><span /><span /><span /></div>
        <div><span className="kw">const</span> mohit = {'{'}</div>
        <div className="ind">role: <span className="str">&quot;{home.card.role}&quot;</span>,</div>
        <div className="ind">stack: <span className="str">&quot;{home.card.stack}&quot;</span>,</div>
        <div className="ind">focus: <span className="str">&quot;{home.card.focus}&quot;</span>,</div>
        <div>{'}'}</div>
      </div>
    </div>
  );
}
