import React from 'react';
import './Contact.scss';

export const Contact: React.FC = () => {
  return (
    <section className="contact">
      <h2>NEED NEW CARBINETS? <span>LET'S CHAT.</span></h2>
      <p>
        Contact us today to find out more about what we can do for you.
        We'll be more than happy to answer any of your questions.
      </p>
      <button>GET IN TOUCH</button>
    </section>
  );
}