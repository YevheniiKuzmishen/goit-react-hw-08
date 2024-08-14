import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";
export default function LoginPage() {
  return (
    <div className={css.pageContainer}>
      <div className={css.pageTitle}>
        <p className={css.pageTitleP}>Please log in</p>
        <LoginForm />
      </div>
    </div>
  );
}
