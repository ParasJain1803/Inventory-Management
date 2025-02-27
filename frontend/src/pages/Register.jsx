import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

import { Button } from "primereact/button";

import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
});

const OnSubmitHandler = async () => {};
const Register = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center w-full bg-[#eee]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={OnSubmitHandler}
        >
          {({ values, setFieldValue, handleSubmit }) => (
            <>
              <form
                onSubmit={handleSubmit}
                className="w-[96%] md:w-[70%] lg:w-1/3 shadow-md rounded-md pt-10 pb-3 px-4 bg-white"
              >
                <div className="mb-3 py-1">
                  <label htmlFor="name">Name</label>
                  <Field
                    id="name"
                    value={values.name}
                    onChange={(e) => setFieldValue("name", e.target.value)}
                    className="w-full outline-none py-3 px-2 border-[.1px] border-zinc-400 rounded-lg"
                    placeholder="Enter name here"
                  />
                  <ErrorMessage
                    component={"p"}
                    className="'text-red-400 text-sm"
                    name="email"
                  />
                </div>
                {/* // email */}
                <div className="mb-3 py-1">
                  <label htmlFor="email">Email</label>
                  <Field
                    id="email"
                    value={values.email}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                    className="w-full outline-none py-3 px-2 border-[.1px] border-zinc-400 rounded-lg"
                    placeholder="Enter email here"
                  />
                  <ErrorMessage
                    component={"p"}
                    className="'text-red-400 text-sm"
                    name="email"
                  />
                </div>
                {/* // password */}
                <div className="mb-3 py-1">
                  <label htmlFor="password">password</label>
                  <Field
                    id="password"
                    value={values.password}
                    onChange={(e) => setFieldValue("password", e.target.value)}
                    className="w-full outline-none py-3 px-2 border-[.1px] border-zinc-400 rounded-lg"
                    placeholder="Enter password here"
                  />
                  <ErrorMessage
                    component={"p"}
                    className="'text-red-400 text-sm"
                    name="password"
                  />
                </div>
                {/* // submit button */}
                <div className="mb-3 py-1 flex items-center justify-center">
                  <Button
                  type="submit"
                    // disabled={!values.token}
                    // loading={LoginUserResponse.isLoading}
                    className="w-full bg-red-500 text-white py-3 px-2 flex items-center justify-center"
                  >
                    Submit
                  </Button>
                </div>
                {/* // register */}
                <div className="mb-3 py-1 flex items-center justify-end">
                  <p className="inline-flex items-center gap-x-1">
                    {" "}
                    Already Have An Account?
                    <Link className="font-semibold" to={"/login"}>
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Register;
