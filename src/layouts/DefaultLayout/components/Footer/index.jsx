import { Link } from "react-router";
import Logo from "./../../../components/Logo/Logo";

import clsx from "clsx";
import styles from "./Footer.module.scss";
import { ROUTES } from "../../../../config/routes.prefix.js";
import Navigation from "../../../components/Navigations";

function Footer({ className }) {
  return (
    <footer id="footer" className={clsx(styles.footer)}>
      <div className={clsx(styles.container, className)}>
        <div className={clsx(styles.footer_content)}>
          <Logo
            src={"https://zoom.fullstack.edu.vn/assets/f8_icon.png"}
            text={"Học lập trình để đi làm!"}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            maxime et veniam eligendi rem voluptatibus.
          </p>
          <p>Receive product news and updates.</p>
        </div>

        <div className={clsx(styles.footer_nav)}>
          <Navigation routes={ROOT} className={clsx(styles.list_item)} />
          <Navigation routes={POSTS} className={clsx(styles.list_item)} />
          <Navigation routes={CONTACT} className={clsx(styles.list_item)} />
        </div>

        <Link
          className={clsx(styles.copyright)}
          to="https://fullstack.edu.vn/"
          target="_blank"
          rel="noopener noreferrer">
          © 7/9/2025 Copyright: Fullstack.edu.vn...
          <strong className="fs-4 fw-medium fst-italic ms-3"></strong>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

const ROOT = [
  {
    id: "nav_hw_2_1-1",
    title: "Multiple Layouts",
    url: ROUTES.ROOT,
  },
  {
    id: "nav_hw_2_1-5",
    title: "About",
    url: ROUTES.ABOUT,
  },
  {
    id: "nav_hw_2_1-2",
    title: "Posts",
    url: ROUTES.POSTS,
  },
  {
    id: "nav_hw_2_1-4",
    title: "Contact",
    url: ROUTES.CONTACT,
  },
  {
    id: "nav_hw_2_1=3",
    title: "Admin",
    url: ROUTES.DASHBOARD,
  },
];

const POSTS = [
  {
    id: "nav_hw_2_1-1",
    title: "Posts List",
    url: ROUTES.ROOT,
  },
  {
    id: "nav_hw_2_1-5",
    title: "About",
    url: ROUTES.ABOUT,
  },
  {
    id: "nav_hw_2_1-2",
    title: "Posts",
    url: ROUTES.POSTS,
  },
];

const CONTACT = [
  {
    id: "nav_hw_2_1-4",
    title: "Contact",
    url: ROUTES.CONTACT,
  },
  {
    id: "nav_hw_2_1-1",
    title: "Multiple Layouts",
    url: ROUTES.ROOT,
  },
  {
    id: "nav_hw_2_1-5",
    title: "About",
    url: ROUTES.ABOUT,
  },
  {
    id: "nav_hw_2_1-2",
    title: "Posts",
    url: ROUTES.POSTS,
  },
];
