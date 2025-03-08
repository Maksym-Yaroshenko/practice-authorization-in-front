// src/Login/Login.jsx

import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

import css from "./LoginForm.module.css";
import { login } from "../redux/auth/operations";
import { useDispatch } from "react-redux";

export default function Login() {
  const id = useId();
  const dispatch = useDispatch();
  const initialValues = { email: "", password: "" };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = async (event, action) => {
    try {
      await dispatch(login(event)).unwrap();
      action.resetForm();
    } catch (error) {
      action.resetForm();
      console.log(error.message);
    }
  };

  return (
    <div className="section">
      <div className={`${css.formContainer} container`}>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <label className={css.label} htmlFor={`${id}-email`}>
              Email
              <Field
                className={css.input}
                id={`${id}-email`}
                name="email"
                type="email"
              />
              <ErrorMessage
                className={css.error}
                component="span"
                name="email"
              />
            </label>
            <label className={css.label} htmlFor={`${id}-password`}>
              Password
              <Field
                className={css.input}
                id={`${id}-password`}
                name="password"
                type="password"
              />
              <ErrorMessage
                className={css.error}
                name="password"
                component="span"
              />
            </label>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
