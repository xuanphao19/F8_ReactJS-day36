import { useEffect, useState } from "react";

export default function Theme({ className, children, ...prop }) {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    let localTheme = localStorage.getItem("theme");
    setTheme(!localTheme ? "dark" : localTheme);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button className={`${className} toggle-theme`} onClick={toggle} {...prop}>
      {theme === "dark" ? "🌙" : "☀️"} {children}
    </button>
  );
}
