// src/pages/Posts/PagesPosts/index.jsx

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import clsx from "clsx";

import styles from "./PagesPosts.module.scss";
import { API_BASE_URL } from "../../../config/api.constants.js";
import Loading from "../../../components/Loading/index.jsx";

function PagesPosts({ limit = 5 }) {
  const [posts, setPosts] = useState([]);
  const { pageId } = useParams();

  useEffect(() => {
    setPosts([]);
    async function fetchBlog() {
      const blogs = await fetch(
        `${API_BASE_URL}/posts?_limit=${limit}&_page=${pageId}`,
      ).then((r) => r.json());
      blogs.map(async (post) => {
        const author = await fetch("https://randomuser.me/api/").then((r) =>
          r.json(),
        );
        const startOfYear = new Date(2025, 6, 1).getTime();
        const now = Date.now();
        const randomDate = new Date(
          startOfYear + Math.random() * (now - startOfYear),
        ).toLocaleDateString("vi-VN");

        const blog = {
          id: post.id,
          title: post.title,
          body: post.body,
          name: `${author.results[0].name.first} ${author.results[0].name.last}`,
          avatar: author.results[0].picture.medium,
          publishedAt: randomDate,
          duration: Math.floor(Math.random() * 9 + 2),
        };
        setPosts((prev) => [...prev, blog]);
      });
    }
    fetchBlog();
  }, [limit, pageId]);

  if (!posts.length) return <Loading className={clsx(styles.loading_posts)} />;

  return (
    posts.length && (
      <div className={clsx(styles.pages_posts)}>
        {posts.map((blog) => {
          return (
            <div key={blog.id} id={blog.id} className={clsx(styles.card)}>
              <div className={clsx(styles.header)}>
                <div className={clsx(styles.author)}>
                  <a href="/">
                    <img
                      className={clsx(styles.avatar)}
                      src={blog.avatar}
                      alt=""
                    />
                  </a>
                  <a className={clsx(styles.bloger)} href="/">
                    <span>{blog.name}</span>
                  </a>
                </div>

                <div className={clsx(styles.actions)}>
                  <div className={clsx(styles.toggle_btn)}>
                    <svg
                      className="svg-inline--fa fa-bookmark"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512">
                      <path
                        fill="currentColor"
                        d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"></path>
                    </svg>
                  </div>
                  <div className={clsx(styles.option_btn)}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="ellipsis"
                      className="svg-inline--fa fa-ellipsis"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512">
                      <path
                        fill="currentColor"
                        d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className={clsx(styles.info)}>
                <a href="/blog/trai-nghiem-hoc-thu-react-native-devops-c-vo-cung-chat-luong-cung-f8-1">
                  <h2 className={clsx(styles.title)}>{blog.title}</h2>
                </a>
                <p className={clsx(styles.desc)}>{blog.body}</p>
              </div>

              <div className={clsx(styles.footer)}>
                <div className={clsx(styles.metaInfo)}>
                  <span className={clsx(styles.post_time)}>
                    Post at: {blog.publishedAt}
                  </span>
                  <span className={clsx(styles.read_time)}>
                    {blog.duration} phút đọc
                  </span>
                </div>
                <Link
                  className={clsx(styles.detail_btn)}
                  to={`/posts/${blog.id}/detail`}>
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}

export default PagesPosts;
