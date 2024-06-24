import React, { useEffect, useState } from "react";
import axios from "axios";

function UserRequests() {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const fetchRequests = async () => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      setError("No auth token found, please log in.");
      return;
    }

    const APIURL = `${import.meta.env.VITE_API_URL}/interview-requests`;
    try {
      const response = await axios.get(APIURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRequests(response.data.interviewRequests || []); // Ensure it's an array
      setIsAdmin(response.data.isAdmin === "admin");
    } catch (error) {
      console.error("Error fetching interview requests:", error);
      setError("Error fetching interview requests!");
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleWithdrawRequest = async (requestId) => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      setError("No auth token found, please log in.");
      return;
    }

    const APIURL = `${
      import.meta.env.VITE_API_URL
    }/interview-requests/${requestId}/withdraw`;
    try {
      await axios.delete(APIURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchRequests();
    } catch (error) {
      console.error("Error withdrawing interview request:", error);
      setError("Error withdrawing interview request!");
    }
  };

  const handleApproveRequest = async (requestId) => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      setError("No auth token found, please log in.");
      return;
    }

    const APIURL = `${
      import.meta.env.VITE_API_URL
    }/interview-requests/${requestId}/approve`;
    try {
      await axios.post(
        APIURL,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchRequests();
    } catch (error) {
      console.error("Error approving interview request:", error);
      setError("Error approving interview request!");
    }
  };

  if (error) {
    return <div className="mx-4">{error}</div>;
  }

  return (
    <div className="mx-4">
      Scheduled Interview Details
      <div className="container-fluid row">
        {requests.length > 0 ? (
          requests.map((request) => (
            <div className="card col-12 col-lg-2 p-2 m-2" key={request._id}>
              {request.userId && (
                <div>
                  <p>
                    Name: <span>{request.userId.name}</span>
                  </p>
                  <p>
                    Email: <span>{request.userId.email}</span>
                  </p>
                </div>
              )}
              <p>
                Date: <span>{new Date(request.date).toLocaleDateString()}</span>
              </p>
              <p>
                Time Slot: <span>{request.timeslot}</span>
              </p>
              <p>
                Status:{" "}
                <span>{request.status ? "Approved" : "Pending Approval"}</span>
              </p>
              {!isAdmin && ( // Hide the Withdraw button if isAdmin is true
                <button
                  className="btn btn-warning col-12"
                  onClick={() => handleWithdrawRequest(request._id)}
                >
                  Withdraw Request
                </button>
              )}
              {isAdmin && (
                <>
                  <button
                    className="btn btn-success col-12 mt-2"
                    onClick={() => handleApproveRequest(request._id)}
                    disabled={request.status}
                  >
                    Approve Request
                  </button>
                  <button
                    className="btn btn-danger col-12 mt-2"
                    onClick={() => handleWithdrawRequest(request._id)}
                  >
                    Reject Request
                  </button>
                </>
              )}
            </div>
          ))
        ) : (
          <div>No interview requests found.</div>
        )}
      </div>
    </div>
  );
}

export default UserRequests;
