import ContactForm from '../../components/contact/ContactForm';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import './Contact.scss';

function Contact() {
  return (
    <div className="contact-page">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let&apos;s create something premium"
          subtitle="Share your project goals, timeline, and constraints. I&apos;ll reply with a clear execution path."
        />

        <div className="contact-page__layout">
          <article className="contact-page__card">
            <h3 className="contact-page__card-title">Project Scope</h3>
            <p className="contact-page__card-text">
              Product design, frontend engineering, backend APIs, and deployment workflows.
            </p>
          </article>

          <article className="contact-page__card">
            <h3 className="contact-page__card-title">Response Window</h3>
            <p className="contact-page__card-text">
              Typically within 24 hours for collaboration inquiries and technical consultations.
            </p>
          </article>

          <article className="contact-page__card">
            <h3 className="contact-page__card-title">Primary Email</h3>
            <a className="contact-page__card-link" href="mailto:mohitraghav1318@gmail.com">
              mohitraghav1318@gmail.com
            </a>
          </article>
        </div>

        <div className="contact-page__form-wrap">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}

export default Contact;
