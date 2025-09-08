import clsx from "clsx";
import styles from "./AdminFooter.module.scss";
import Logo from "./../../../components/Logo/Logo";

function AdminFooter() {
  return (
    <footer className={clsx(styles.footer)}>
      <Logo
        src={"https://zoom.fullstack.edu.vn/assets/f8_icon.png"}
        text={"Học lập trình để đi làm!"}
      />
      <p>© {new Date().getFullYear()} Admin Dashboard. All rights reserved.</p>
    </footer>
  );
}

export default AdminFooter;
