// src/pages/Posts/index.jsx
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import clsx from "clsx";

import styles from "./Posts.module.scss";
import Loading from "../../components/Loading/index.jsx";
import { API_BASE_URL } from "../../config/api.constants.js";
import Pagination from "../../components/Pagination";

function Posts({ limit = 5 }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/posts`)
      .then((res) => res.json())
      .then((posts) => {
        setData(posts);
      });
  }, []);

  if (!data.length) return <Loading className={clsx(styles.loading_posts)} />;

  return (
    <div className="posts container">
      <h2 className={clsx(styles.posts_heading)}>Bài Viết Nổi Bật:</h2>
      <Outlet />
      <Pagination totalPages={data.length / limit} visibleDots={5} />
    </div>
  );
}

export default Posts;
