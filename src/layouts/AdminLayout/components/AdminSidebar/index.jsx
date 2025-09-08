import clsx from "clsx";

import styles from "./AdminSidebar.module.scss";
import Navigation from "../../../components/Navigations";

import { ROUTES } from "../../../../config/routes.prefix.js";

function AdminSidebar({ collapsed }) {
  return (
    <aside
      className={clsx(styles.sidebar, `${collapsed ? styles.collapsed : ""}`)}>
      <div className={clsx(styles.sidebar_top)}>
        <h2 className={clsx(styles.brand)}>🤦‍♂️ Admin</h2>
      </div>
      <Navigation
        routes={navRoute}
        className={clsx(
          styles.nav_admin,
          `${collapsed ? styles.nav_collapsed : ""}`,
        )}
      />
    </aside>
  );
}

export default AdminSidebar;

const navRoute = [
  {
    id: "nav_hw_2_1-0",
    title: "🏠 Home",
    url: ROUTES.ROOT,
  },
  {
    id: "nav_hw_2_1-1",
    title: "📊 Dashboard",
    url: ROUTES.DASHBOARD,
  },
  {
    id: "nav_hw_2_1-5",
    title: "👥 Users",
    url: `${ROUTES.DASHBOARD}/${ROUTES.USERS}`,
  },
  {
    id: "nav_hw_2_1-2",
    title: "⚙️ Settings",
    url: `${ROUTES.DASHBOARD}/${ROUTES.SETTINGS}`,
  },
];
