import React, { useState } from "react"

import "./ContactUs.scss"

const ContactUs = () => {
  const [email, setEmail] = useState("")

  return (
    <div className="contact-us-component contact-us" id="contactUS">
      <div className="description"></div>
      <div className="stay-tuned">
        <div className="title">stay tuned</div>
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
              placeholder="Email address"
            ></input>
            <button type="submit">Sign up</button>
          </form>
        </div>
        <div className="social">
          <div className="icons">
            <a href="https://twitter.com/NodeConfCo" target="__blank">
              <i className="social-icon icon-twitter"></i>
            </a>
            <a href="https://www.instagram.com/nodeconf_co" target="__blank">
              <i className="social-icon icon-instagram"></i>
            </a>
            <a href="https://www.facebook.com/nodeconfco" target="__blank">
              <i className="social-icon icon-facebook"></i>
            </a>
          </div>
          <div className="text">
            <div className="contact-us">CONTACT US</div>
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
    </div>
  )
}

export default ContactUs
