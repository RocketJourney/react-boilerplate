import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.less";

const Button = ({ children, color, state, type }) => {
  console.log(styles);
  return (
    <button className={`${styles.button} ${styles[color]} ${styles[type]}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  type: PropTypes.oneOf(["border", "fill"])
};

Button.defaultProps = {
  type: "fill",
  color: "blue"
};

export default Button;
