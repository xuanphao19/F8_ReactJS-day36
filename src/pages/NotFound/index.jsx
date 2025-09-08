import { Link } from "react-router";
import clsx from "clsx";
import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className={clsx(styles.notfound)}>
      <div className={clsx(styles.wrapper)}>
        <h1 className={clsx(styles.title)}>404</h1>
        <p className={clsx(styles.message)}>
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link to="/" replace className={clsx(styles.home_btn)}>
          ⬅ Go back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
