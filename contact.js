import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
