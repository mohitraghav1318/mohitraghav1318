import { Link, NavLink } from 'react-router-dom';
import { nav, ui } from '../../data/site';

// NavLink sets aria-current="page" on the active link; `on` styles it.
export default function Nav() {
  return (
    <header className="topnav">
      <Link className="nav-i brand" to="/" data-cursor="">
        mohit<span>.</span>raghav
      </Link>
      <nav className="menu" aria-label={ui.navLabel}>
        {nav.map((item) =>
          item.pill ? (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-i pill mag ${isActive ? 'solid' : 'line'}`}
            >
              {item.label}
            </NavLink>
          ) : (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `nav-i nl${isActive ? ' on' : ''}`}>
              <span className="r">
                <span>{item.label}</span>
                <span aria-hidden="true">{item.label}</span>
              </span>
            </NavLink>
          ),
        )}
      </nav>
    </header>
  );
}
