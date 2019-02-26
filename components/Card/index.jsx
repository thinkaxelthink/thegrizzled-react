import React from "react";
import PropTypes from "prop-types";

import "./Card.scss";

export const Card = ({ mediaClass, title, description }) => (
  <div className="mdc-card trials-card">
    <div className="mdc-card__primary-action">
      <div
        className={`mdc-card__media mdc-card__media--square ${mediaClass}`}
      />
    </div>
  </div>
);

Card.proptypes = {
  mediaClass: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};
