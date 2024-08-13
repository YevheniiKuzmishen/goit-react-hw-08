import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBarr.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
}
