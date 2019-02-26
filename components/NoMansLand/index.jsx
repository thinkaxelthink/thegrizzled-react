import React from "react";
import PropTypes from "prop-types";

import "./NoMansLand.scss";

import { Card } from "../Card";

export class NoMansLand extends React.Component {
  render() {
    return (
      <ul className="mdc-image-list nomansland">
        {this.props.cards.map(card => (
          <li className="mdc-image-list__item">
            <Card {...card} />
          </li>
        ))}
      </ul>
    );
  }
}

NoMansLand.PropTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};
