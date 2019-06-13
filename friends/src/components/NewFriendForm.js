import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const NewFriendForm = () => (
  <div>
    <h1>Add a New Friend Below!</h1>
    <Formik
      initialValues={{ name: "", age: "", email: "" }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field placeholder="name" type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <Field placeholder="age" type="number" name="age" />
          <ErrorMessage name="age" component="div" />
          <Field placeholder="email" type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default NewFriendForm;
