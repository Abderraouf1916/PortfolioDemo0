import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      {submitted ? (
        <div className="contact-thanks">
          <p>Thank you for reaching out! I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required rows={4}></textarea>
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
