import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLogin from "./components/Login/UserLogin";
import Navbar from "./components/Navbar/Navbar";
import UserRegistration from "./components/Register/UserRegistration";
import Scheduler from "./components/Scheduler";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserRegistration />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/scheduleinterview" element={<Scheduler />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
