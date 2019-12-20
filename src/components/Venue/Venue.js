import React from "react"

import RutaN from "../images/ruta-n"
import Hotel10 from "../images/hotel10"

import "./Venue.scss"

const Venue = () => (
  <div className="venue-component venue" id="venue">
    <div className="rutan-image">
      <RutaN />
    </div>
    <div className="content">
      <div className="title">Venue</div>
      <div>
        consectetur adipiscing elit. Vivamus lacinia quis arcu non elementum.
        Phasellus vestibulum rutrum tincidunt. Maecenas vitae ex turpis.
        consectetur adipiscing elit. Vivamus lacinia quis arcu non elementum.
        Phasellus vestibulum rutrum tincidunt. Maecenas vitae ex turpis.
      </div>
      <div className="subtitle">Hotel Recommend</div>
      <a
        href="https://www.diezhotel.com/"
        target="__blank"
        rel="noopener noreferrer"
      >
        <figure className="hotel">
          <Hotel10 />
        </figure>
      </a>
      <a
        href="https://reservations.travelclick.com/103293?groupID=2323678"
        className="reservation"
        target="__blank"
      >
        Reservation Hotel
      </a>
    </div>
  </div>
)

export default Venue
