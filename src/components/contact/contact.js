import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { SiZalo } from "react-icons/si";

import emailjs from "emailjs-com";
import { ButtonToolbar } from "react-bootstrap";

const Contact = () => {
  const form = useRef();
  const btn = document.getElementById('button');
  const sendEmail = (e) => {
    e.preventDefault();
    btn.value='Sending...';
    
    emailjs
      .sendForm(
        "service_ciq4let",
        "template_v9y4ank",
        form.current,
        "NWYgZdgNm8mndNowi"
      )
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });

    e.target.reset();
  };
  

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tiengtrungace@gmail.com</h5>
            <a href="mailto:tiengtrungace@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Tiếng Trung Phồn Thể ACE</h5>
            <a href="https://m.me/tiengtrungphontheace" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <SiZalo className="contact__option-icon" />
            <h5>0764808967</h5>
            <a
              href="https://zalo.me/0764808967"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} >
          <input
            type="text"
            name="from_name"
            placeholder="Your Full Name"
            id= "from_name"
            required
          />
          <input type="email" id="email_id" name="email_id" placeholder="Your Email"  required />
          <textarea
            type="text"
            id="message"
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" id="button" className="btn btn-primary">
            Send Message
          </button>
        </form>
        <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

        <script type="text/javascript">
            emailjs.init('NWYgZdgNm8mndNowi')
        </script>
      </div>
    </section>
  );
};

export default Contact;
