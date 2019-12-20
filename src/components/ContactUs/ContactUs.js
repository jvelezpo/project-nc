import React, { useState } from "react"

import "./ContactUs.scss"


const ContactUs = () => {
  
  const [email, setEmail] = useState('')
  
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
            <button
              onClick={() => window.open('https://twitter.com/NodeConfCo', '_blank')}
              className="social-icon icon-twitter"
              />
            <button
              onClick={() => window.open('https://www.instagram.com/nodeconf_co/', '_blank')}
              className="social-icon icon-instagram"
            />
            <button
              onClick={() => window.open('https://www.facebook.com/nodeconfco', '_blank')}
              className="social-icon icon-facebook"
            />

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
