import { useState } from "react";
import { Outlet } from "react-router";
import clsx from "clsx";

import styles from "./AdminLayout.module.scss";
import AdminFooter from "./components/AdminFooter";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import ScrollToTop from "../../components/ScrollToTop";
function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <>
      <AdminHeader onToggleSidebar={handleToggleSidebar} />
      <div className={clsx(styles.admin_container)}>
        <AdminSidebar collapsed={collapsed} />
        <Outlet />
      </div>
      <AdminFooter />
      <ScrollToTop />
    </>
  );
}

export default AdminLayout;
