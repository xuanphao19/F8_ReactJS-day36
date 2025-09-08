import { useState } from "react";
import clsx from "clsx";

import styles from "./AdminHeader.module.scss";
import Theme from "../../../../Theme";

function AdminHeader({ onToggleSidebar }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={clsx(styles.header)}>
      <div className={clsx(styles.left)} onClick={onToggleSidebar}>
        <button className={clsx(styles.toggle)}>☰</button>
        <h1 className={clsx(styles.logo)}>Admin Panel</h1>
      </div>

      <div className={clsx(styles.search)}>
        <input type="text" placeholder="Search..." />
      </div>

      <div className={clsx(styles.user)}>
        <button
          className={clsx(styles.user_btn)}
          onClick={() => setOpen(!open)}>
          <span className={clsx(styles.avatar)}>🤦‍♂️ </span>
          <span className={clsx(styles.name)}>Admin</span>
        </button>
        <Theme style={{ display: "none" }} />
        {open && (
          <div className={clsx(styles.dropdown)}>
            <Theme className={clsx(styles.admin_theme)}>Theme</Theme>
            <button>💼 Profile</button>
            <button>✨ Settings</button>
            <button className={clsx(styles.logout)}>🔓 Logout</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default AdminHeader;
