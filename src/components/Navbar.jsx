import { Link, NavLink } from 'react-router-dom';
import { nav } from '../data/site';

export default function Navbar() {
  return (
    <header className="nav wrap">
      <Link className="logo" to="/">
        mohit<span className="grad">.</span>raghav
      </Link>
      <nav className="nav-links" aria-label="Main">
        {nav.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Link className="btn sm" to="/contact">
        Let&apos;s talk ↗
      </Link>
    </header>
  );
}
