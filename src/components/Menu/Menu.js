import React, { useState } from "react"

import { Link } from "gatsby"

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
        <Link className="link-section" to="#home" onClick={() => closeMobileMenu()}>
          Start
        </Link>
        <Link
          className="link-section"
          to="#cfp"
          onClick={() => closeMobileMenu()}
        >
          Announcing
        </Link>
        <Link
          className="link-section"
          to="#speakers"
          onClick={() => closeMobileMenu()}
        >
          Speakers
        </Link>
        <Link
          className="link-section"
          to="#venue"
          onClick={() => closeMobileMenu()}
        >
          Venue
        </Link>
        <Link
          className="link-section"
          to="#about"
          onClick={() => closeMobileMenu()}
        >
          About
        </Link>
        <Link
          className="link-section"
          to="#team"
          onClick={() => closeMobileMenu()}
        >
          Team
        </Link>
        <Link
          className="link-section"
          to="#contactUS"
          onClick={() => closeMobileMenu()}
        >
          Stay tuned
        </Link>
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
        <button class="icon" onClick={menuMobile}>
          <i class="icon-three-bars"></i>
        </button>
      </div>
    </div>
  )
}

export default Menu
