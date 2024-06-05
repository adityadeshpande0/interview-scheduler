import React, { useState } from "react";
import InputField from "./commons/InputField";

function Scheduler() {
  const [paymentStatus, setPaymentStatus] = useState(false);

  const isPaid = (event) => {
    setPaymentStatus(event.target.value === "true");
  };
  const isSmallScreen = window.innerWidth <= 576;
  return (
    <div className={`navbar-brand ${isSmallScreen ? "p-3" : ""}`}>
      <p className="text-center fs-5 mt-2">
        <span className="badge text-bg-light p-2">Schedule </span> your
        Interview
      </p>
      <div className="container card d-flex col-md-4 bg-light">
        <div className="row justify-content-center">
          <div className="col-md-10 pt-4 pb-4">
            <InputField name="date" label="Select Date" type="date" />
            <div className="mb-3">
              <label>Select Preferred Time Slot</label>
              <select className="form-select" name="timeSlot" id="timeSlot">
                <option value="11 AM to 12 PM">11 AM to 12 PM</option>
                <option value="1 PM to 2 PM">1 PM to 2 PM</option>
                <option value="3 PM to 4 PM">3 PM to 4 PM</option>
                <option value="5 PM to 6 PM">5 PM to 6 PM</option>
              </select>
            </div>
            <div className="d-flex row mb-3">
              <label>Payment Status</label>
              <div className="row mt-1">
                <div className="col d-flex align-items-center">
                  <label className="form-check-label">Paid</label>
                  <input
                    name="paymentStatus"
                    className="mx-2 form-check-input"
                    type="radio"
                  />
                </div>
                <div className="col d-flex align-items-center">
                  <label className="form-check-label">Pending</label>
                  <input
                    name="paymentStatus"
                    className="mx-2 form-check-input"
                    type="radio"
                  />
                </div>
              </div>
            </div>
            <InputField
              label="Transaction Id"
              placeholder="Paste your payment Id here"
            />
            <button
              className="btn btn-primary col-12 mt-2"
              // onClick={handleSubmit}
            >
              Send Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scheduler;
