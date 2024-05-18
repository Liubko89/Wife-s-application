import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const bildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
    <>
      <NavLink to="/" className={bildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/tasks" className={bildLinkClass}>
        Tasks
      </NavLink>
      <NavLink to="/clients" className={bildLinkClass}>
        Clients
      </NavLink>
    </>
  );
};

export default Navigation;
