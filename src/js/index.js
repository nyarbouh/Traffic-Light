//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import TrafficLight from "../js/TrafficLight";

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
