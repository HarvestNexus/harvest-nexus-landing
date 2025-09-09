import React from "react";

import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import "./index.css";
import Footer from './components/Footer';

import Prompt from "./components/prompt";



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
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Prompt" element={<><Navbar onJoinClick={() => {}} /><Prompt /></>} />
        </Routes>
      </div>

    </Router>
  );
};

export default App;
