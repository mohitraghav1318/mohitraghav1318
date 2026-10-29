import PageHead from '../components/pf/PageHead';
import ProjectCard from '../components/pf/ProjectCard';
import FooterCta from '../components/pf/FooterCta';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { projects, projectsPage } from '../data/site';
import { projectSlug } from '../data/projects';

export default function Projects() {
  useDocumentMeta('Projects | Mohit Raghav', 'Full-stack products, tooling and client sites by Mohit Raghav.');

  return (
    <>
      <main id="main" tabIndex={-1}>
        <PageHead kicker={projectsPage.kicker} title={projectsPage.title} lede={projectsPage.lede} />
        <section className="sec tight" aria-label={projectsPage.title}>
          <div className="shell">
            <div className="pgrid">
              {projects.map((p, i) => (
                <ProjectCard key={projectSlug(p)} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterCta cta={projectsPage.footer} />
    </>
  );
}
