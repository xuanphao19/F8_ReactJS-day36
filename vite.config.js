import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3009,
    open: true,
    watch: {
      usePolling: true,
    },
  },
  base: process.env.NODE_ENV === "production" ? "/F8_ReactJS-day36/" : "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
