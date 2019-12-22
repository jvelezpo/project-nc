import React, { useState } from "react"

import "./Menu.scss"

const Menu = () => {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false)

  const menuMobile = () => {
    setMenuMobileOpen(!menuMobileOpen)
  }

  const closeMobileMenu = () => {
    setMenuMobileOpen(false)
  }

  const menuItems = () => {
    return (
      <React.Fragment>
        <a className="link-section" href="#home" onClick={() => closeMobileMenu()}>
          Start
        </a>
        <a
          className="link-section"
          href="#cfp"
          onClick={() => closeMobileMenu()}
        >
          Announcing
        </a>
        <a
          className="link-section"
          href="#speakers"
          onClick={() => closeMobileMenu()}
        >
          Speakers
        </a>
        <a
          className="link-section"
          href="#venue"
          onClick={() => closeMobileMenu()}
        >
          Venue
        </a>
        <a
          className="link-section"
          href="#about"
          onClick={() => closeMobileMenu()}
        >
          About
        </a>
        <a
          className="link-section"
          href="#team"
          onClick={() => closeMobileMenu()}
        >
          Team
        </a>
        <a
          className="link-section"
          href="#contactUS"
          onClick={() => closeMobileMenu()}
        >
          Stay tuned
        </a>
      </React.Fragment>
    )
  }

  return (
    <div className="menu-component" id="home">
      <div className="menu">{menuItems()}</div>
      <div className="menu-mobile">
        <div id="myLinks" className={menuMobileOpen ? "open" : "close"}>
          {menuItems()}
        </div>
        <button className={menuMobileOpen ? "icon focused" : "icon"} onClick={menuMobile}>
          <i className="icon-three-bars"></i>
        </button>
      </div>
    </div>
  )
}

export default Menu
