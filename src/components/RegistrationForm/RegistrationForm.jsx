import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label} htmlFor="name">
          Name:
          <Field name="name" type="text" id="name" className={css.input} />
        </label>

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
          Register
        </button>
      </Form>
    </Formik>
  );
}
