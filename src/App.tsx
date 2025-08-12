import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import "./index.css";
const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleJoinClick = () => {
    navigate("/Prompt");
  };
  return (
    <>
      <Navbar onJoinClick={handleJoinClick} />
    </>
  );
};
const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen border-b-8 border-l-8 border-r-8 border-green-400 sm:px-8 lg:px-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
