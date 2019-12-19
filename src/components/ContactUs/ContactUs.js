import React from "react"

import "./ContactUs.scss"

const ContactUs = () => (
  <div className="contact-us-component contact-us">
    <div className="description"></div>
    <div className="stay-tuned">
      <div className="title">stay tuned</div>
      <div className="email">
        <input placeholder="Email address"></input>
        <button>Sign up</button>
      </div>
      <div className="social">
        <div className="icons">
          <div className="social-icon icon-twitter"></div>
          <div className="social-icon icon-instagram"></div>
          <div className="social-icon icon-facebook"></div>
        </div>
        <div className="text">
          <div className="contact-us">
            CONTACT US
          </div>
          <div className="nodeconf-email">
            hola@nodeconf.co
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ContactUs
