import { Outlet } from "react-router";
import clsx from "clsx";
import styles from "./AuthLayout.module.scss";

import Header from "../../layouts/components/Header";
import ScrollToTop from "../../components/ScrollToTop";
import AuthSidebar from "./components/AuthSidebar/index";
function AuthLayout() {
  return (
    <>
      <Header />
      <div className={clsx(styles.auth, "container")}>
        <AuthSidebar />
        <Outlet />
      </div>
      <ScrollToTop />
    </>
  );
}

export default AuthLayout;
