import React, { useState } from "react"

import "./ContactUs.scss"

const ContactUs = () => {
  const [email, setEmail] = useState("")

  return (
    <section className="contact-us-component contact-us  l-container" id="contactUS">
      <div className="stay-tuned  l-inner-p">
        <h2 className="title  section__title">stay tuned</h2>
        <div className="email">
          <form
            action="https://nodeconf.us18.list-manage.com/subscribe/post?u=33c93ca7e73c6c27cd0325b9f&amp;id=e71faec96c"
            method="post"
            target="__blank"
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              aria-required="true"
              aria-label="Email address"
              placeholder="Email address"
            ></input>
            <button type="submit">Sign up</button>
          </form>
        </div>
        <div className="social">
          <div className="icons">
            <a href="https://twitter.com/NodeConfCo" target="__blank" aria-label="icon-twitter">
              <i className="social-icon icon-twitter"></i>
            </a>
            <a href="https://www.instagram.com/nodeconf_co" target="__blank" aria-label="icon-instagram">
              <i className="social-icon icon-instagram"></i>
            </a>
            <a href="https://www.facebook.com/nodeconfco" target="__blank" aria-label="icon-facebook">
              <i className="social-icon icon-facebook"></i>
            </a>
          </div>
          <div className="text">
            <h3 className="contact-us">CONTACT US</h3>
            <a
              className="nodeconf-email"
              href="mailto:hola@nodeconf.co"
              rel="noopener noreferrer"
            >
              hola@nodeconf.co
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
