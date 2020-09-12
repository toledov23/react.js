import React from "react";

import "./styles/Home.css";
import confLogo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <div className="Home__col">
            <img src={confLogo} alt="Platziconf-logo" />
            <h1>Print Your Badges</h1>
            <p>The easies way to manage your conference</p>
            <Link to="/badges" className="btn btn-primary">
              Start Now
            </Link>
          </div>
          <img src={astronauts} alt="Astronauts" />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
