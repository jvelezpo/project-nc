import React from "react"

import Adrian from "./images/team-adrian";
import Julian from "./images/team-julian";
import Alejandro from "./images/team-alejandro";
import Sebastian from "./images/team-sebastian";
import Maleja from "./images/team-maleja";
import Diego from "./images/team-diego";
import Nicole from "./images/team-nicole";
import Jhonatan from "./images/team-jhonatan";
import Hamilton from "./images/team-hamilton";
import Stiwar from "./images/team-stiwar";

import "./Team.scss"

const Team = () => (
  <div className="team-component team" id="team">
    <div className="title">
      Team
    </div>
    <div className="images">
      <Adrian />
      <Julian />
      <Alejandro />
      <Sebastian />
      <Maleja />
      <Diego />
      <Nicole />
      <Jhonatan />
      <Hamilton />
      <Stiwar />
    </div>
    <div className="triangle" />
  </div>
)

export default Team
