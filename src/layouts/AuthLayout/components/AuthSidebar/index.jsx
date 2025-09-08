import clsx from "clsx";
import { Link } from "react-router";

import styles from "./AuthSidebar.module.scss";
import { ROUTES } from "../../../../config/routes.prefix.js";
import Navigation from "../../../components/Navigations";

function AuthSidebar({ className }) {
  return (
    <div className={className}>
      <h1 className={clsx(styles.sidebar_title)}>F8 ReactJS Day 36 </h1>
      <Link to={"https://fullstack.edu.vn/"} target="_blank">
        <img
          className={clsx(styles.sidebar_img)}
          src="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
          alt="fullstack.edu.vn"
        />
      </Link>
      <Navigation routes={navRoute} className={clsx(styles.nav_auth)} />
    </div>
  );
}

export default AuthSidebar;

const navRoute = [
  {
    id: "nav_hw_2_1-1",
    title: "LOGIN",
    url: ROUTES.LOGIN,
  },
  {
    id: "nav_hw_2_1-5",
    title: "REGISTER",
    url: ROUTES.REGISTER,
  },
  {
    id: "nav_hw_2_1-2",
    title: "FORGOT PASSWORD",
    url: ROUTES.FORGOTPASSWORD,
  },
];
