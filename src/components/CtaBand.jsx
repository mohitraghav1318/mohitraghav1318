import { Link } from 'react-router-dom';

export default function CtaBand({ title, label, to = '/contact' }) {
  return (
    <section className="wrap section">
      <div className="cta">
        <h2>{title}</h2>
        <Link className="btn primary" to={to}>
          {label}
        </Link>
      </div>
    </section>
  );
}
