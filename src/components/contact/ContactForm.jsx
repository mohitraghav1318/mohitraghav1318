import { useState } from 'react';
import Button from '../common/Button';

const initialState = {
  name: '',
  email: '',
  message: '',
};

function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('sent');
    setFormData(initialState);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="name">
          Name
        </label>
        <input
          className="contact-form__input"
          id="name"
          name="name"
          onChange={handleChange}
          placeholder="Your name"
          required
          type="text"
          value={formData.name}
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="email">
          Email
        </label>
        <input
          className="contact-form__input"
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="you@example.com"
          required
          type="email"
          value={formData.email}
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="message">
          Message
        </label>
        <textarea
          className="contact-form__input contact-form__input--textarea"
          id="message"
          name="message"
          onChange={handleChange}
          placeholder="Tell me about your idea"
          required
          rows="6"
          value={formData.message}
        />
      </div>

      <Button type="submit" variant="primary">
        Send Message
      </Button>

      {status === 'sent' ? (
        <p className="contact-form__status" role="status">
          Thanks, I&apos;ll get back to you soon.
        </p>
      ) : null}
    </form>
  );
}

export default ContactForm;
