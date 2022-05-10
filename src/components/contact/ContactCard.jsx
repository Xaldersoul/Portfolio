import React from "react";

const ContactCard = ({ icon, title, subtitle, href, hrefText }) => {
  return (
    <article className="contact__option">
      {icon}
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <a href={href} target="_blank" rel="noreferrer">
        {hrefText}
      </a>
    </article>
  );
};

export default ContactCard;
