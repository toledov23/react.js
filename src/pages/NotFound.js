import React from "react";

import "./styles/NotFound.css";
import astronauts from "../images/astronauts.svg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <React.Fragment>
      <div className="NotFound">
        <div className="NotFound__col">
          <h1>404: Not Found</h1>
          <p>¡Sorry!</p>
          <Link to="/badges/new" className="btn btn-primary">
            Go Back
          </Link>
        </div>
        <img src={astronauts} alt="Astronauts" />
      </div>
    </React.Fragment>
  );
}

export default NotFound;
