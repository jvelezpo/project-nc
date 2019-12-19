import PropTypes from "prop-types"
import React from "react"

import Logo from '../images/logo'

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="header-component header">
    <div className="oelo2">
      <div className="logo">
        <Logo />
        <div className="colombia">COLOMBIA</div>
        <div className="conf">NodeConfCo 2020</div>
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
