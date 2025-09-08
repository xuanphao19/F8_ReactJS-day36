// src/Routes/AppRoutes/index.jsx

import { BrowserRouter, Routes, Route } from "react-router";
import { ROUTES } from "../../config/routes.prefix.js";
const {
  ROOT,
  ABOUT,
  POSTS,
  CONTACT,
  PRIVACY,
  LOGIN,
  REGISTER,
  FORGOTPASSWORD,
  DASHBOARD,
  USERS,
  SETTINGS,
  DETAIL,
  PAGES_ID,
  NOTFOUND,
} = ROUTES;

import Home from "../../pages/Home";
import DefaultLayout from "../../layouts/DefaultLayout";
import AuthLayout from "./../../layouts/AuthLayout";
import AdminLayout from "./../../layouts/AdminLayout";

import About from "./../../pages/About";
import Posts from "./../../pages/Posts";
import PostDetail from "./../../pages/PostDetail";
import Contact from "./../../pages/Contact";
import Privacy from "./../../pages/Privacy";
import Login from "./../../pages/Login";
import Register from "./../../pages/Register";
import ForgotPassword from "./../../pages/ForgotPassword";
import Dashboard from "./../../pages/Dashboard";
import Users from "./../../pages/Users";
import Settings from "./../../pages/Settings";
import NotFound from "./../../pages/NotFound";
import PagesPosts from "./../../pages/Posts/PagesPosts";

function AppRoutes() {
  const basename =
    import.meta.env.MODE === "production" ? "/F8_ReactJS-day36/" : "/";

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path={ROOT}>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={POSTS} element={<Posts limit={5} />}>
              <Route index element={<PagesPosts limit={5} />} />
              <Route path={PAGES_ID} element={<PagesPosts limit={5} />} />
              <Route path={DETAIL} element={<PostDetail />} />
            </Route>
            <Route path={CONTACT} element={<Contact />} />
            <Route path={PRIVACY} element={<Privacy />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path={LOGIN} element={<Login />} />
            <Route path={REGISTER} element={<Register />} />
            <Route path={FORGOTPASSWORD} element={<ForgotPassword />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path={DASHBOARD}>
              <Route index element={<Dashboard />} />
              <Route path={USERS} element={<Users />} />
              <Route path={SETTINGS} element={<Settings />} />
            </Route>
          </Route>
        </Route>
        <Route path={NOTFOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
