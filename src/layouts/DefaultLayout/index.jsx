import { Outlet } from "react-router";

import Header from "../../layouts/components/Header";
import Footer from "./components/Footer/index";
import ScrollToTop from "../../components/ScrollToTop";

function DefaultLayout() {
  return (
    <>
      <Header className={"container"} />
      <Outlet />
      <Footer className={"container"} />
      <ScrollToTop />
    </>
  );
}

export default DefaultLayout;
