import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* placeholders for now */}
        <Route path="/dashboard" element={<h1 className="p-6">Dashboard Page</h1>} />
        <Route path="/login" element={<h1 className="p-6">Login Page</h1>} />
        <Route path="/signup" element={<h1 className="p-6">Signup Page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
