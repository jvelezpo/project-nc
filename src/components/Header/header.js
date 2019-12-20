import PropTypes from "prop-types"
import React from "react"

import Logo from '../images/logo'
import Medellin from '../images/medellin'

import "./header.scss"

const Header = () => (
  <header className="header l-container--full  banner">
    <Medellin className="medellin" />
    <div className="over" />
    <div className="header-container  l-container">
      <aside className="header-left  aside-data">
        <h2 className="header-left__title  aside-data__title">0.1</h2>
        <p className="header-left__subtitle aside-data__subtitle">Lorem ipsum dolor sit amet</p>
        <p className="header-left__description aside-data__description">
          consectetur adipiscing elit. Vivamus lacinia quis arcu non elementum. Phasellus vestibulum rutrum tincidunt. Maecenas vitae ex turpis.
        </p>
      </aside>
      <div className="header-center  header-description">
        <a href="/" className="logo--main">
          <Logo />
        </a>

        <h1 className="title  header-title">colombia</h1>
        <p className="subtitle  header-subtitle">NodeConfCo 2020</p>

        <button className="btn-cta">
          Saber más
        </button>
      </div>

      <div className="header-right  calendar">
        <div className="calendar__content">
          <h3 className="calendar__month">june</h3>
          <p className="calendar__data ">
            <span className="calendar__info">day</span>
            <span className="calendar__info">th</span>
          </p>
          <p className="calendar__day">26</p>
        </div>
        <div className="calendar__content">
          <h3 className="calendar__month">june</h3>
          <p className="calendar__data ">
            <span className="calendar__info">day</span>
            <span className="calendar__info">th</span>
          </p>
          <p className="calendar__day">27</p>
        </div>
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
