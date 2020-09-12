import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";
import "./styles/BadgeList.css";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create New Badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unlysted">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <div className="BadgeList__section-name">
                <Gravatar
                  className="BadgeList__avatar"
                  email={badge.email}
                  alt="Avatar"
                />
                <div>
                  <h4 className="text-strong">
                    {badge.firstName} {badge.lastName}
                  </h4>
                  <p className="twitter">
                    <span className="twitter__logo"></span>@{badge.twitter}
                  </p>
                  <p>{badge.jobTitle}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
