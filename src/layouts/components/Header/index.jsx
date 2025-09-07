import clsx from "clsx";
import { Link } from "react-router";

import Logo from "./../Logo/Logo";
import styles from "./Header.module.scss";
import Theme from "../../../Theme";
import Navigation from "./../Navigations/index";

function Header({ className }) {
  return (
    <header id="header" className={clsx(styles.header)}>
      <div className={clsx(styles.container, "container", className)}>
        <Logo
          src={"https://zoom.fullstack.edu.vn/assets/f8_icon.png"}
          text={"Fullstack.edu.vn"}
        />
        <Navigation />
        <div className={clsx(styles.actions)}>
          <Link className={clsx(styles.register)} to={"register"}>
            Register
          </Link>
          <Link className={clsx(styles.login)} to={"login"}>
            Login
          </Link>
          <Theme />
        </div>
      </div>
    </header>
  );
}

export default Header;
