import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLogin from "./components/Login/UserLogin";
import Navbar from "./components/Navbar/Navbar";
import UserRegistration from "./components/Register/UserRegistration";
import Scheduler from "./components/User/Scheduler";
import UserRequests from "./components/User/UserRequests";
import ProtectedRoute from "./components/Navigation/ProtectedRoute";
import LoginForm from "./components/Login/LoginForm";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/schedule-interview" element={<Scheduler />} />
            <Route path="/user-requests" element={<UserRequests />} />
          </Route>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/mockLogin" element={<LoginForm />} />
          <Route path="/" element={<UserRegistration />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
