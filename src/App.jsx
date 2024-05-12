import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLogin from "./components/Login/UserLogin";
import Navbar from "./components/Navbar/Navbar";
import UserRegistration from "./components/Register/UserRegistration";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserRegistration />} />
          <Route path="/login" element={<UserLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
