import React, { useEffect, useState } from "react";
import axios from "axios";

function UserRequests() {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

  const fetchRequests = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setError("No auth token found, please log in.");
      return;
    }

    const APIURL = `${import.meta.env.VITE_API_URL}/interview-requests`;
    try {
      console.log("Auth Token:", token);
      const response = await axios.get(APIURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRequests(response.data);
    } catch (error) {
      console.error("Error fetching interview requests:", error);
      setError("Error fetching interview requests!");
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleWithdrawRequest = async (requestId) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setError("No auth token found, please log in.");
      return;
    }

    const APIURL = `${import.meta.env.VITE_API_URL}/interview-requests/${requestId}/withdraw`;
    try {
      console.log("Auth Token:", token);
      await axios.delete(APIURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // If withdrawal is successful, refetch the interview requests
      fetchRequests();
    } catch (error) {
      console.error("Error withdrawing interview request:", error);
      setError("Error withdrawing interview request!");
    }
  };

  if (error) {
    return <div className="mx-4">{error}</div>;
  }

  return (
    <div className="mx-4">
      Scheduled Interview Details
      <div className="container-fluid row">
        {requests.map((request) => (
          <div className="card col-12 col-lg-2 p-2 m-2" key={request._id}>
            <p>
              Date: <span>{new Date(request.date).toLocaleDateString()}</span>
            </p>
            <p>
              Time Slot: <span>{request.timeslot}</span>
            </p>
            <p>
              Status: <span>{request.status ? "Approved" : "Pending Approval"}</span>
            </p>
            <button className="btn btn-warning col-12" onClick={() => handleWithdrawRequest(request._id)}>Withdraw Request</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserRequests;
