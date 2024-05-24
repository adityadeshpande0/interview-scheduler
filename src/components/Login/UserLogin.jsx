import React, { useState } from "react";
import InputField from "../commons/InputField";
import { Link } from "react-router-dom";
import axios from "axios";

function UserLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error message for the field being edited
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };
  const APIURL = `${import.meta.env.VITE_API_URL}/loginuser`;
  const DATA = {
    email: formData.email,
    password: formData.password,
  };
  const loginUserApi = (APIURL, DATA) => {
    axios
      .post(APIURL, DATA)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    let errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    // Update form errors
    setFormErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
      // You can perform further actions like API calls here
      loginUserApi(APIURL, DATA)
    }
  };

  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
              value={formData.email}
              onChange={handleChange}
              error={formErrors.email}
            />
            <InputField
              name="password"
              label="Password"
              placeholder="Enter Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={formErrors.password}
            />

            <button
              className="btn btn-primary w-100 mt-2"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
