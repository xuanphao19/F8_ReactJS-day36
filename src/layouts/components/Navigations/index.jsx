import PropTypes from "prop-types";
import { NavLink } from "react-router";
import clsx from "clsx";

import styles from "./Navigation.module.scss";
import { ROUTES } from "../../../config/routes.prefix.js";

const Lists = ({ as = "ul", children, className }) => {
  const List = as;
  return <List className={className}>{children}</List>;
};

const Item = ({ as = "li", children, className }) => {
  const NavItem = as;
  return <NavItem className={className}>{children}</NavItem>;
};

const Navigation = ({ routes = navData, className }) => {
  const Nav = "nav";

  return (
    <Nav className={clsx(styles.nav)}>
      <Lists as="ul" className={clsx(styles.navlist, className)}>
        {routes.map(({ id, title, url }) => {
          return (
            <Item key={id} as="li" className={clsx(styles.item)}>
              <NavLink
                {...(url ? { to: `${url}` } : {})}
                className={({ isActive }) =>
                  clsx(styles.link, { [styles.selected]: isActive })
                }>
                {title}
              </NavLink>
            </Item>
          );
        })}
      </Lists>
    </Nav>
  );
};

Navigation.propTypes = {
  children: PropTypes.node,
};
Lists.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.string,
};
Item.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string | null,
  as: PropTypes.string | null,
};

const navData = [
  {
    id: "nav_hw_2_1-1",
    title: "Home",
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
    id: "nav_hw_2_3",
    title: "Admin",
    url: ROUTES.DASHBOARD,
  },
  {
    id: "nav_hw_2_6",
    title: "Notfound",
    url: "DASHBOARD123",
  },
];

export default Navigation;
