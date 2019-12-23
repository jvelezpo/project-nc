import React from "react"

import Speaker1 from "./images/speaker1"
import Speaker2 from "./images/speaker2"
import Speaker3 from "./images/speaker3"
import Speaker4 from "./images/speaker4"

import "./Speakers.scss"

const Speakers = () => (

  <section className="speakers-container" id="speakers">

    <div className="triangle-top" />
    <div className="section-speakers">
      <h2 className="section-speakers__title  section__title">speakers</h2>

      <div className="content-figure">
        <article className="section-speakers__content">
          <figure className="section-speakers__img">
            <Speaker1 />
          </figure>
          <p className="section-speakers__description">
            Over the last 2 years, Anna has been one of the most active
            contributors to Node.js core. Currently pursuing a Master’s degree
            in mathematics in Germany, she is fueled by a passion for Node and
            its community.
          </p>
          <div className="section-speakers__data">
            <h3 className="section-speakers__name">Anna Henningsen</h3>
            <button
              className="section-speakers__social icon-twitter"
              aria-label="Twitter_Speaker"
              href="#"
            />
          </div>
        </article>

        <article className="section-speakers__content">
          <figure className="section-speakers__img">
            <Speaker2 />
          </figure>
          <p className="section-speakers__description">
            Over the last 2 years, Anna has been one of the most active
            contributors to Node.js core. Currently pursuing a Master’s degree
            in mathematics in Germany, she is fueled by a passion for Node and
            its community.
          </p>
          <div className="section-speakers__data">
            <h3 className="section-speakers__name">Anna Henningsen</h3>
            <button
              className="section-speakers__social icon-twitter"
              aria-label="Twitter_Speaker"
              href="#"
            />
          </div>
        </article>

        <article className="section-speakers__content">
          <figure className="section-speakers__img">
            <Speaker3 />
          </figure>
          <p className="section-speakers__description">
            Over the last 2 years, Anna has been one of the most active
            contributors to Node.js core. Currently pursuing a Master’s degree
            in mathematics in Germany, she is fueled by a passion for Node and
            its community.
          </p>
          <div className="section-speakers__data">
            <h3 className="section-speakers__name">Anna Henningsen</h3>
            <button
              className="section-speakers__social icon-twitter"
              aria-label="Twitter_Speaker"
              href="#"
            />
          </div>
        </article>

        <article className="section-speakers__content">
          <figure className="section-speakers__img">
            <Speaker4 />
          </figure>
          <p className="section-speakers__description">
            Over the last 2 years, Anna has been one of the most active
            contributors to Node.js core. Currently pursuing a Master’s degree
            in mathematics in Germany, she is fueled by a passion for Node and
            its community.
          </p>
          <div className="section-speakers__data">
            <h3 className="section-speakers__name">Anna Henningsen</h3>
            <button
              className="section-speakers__social icon-twitter"
              aria-label="Twitter_Speaker"
              href="#"
            />
          </div>
        </article>
      </div>
    </div>
    <div className="triangle-bottom" />
  </section>
)

export default Speakers
