import React, { Component } from "react"
import "./Footer.scss"

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-component">
        NodeConf Colombia is an event by Mantid LLC -{" "}
        <a
          href="http://jsconf.com/codeofconduct.html"
          target="__blank"
          rel="noopener noreferrer"
        >
          Code of conduct
        </a>
      </div>
    )
  }
}
