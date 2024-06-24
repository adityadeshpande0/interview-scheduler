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

  const [loading, setLoading] = useState(false); // State to track loading state

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
    setLoading(true); // Set loading state to true when login request starts
    axios
      .post(APIURL, DATA, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        sessionStorage.setItem('authToken', response.data.authToken);
        window.location.href = '/schedule-interview';
        console.log("Login Success !" + response.data.authToken);
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          console.error('Error response:', error.response.data);
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      })
      .finally(() => {
        setLoading(false); // Set loading state to false when request completes (success or error)
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
              disabled={loading} // Disable the button when loading is true
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
