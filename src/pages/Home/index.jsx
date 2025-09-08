import clsx from "clsx";
import { Link } from "react-router";
import styles from "./Home.module.scss";
import SetupRouter from "../../../public/SetupRouter.png";

function Home() {
  return (
    <>
      <h1 className={clsx(styles.title)}>
        Welcome
        <span className={clsx(styles.payment)}> web dev - f8 React -</span>
        {` Day 36.`}
      </h1>
      <p className={clsx(styles.desc)}>
        {`Chinh phục ReactJS cùng F8 `}
        <a
          href="https://fullstack.edu.vn/"
          target="_blank"
          rel="noopener noreferrer">
          - fullstack.edu.vn -
        </a>
        {` Học lập trình để đi làm!`}
      </p>
      <div className={clsx(styles.setup_router, "container")}>
        <h2># Bài 1: Setup Multiple Layouts với React Router</h2>
        <Link
          to={"/"}
          className="repositories"
          target="_blank"
          rel="noopener noreferrer">
          <span>⭐</span> Repositories GitHub
        </Link>

        <img
          className={clsx(styles.router_img)}
          src={`${SetupRouter}`}
          alt=""
        />
      </div>
    </>
  );
}

export default Home;
