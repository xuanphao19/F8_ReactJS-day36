// src/components/Logo.jsx

import { Link } from "react-router";
import clsx from "clsx";

import styles from "./Logo.module.scss";
import { logoPropTypes } from "../../../utils/propTypes.js";

function Logo({ src, alt, text, size = "small", to = "/", className = "" }) {
  return (
    <Link to={to} className={clsx(styles.logo, styles[size], className)}>
      {src ? <img src={src} alt={alt || "Logo"} /> : null}
      {text ? <span>{text || "Logo"}</span> : null}
    </Link>
  );
}

Logo.propTypes = logoPropTypes;

export default Logo;
