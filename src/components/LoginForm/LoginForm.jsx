import { Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label} htmlFor="email">
          Email:
          <Field name="email" type="email" id="email" className={css.input} />
        </label>
        <label className={css.label} htmlFor="password">
          Password:
          <Field
            name="password"
            type="password"
            id="password"
            className={css.input}
          />
        </label>
        <button type="submit" className={css.button}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
