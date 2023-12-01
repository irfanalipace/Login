// LoginForm.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import "@fortawesome/fontawesome-free/css/all.css";
import "./Login.css";
import axios from "axios";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navegate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().trim().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://dummyjson.com/auth/login",
          values
        );
        const { token } = response.data; // Assuming your API returns a token

        // Add logic to store the token in your authentication system (e.g., Context API, localStorage, etc.)
        console.log("Login Successful. Token:", token);
        navegate("/dashboard");
      } catch (error) {
        console.error("Login failed. Error:", error.message);
      }
    },
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-logo-icon">
        <div>
          <FontAwesomeIcon icon={faLifeRing} /> logoipsum
        </div>
      </div>
      <div className="welcome-h1">
        <h1>Welcome Back</h1>
      </div>
      <div className="pragraph-dashboard">
        <p>You need to be signed in to access the project dashboard.</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email or username</label>
          <input
            type="text"
            id="email"
            placeholder="wesley.mendoza@example.com"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group password-group">
          <label htmlFor="password password-lable">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <span className="password-toggle" onClick={handleTogglePassword}>
            {showPassword ? "👁️" : "👁️"}
          </span>
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="additional-options-checkin-password">
          <label>
            <input type="checkbox" name="rememberMe" />
            Keep me signed in
          </label>
          <a href="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <button className="login-with-google">
        <FontAwesomeIcon icon={faGoogle} /> Login with Google
      </button>
      <p className="sign-link">
        {" "}
        Haven’t joined yet?<Link to={"/"}> Sign in</Link>
      </p>
    </div>
  );
};

export default Login;
