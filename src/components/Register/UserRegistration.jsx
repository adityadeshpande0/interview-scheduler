import React, { useState } from "react";
import InputField from "../commons/InputField";

function UserRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    otp: "",
    password: "",
    confirmPassword: ""
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    otp: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
    }
    if (!formData.otp.trim()) {
      errors.otp = "OTP is required";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    // Update form errors
    setFormErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
      // You can perform further actions like API calls here
    }
  };

  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 p-4">
          <p className="text-center">Register to Schedule Your Interview</p>
          <form onSubmit={handleSubmit}>
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
              name="otp"
              label="OTP"
              placeholder="Enter One Time Password"
              value={formData.otp}
              onChange={handleChange}
              error={formErrors.otp}
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
              value={formData.confirmPassword}
              onChange={handleChange}
              error={formErrors.confirmPassword}
            />
            <button className="btn btn-primary w-100" type="submit">
              Register
            </button>
            {/* The "w-100" class makes the button occupy full width */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
