import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLogin from "./components/Login/UserLogin";
import Navbar from "./components/Navbar/Navbar";
import UserRegistration from "./components/Register/UserRegistration";
import Scheduler from "./components/User/Scheduler";
import UserRequests from "./components/User/UserRequests";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserRegistration />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/schedule-interview" element={<Scheduler />} />
          <Route path="/user-requests" element={<UserRequests/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
