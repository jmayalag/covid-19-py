import React from "react";
import { withFormik } from "formik";

function PersonalDataForm(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "250px",
          padding: "10px"
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        <div style={{ color: "red" }}>
          {touched.firstName && errors.firstName}
        </div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        <div style={{ color: "red" }}>
          {touched.lastName && errors.lastName}
        </div>
        <label htmlFor="birthdate">Birthdate</label>
        <input
          id="birthdate"
          name="birthdate"
          type="date"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.birthdate}
          max="3000-12-31"
        />
        <div style={{ color: "red" }}>
          {touched.birthdate && errors.birthdate}
        </div>
        <label htmlFor="sex">Sex</label>
        <input
          id="sex"
          name="sex"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.sex}
        />
        <div style={{ color: "red" }}>{touched.sex && errors.sex}</div>
        <label htmlFor="citizenship">Citizenship</label>
        <input
          id="citizenship"
          name="citizenship"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.citizenship}
        />
        <div style={{ color: "red" }}>
          {touched.citizenship && errors.citizenship}
        </div>
        <button type="submit">
          Submit
          {isSubmitting && "ting..."}
        </button>
      </form>
      <pre>{JSON.stringify({ values, touched, errors }, null, 2)}</pre>
    </>
  );
}

const INITAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  birthdate: "",
  sex: "",
  citizenship: ""
};
const EnhancedForm = withFormik({
  mapPropsToValues: () => INITAL_FORM_STATE,
  handleSubmit: () => {},
  validate: () => {},
  validateOnChange: false,
  validateOnMount: false,
  validateOnBlur: true
})(PersonalDataForm);

export default EnhancedForm;
