import PropTypes from "prop-types"
import React from "react"

import Logo from '../images/logo'
import Medellin from '../images/medellin'

import "./header.scss"

const Header = ({ siteTitle }) => (


  <header className="header-component header">
    <Medellin className="medellin" />
    <div className="over" />
    <div className="conference">
      <div className="logo">
        <Logo />
        <h1 className="title">COLOMBIA</h1>
        <div className="subtitle">NodeConfCo 2020</div>
      </div>
    </div>
  </header>



)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
