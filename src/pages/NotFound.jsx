import { Link } from 'react-router-dom';
import Page from '../components/Page';
import { notFound } from '../data/site';

export default function NotFound() {
  return (
    <Page title="Not found | Mohit Raghav" glow="br">
      <section className="wrap page-head">
        <p className="mono">{notFound.label}</p>
        <h1 className="page-h1">
          {notFound.titleLead} <span className="grad">{notFound.titleGrad}</span>
        </h1>
        <p style={{ marginTop: 40 }}>
          <Link className="btn primary" to="/">
            {notFound.button}
          </Link>
        </p>
      </section>
    </Page>
  );
}
