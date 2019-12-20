import React from "react"

import "./Menu.scss"

const Menu = () => (
  <div className="menu-component menu">
    <div className="link-section">Start</div>
    <div className="link-section">Announcing</div>
    <div className="link-section">Speakers</div>
    <div className="link-section" href="#venue">
      Venue
    </div>
    <div className="link-section" href="#about">
      About
    </div>
    <div className="link-section" href="#team">
      Team
    </div>
    <div className="link-section" href="#contactUS">
      Stay tuned
    </div>
  </div>
)

export default Menu
