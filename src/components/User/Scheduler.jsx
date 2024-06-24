import React, { useState } from "react";
import InputField from "../commons/InputField";
import axios from "axios";

function Scheduler() {
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeSlotChange = (event) => {
    setTimeSlot(event.target.value);
  };
  const APIURL = `${import.meta.env.VITE_API_URL}/scheduleInterview`;
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        APIURL,
        {
          date,
          timeslot: timeSlot,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`, 
          },
        }
      );
      setSuccess("Interview scheduled successfully!");
      setError(null);
    } catch (error) {
      console.error("Error scheduling interview:", error);
      setError("Failed to schedule interview. Please try again.");
      setSuccess(null);
    }
  };

  return (
    <div className={`navbar-brand ${window.innerWidth <= 576 ? "p-3" : ""}`}>
      <p className="text-center fs-5 mt-2">
        <span className="badge text-bg-light p-2">Schedule </span> your
        Interview
      </p>
      <div className="container card d-flex col-md-4 bg-light">
        <div className="row justify-content-center">
          <div className="col-md-10 pt-4 pb-4">
            <InputField name="date" label="Select Date" type="date" onChange={handleDateChange} />
            <div className="mb-3">
              <label>Select Preferred Time Slot</label>
              <select className="form-select" name="timeSlot" id="timeSlot" onChange={handleTimeSlotChange}>
                <option value="11 AM to 12 PM">11 AM to 12 PM</option>
                <option value="1 PM to 2 PM">1 PM to 2 PM</option>
                <option value="3 PM to 4 PM">3 PM to 4 PM</option>
                <option value="5 PM to 6 PM">5 PM to 6 PM</option>
              </select>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <button
              className="btn btn-primary col-12 mt-2"
              onClick={handleSubmit}
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
