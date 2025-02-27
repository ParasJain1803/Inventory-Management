import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { InputText } from "primereact/inputtext";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  // name: Yup.string().required("Name is required"),
  // email: Yup.string().email("Invalid email").required("Email is required"),
  // password: Yup.string()
  //   .min(6, "At least 6 characters")
  //   .required("Password is required"),
});

const OnSubmitHandler = 
function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-[#eee]">
      <Formik initialValues={initialValues}>
        <form className="w-1/3 shadow-md rounded-md p-4 bg-white">
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <InputText
              unstyled
              className="w-full outline-none py-3 px-2 border-[.1px] border-zinc-400 rounded-md"
              placeholder="Enter email here"
            />
          </div>
        </form>
      </Formik>
    </div>
  );
}

export default Login;
