import React from "react";
import InputField from "../commons/InputField";

function UserRegistration() {
  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 p-4">
          <p className="text-center">Register to Schedule Your Interview</p>
          <InputField
            label="Name"
            placeholder="Enter your full name"
            errMessage="Enter the required input"
          />
          <InputField
            label="Email"
            placeholder="Enter your email id"
            errMessage="Enter the required input"
          />
          <InputField
            label="Phone Number"
            placeholder="Enter phone number"
            errMessage="Enter the required input"
          />
          <InputField
            label="OTP"
            placeholder="Enter One Time Password"
            errMessage="Enter the required input"
          />
          <InputField
            label="Password"
            placeholder="Enter Password"
            errMessage="Enter the required input"
          />
          <InputField
            label="Confirm Password"
            placeholder="Re Enter Password"
            errMessage="Enter the required input"
          />
          <button className="btn btn-primary w-100">Register</button>
          {/* The "w-100" class makes the button occupy full width */}
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
