import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <div className={css.pageContainer}>
      <div className={css.pageTitle}>
        <p className={css.pageTitleP}>Register your account</p>
        <RegistrationForm />
      </div>
    </div>
  );
}
