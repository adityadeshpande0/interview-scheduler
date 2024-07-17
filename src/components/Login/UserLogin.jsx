import React, { useState } from "react";
import InputField from "../commons/InputField";
import { Link } from "react-router-dom";
import axios from "axios";
import inputFieldValidation from "../../utils/functions/inputFieldValidation";
import useFormValidation from "../../utils/hooks/useFormValidation";

function UserLogin() {
  const initialFormState = {
    email: "",
    password: "",
  };

  const {
    formInput,
    errors,
    handleBlur,
    handleChange,
    handleSubmit: validateSubmit,
  } = useFormValidation(initialFormState, inputFieldValidation);

  const [loading, setLoading] = useState(false);

  const APIURL = `${import.meta.env.VITE_API_URL}/loginuser`;
  const DATA = {
    email: formInput.email,
    password: formInput.password,
  };

  const loginUserApi = (APIURL, DATA) => {
    setLoading(true);
    axios
      .post(APIURL, DATA, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        sessionStorage.setItem("authToken", response.data.authToken);
        window.location.href = "/schedule-interview";
        console.log("Login Success !" + response.data.authToken);
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          console.error("Error response:", error.response.data);
        } else if (error.request) {
          console.error("Error request:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    validateSubmit(e, () => loginUserApi(APIURL, DATA));
  };

  const isSmallScreen = window.innerWidth <= 576;

  return (
    <div className={`navbar-brand ${isSmallScreen ? "p-3" : ""}`}>
      <p className="text-center fs-5 mt-2">
        <span className="badge text-bg-light p-2">Login </span> to Schedule
        Interview
      </p>
      <div className="container card d-flex col-md-4 bg-light">
        <div className="row justify-content-center">
          <div className="col-md-10 pt-4 pb-4">
            <InputField
              name="email"
              label="Email"
              placeholder="Enter your email id"
              value={formInput.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
            />
            <InputField
              name="password"
              label="Password"
              placeholder="Enter Password"
              type="password"
              value={formInput.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
            />
            <button
              className="btn btn-primary w-100 mt-2"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Logging In..." : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
