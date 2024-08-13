import { NavLink } from "react-router-dom";
import css from "./AuthNavigation.module.css";

export default function AuthNavigation() {
  return (
    <div>
      <NavLink className={css.link} to="register">
        Register
      </NavLink>
      <NavLink className={css.link} to="login">
        LogIn
      </NavLink>
    </div>
  );
}
