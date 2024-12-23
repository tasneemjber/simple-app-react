import React from 'react';
import './conactMe.css'
function Contact() {
  return (
    <div id="contact-form">
      <h1>CONTACT ME</h1>
      <div className="divider">
        <span className="star">★</span>
      </div>

      <form>
        <label htmlFor="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname" required />

        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;