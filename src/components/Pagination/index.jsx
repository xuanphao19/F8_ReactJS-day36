// src/components/Pagination/index.jsx

import { NavLink, Link, useParams } from "react-router";
import { useMemo } from "react";
import clsx from "clsx";
import styles from "./Pagination.module.scss";

export default function Pagination({ totalPages = 20, visibleDots = 3 }) {
  const { pageId } = useParams();
  const currentPage = Number(pageId) || 1;

  const pages = useMemo(() => {
    if (totalPages <= visibleDots) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let start = currentPage - Math.floor(visibleDots / 2);
    let end = currentPage + Math.floor(visibleDots / 2);

    if (start < 1) {
      start = 1;
      end = visibleDots;
    } else if (end > totalPages) {
      end = totalPages;
      start = totalPages - visibleDots + 1;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [currentPage, totalPages, visibleDots]);

  return (
    <div className={clsx(styles.pagination)}>
      <Link
        to={"/posts/1"}
        className={clsx(
          styles.button,
          `${currentPage === 1 ? styles.disabled : ""}`,
        )}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>
      </Link>

      <Link
        to={`/posts/${currentPage - 1}`}
        className={clsx(
          styles.button,
          `${currentPage === 1 ? styles.disabled : ""}`,
        )}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </Link>

      {pages.map((page) => (
        <NavLink
          key={page}
          to={`/posts/${page}`}
          className={({ isActive }) =>
            isActive ? `${styles.dot} ${styles.active} ` : `${styles.dot}`
          }>
          {page}
        </NavLink>
      ))}

      <Link
        to={`/posts/${currentPage + 1}`}
        className={clsx(
          styles.button,
          `${currentPage === totalPages ? styles.disabled : ""}`,
        )}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </Link>

      <Link
        to={`/posts/${totalPages}`}
        className={clsx(
          styles.button,
          `${currentPage === totalPages ? styles.disabled : ""}`,
        )}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </Link>
    </div>
  );
}
