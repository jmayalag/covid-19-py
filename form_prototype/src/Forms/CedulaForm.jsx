import React from "react";
import { withFormik } from "formik";
import dayjs from "dayjs";
import fetchCitizenData from "../utils/fetchCitizenData";

let responseData = {};

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
        <label htmlFor="cedula">Cedula</label>
        <input
          id="cedula"
          name="cedula"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.cedula}
        />
        <div style={{ color: "red" }}>{touched.cedula && errors.cedula}</div>
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
        <button type="submit">
          Submit
          {isSubmitting && "ting..."}
        </button>
      </form>
      <pre>{JSON.stringify({ values, touched, errors }, null, 2)}</pre>
    </>
  );
}

const INITAL_FORM_VALUES = {
  cedula: "",
  birthdate: ""
};
const EnhancedForm = withFormik({
  mapPropsToValues: () => INITAL_FORM_VALUES,
  handleSubmit: () => {
    console.log(responseData);
    console.log("submitting after validated?");
  },
  validate: async (values, ...args) => {
    const errors = {};

    if (!values.cedula) {
      errors.cedula = "Cedula is required";
    }

    responseData = {};
    const citizenData = await fetchCitizenData(values.cedula).catch(e => {
      errors.cedula = "La Cedula no es valida";
    });
    responseData = citizenData;
    const { fechNacim: birthdate = "" } = citizenData || {};

    let isSame = dayjs(birthdate).isSame(dayjs(values.birthdate));
    if (!isSame) {
      errors.birthdate = "Cedula and Birthdate do not match";
    }

    if (!values.birthdate) {
      errors.birthdate = "Birthdate is required";
    }

    return errors;
  },
  validateOnChange: false,
  validateOnMount: false,
  validateOnBlur: false
})(PersonalDataForm);

export default EnhancedForm;
