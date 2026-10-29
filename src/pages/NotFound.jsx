import { Link } from 'react-router-dom';
import PageHead from '../components/pf/PageHead';
import FooterCta from '../components/pf/FooterCta';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { home, notFound as page } from '../data/site';

export default function NotFound() {
  useDocumentMeta('Not found | Mohit Raghav');

  return (
    <>
      <main id="main" tabIndex={-1}>
        <PageHead kicker={page.kicker} title={page.title} lede={page.lede}>
          <Link className="pill solid mag" to="/" data-cursor="">
            {page.button}
          </Link>
        </PageHead>
      </main>
      <FooterCta cta={home.cta} />
    </>
  );
}
