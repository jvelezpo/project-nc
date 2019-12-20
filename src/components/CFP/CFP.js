import React from "react"

import "./CFP.scss"

const CFP = () => (

  <section className="announcing-container  l-container  l-inner-p">

    <aside className="announcing-left  aside-data">
      <h2 className="announcing-left__title  aside-data__title">0.2</h2>
      <p className="announcing-left__subtitle aside-data__subtitle">Lorem ipsum dolor sit amet</p>
      <p className="announcing-left__description aside-data__description">consectetur adipiscing elit. Vivamus lacinia quis arcu non elementum. Phasellus vestibulum rutrum tincidunt. Maecenas vitae ex turpis.</p>
      <p className="announcing-left__description aside-data__description">consectetur adipiscing elit. Vivamus lacinia quis arcu non elementum. Phasellus vestibulum rutrum tincidunt. Maecenas vitae ex turpis.</p>
    </aside>

    <div className="section-announcing">

      <h2 className="section-announcing__title  section__title">announcing</h2>
      <p className="section-announcing__subtitle">call for speaker</p>
      <p className="section-announcing__description">consectetur adipiscing elit. Vivamus lacinia quis arcu non elementum. Phasellus vestibulum rutrum tincidunt. Maecenas vitae ex turpis. consectetur adipiscing elit. Vivamus lacinia quis arcu non elementum. Phasellus vestibulum rutrum tincidunt. Maecenas vitae ex turpis.</p>

      <div className="sign-contact">
        <h3 className="sign-contact__title">Sign up for updates</h3>
        <form>
          <input className="sign-contact__input" type="email" placeholder="Email address..." />
          <input className="btn-sign" type="submit" value="sign up" />
        </form>
      </div>

    </div>

  </section>


)

export default CFP
