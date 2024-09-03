import React, { useState } from "react";
import InputField from "../commons/InputField";
import { Link } from "react-router-dom";
import axios from "axios";
import useFormValidation from "../../utils/hooks/useFormValidation";
import inputFieldValidation from "../../utils/functions/inputFieldValidation";

function UserRegistration() {

  const initialFormState = {
    name:'',
    email:'',
    phoneNumber:'',
    password:'',
    confirmPassword:''
  }

  const {
    formInput,
    errors,
    handleBlur,
    handleChange,
    handleSubmit:validateSubmit,
  } = useFormValidation(initialFormState, inputFieldValidation)
  
  const APIURL = `${import.meta.env.VITE_API_URL}/registerUser`;
  const DATA = {
    name: formInput.name,
    email: formInput.email,
    phoneNumber: formInput.phoneNumber,
    password: formInput.password,
  };

  const handleSubmit = (e) => {
   validateSubmit (e, ()=>registerUserApi(APIURL, DATA))
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
              value={formInput.name}
              onChange={handleChange}
              error={errors.name}
            />
            <InputField
              name="email"
              label="Email"
              placeholder="Enter your email id"
              value={formInput.email}
              onChange={handleChange}
              error={errors.email}
            />
            <InputField
              name="phoneNumber"
              label="Phone Number"
              placeholder="Enter phone number"
              value={formInput.phoneNumber}
              onChange={handleChange}
              error={errors.phoneNumber}
            />

            <InputField
              name="password"
              label="Password"
              placeholder="Enter Password"
              value={formInput.password}
              onChange={handleChange}
              error={errors.password}
            />
            <InputField
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Re Enter Password"
              type="password"
              value={formInput.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
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
