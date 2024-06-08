import React from "react";

function UserRequests() {
  return (
    <div className="mx-4">
      Scheduled Interview Details
      <div className="container-fluid row">
        <div className="card col-12 col-lg-2 p-2 m-2">
          <p>
            Date : <span>30-Jun-2024</span>
          </p>
          <p>
            Time Slot : <span>11 AM to 12 PM</span>
          </p>
          <p>
            Status : <span>Pending Approval</span>
          </p>
          <button className="btn btn-warning col-12">Cancel Request</button>
        </div>
      </div>
    </div>
  );
}

export default UserRequests;
