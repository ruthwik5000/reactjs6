import React from "react";

function Contact() {
  return (
    <section id="contact" className="full-screen">
      <h2>Contact Me</h2>
      <p>
        Connect with me on
        <a
          href="https://github.com/ruthwik5000"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          GitHub{" "}
        </a>
        or send me an
        <a
          href="mailto:your.ruthwikpurimetla1236@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          email
        </a>
        .
      </p>
    </section>
  );
}

export default Contact;
