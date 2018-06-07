import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.less";

const Button = ({ children, color, state, type, disabled }) => {
  return (
    <button
      className={`${styles.button} ${styles[color]} ${styles[type]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.boolean,
  type: PropTypes.oneOf(["border", "fill"])
};

Button.defaultProps = {
  color: "blue",
  disabled: false,
  type: "fill"
};

export default Button;
