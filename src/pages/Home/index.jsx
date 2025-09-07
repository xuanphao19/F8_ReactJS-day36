import clsx from "clsx";
import styles from "./Home.module.scss";

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
    </>
  );
}

export default Home;
