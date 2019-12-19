import React from "react"

import RutaN from '../images/ruta-n'

import "./Venue.scss"

const Venue = () => (
  <div className="venue-component venue">
    <div className="rutan-image">
      <RutaN />
    </div>
    <div className="content">
      <div className="title">
        Venue
      </div>
      <div>
        consectetur adipiscing elit. Vivamus lacinia quis arcu non elementum. Phasellus vestibulum rutrum tincidunt. Maecenas vitae ex turpis. consectetur adipiscing elit. Vivamus lacinia quis arcu non elementum. Phasellus vestibulum rutrum tincidunt. Maecenas vitae ex turpis.
      </div>
      <button className="reservation">Reservation</button>
    </div>
  </div>
)

export default Venue
