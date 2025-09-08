import { Outlet } from "react-router";
import clsx from "clsx";

import styles from "./DefaultLayout.module.scss";

import Header from "../../layouts/components/Header";
import Footer from "./components/Footer/index";
import ScrollToTop from "../../components/ScrollToTop";

function DefaultLayout() {
  return (
    <>
      <Header className={"container"} />
      <div className={clsx(styles.default)}>
        <Outlet />
      </div>
      <Footer className={"container"} />
      <ScrollToTop />
    </>
  );
}

export default DefaultLayout;
