import React, { useState } from "react";
import InputField from "./commons/InputField";

function Scheduler() {
  const [paymentStatus, setPaymentStatus] = useState(false);

  const isPaid = (event) => {
    setPaymentStatus(event.target.value === "true");
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-light col-lg-6 mt-4 p-4">
      <div className="col-4 col-md-12 col-lg-10">
        <h2 className="text-center mb-4">Schedule Your Interview</h2>
        <div>
          <InputField label="Date of Interview" type="date" />
          <div className="mt-3">
            <label>Select Preferred Time Slot</label>
            <select className="form-select" name="timeSlot" id="timeSlot">
              <option value="11 AM to 12 PM">11 AM to 12 PM</option>
              <option value="1 PM to 2 PM">1 PM to 2 PM</option>
              <option value="3 PM to 4 PM">3 PM to 4 PM</option>
              <option value="5 PM to 6 PM">5 PM to 6 PM</option>
            </select>
          </div>
          <div className="row mt-3 mb-3">
            <span>Payment Status</span>
            <div className="col-6 d-flex align-items-center mt-2">
              <input
                id="paid"
                className="form-check-input me-1"
                name="paymentStatus"
                value={true}
                type="radio"
                checked={paymentStatus}
                onChange={isPaid}
              />
              <label className="form-check-label" htmlFor="paid">
                Paid
              </label>
            </div>
            <div className="col-6 d-flex align-items-center">
              <input
                id="unpaid"
                className="form-check-input me-1"
                name="paymentStatus"
                value={false}
                type="radio"
                checked={!paymentStatus}
                onChange={isPaid}
              />
              <label className="form-check-label" htmlFor="unpaid">
                Pending
              </label>
            </div>
          </div>
          {paymentStatus && (
            <InputField
              label="Transaction Id"
              placeholder="Paste your transaction ID here"
            />
          )}
          <button className="btn btn-primary mt-3 w-100">Send Request</button>
        </div>
      </div>
    </div>
  );
}

export default Scheduler;
