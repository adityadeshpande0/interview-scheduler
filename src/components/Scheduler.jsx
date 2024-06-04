import React, { useState } from "react";
import InputField from "./commons/InputField";

function Scheduler() {
  const [paymentStatus, setPaymentStatus] = useState(false);
  const isPaid = () => {
    setPaymentStatus(event.target.value === "true");
  };

  return (
    <div>
      <div>
        <span>Schedule Your Interview</span>
        <div>
          <InputField label="Date of Interview" type="date" />

          <div className="row">
            <span>Payment Status</span>
            <div className="col-1">
              <label>Paid</label>
              <input
                id="paid"
                name="paymentStatus"
                value={true}
                type="radio"
                checked={paymentStatus}
                onChange={isPaid}
              />
            </div>
            <div className="col-1">
              <label>Pending</label>
              <input
                id="unpaid"
                name="paymentStatus"
                value={false}
                type="radio"
                checked={!paymentStatus}
                onChange={isPaid}
              />
            </div>
          </div>
          {paymentStatus && (
            <InputField
              label="Transaction Id"
              placeholder="Paste your transaction ID here"
            />
          )}
          <button className="btn btn-primary">Send Request</button>
        </div>
      </div>
    </div>
  );
}

export default Scheduler;
