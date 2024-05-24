import React, { useState } from "react";
import InputField from "../commons/InputField";
import { Link } from "react-router-dom";
import axios from "axios";

function UserRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
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

  //Validation for fields
  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidPhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    return phoneNumberRegex.test(phoneNumber);
  };
  
  const APIURL = `${import.meta.env.VITE_API_URL}/registerUser`;
  const DATA = {
    name: formData.name,
    email: formData.email,
    phoneNumber: formData.phoneNumber,
    password: formData.password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      errors.phoneNumber = "Enter Valid Phone Number";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      alert("Passwords Do not Match !");
    }

    // Update form errors
    setFormErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // API CALL
      registerUserApi(APIURL, DATA);
    }
  };

  
  const isSmallScreen = window.innerWidth <= 576;

  const registerUserApi = (APIURL, DATA) => {
    axios
      .post(APIURL, DATA)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div className={`navbar-brand ${isSmallScreen ? "p-3" : ""}`}>
      <p className="text-center fs-5 mt-2">
        <span className="badge text-bg-light p-2">Register </span> to Schedule
        Interview
      </p>
      <div className="container card d-flex col-md-4 bg-light">
        <div className="row justify-content-center">
          <div className="col-md-10 pt-4 pb-4">
            <InputField
              name="name"
              label="Name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              error={formErrors.name}
            />
            <InputField
              name="email"
              label="Email"
              placeholder="Enter your email id"
              value={formData.email}
              onChange={handleChange}
              error={formErrors.email}
            />
            <InputField
              name="phoneNumber"
              label="Phone Number"
              placeholder="Enter phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={formErrors.phoneNumber}
            />

            <InputField
              name="password"
              label="Password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              error={formErrors.password}
            />
            <InputField
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Re Enter Password"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={formErrors.confirmPassword}
            />
            <button
              className="btn btn-primary w-100 mt-2"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
