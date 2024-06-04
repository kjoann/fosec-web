import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { useTheme } from "../hooks/useTheme";
import { darkTheme, lightTheme } from "../constants/colors";
import { Link } from "react-router-dom";
import images from "../constants/image";

const Login = () => {
  const { theme } = useTheme();
  const themeColors = theme ? darkTheme : lightTheme;

  return (
    <div className="w-full p-16 z-40">
      <h1
        className="text-5xl font-bold mb-6"
        style={{ color: themeColors.title }}
      >
        Welcome back,{" "}
      </h1>
      <p className="text-xl">
        Enter the information you entered while registering
      </p>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email is required";
          }
          if (!values.password) {
            errors.password = "Password is required";
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          console.log("Form submitted:", values);
          actions.setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="my-5">
              <label htmlFor="email" className="block text-sm italic">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full rounded-md py-2.5 px-4 text-black outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="my-5">
              <label htmlFor="password" className="block text-sm italic">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full rounded-md py-2.5 px-4 text-black outline-none"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="my-4 flex justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <p>Remember me</p>
              </div>
              <Link
                to={"/forgot-password"}
                style={{ color: themeColors.title }}
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              style={{
                backgroundImage: `linear-gradient(to right, ${themeColors.secondTitle}, ${themeColors.primary})`,
              }}
              className="w-full py-2.5 rounded-md"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
      <div className="my-5 flex items-center gap-2">
        <div
          className="h-1 flex-grow"
          style={{ background: themeColors.text }}
        ></div>
        <p>OR</p>
        <div
          className="h-1 flex-grow"
          style={{ background: themeColors.text }}
        ></div>
      </div>
      <button className="my-5 border rounded-md flex justify-center items-center gap-2 py-2.5 w-full">
        <img src={images.googleIcon} alt="" className="w-6 h-6" />
        <p>Sign in with Google</p>
      </button>
      <p className="text-center">
        Don’t have an account ?{" "}
        <Link to={"/signup"} style={{ color: themeColors.title }}>
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
