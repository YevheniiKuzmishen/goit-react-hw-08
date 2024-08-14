import { NavLink } from "react-router-dom";
import css from "./AuthNavigation.module.css";

export default function AuthNavigation() {
  return (
    <div>
      <NavLink
        className={css.link}
        to="register"
        style={({ isActive }) =>
          isActive
            ? { textDecoration: "underline", fontWeight: "bold" }
            : undefined
        }
      >
        Register
      </NavLink>
      <NavLink
        className={css.link}
        to="login"
        style={({ isActive }) =>
          isActive
            ? { textDecoration: "underline", fontWeight: "bold" }
            : undefined
        }
      >
        LogIn
      </NavLink>
    </div>
  );
}
