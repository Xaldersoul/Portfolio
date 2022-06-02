import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import ContactCard from "./ContactCard";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_USER_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <ContactCard
            title="Email"
            subtitle="benjamin.g.guerra@hotmail.com"
            icon={<MdOutlineEmail className="contact__icon" />}
            href="mailto:benjamin.g.guerra@hotmail.com"
            hrefText="Send a message"
          />
          <ContactCard
            title="Linkedin"
            subtitle="Benjamin Guerra"
            icon={<BsLinkedin className="contact__icon" />}
            href="https://www.linkedin.com/in/benjamin-guerra-dev/"
            hrefText="Chat with me"
          />
          <ContactCard
            title="Discord"
            subtitle="Xalder#6861"
            icon={<FaDiscord className="contact__icon" />}
            href="https://discord.com/users/Xalder#6861"
            hrefText="Check my discord!"
          />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
