import Navigation from "../../../components/Navigations";

import clsx from "clsx";
import styles from "./AuthSidebar.module.scss";
import { ROUTES } from "../../../../config/routes.prefix.js";

function AuthSidebar({ className }) {
  return (
    <div className={className}>
      <h1 className={clsx(styles.sidebar_title)}>F8 ReactJS Day 36 </h1>
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
