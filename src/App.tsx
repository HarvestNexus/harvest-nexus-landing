import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";



const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleJoinClick = () => {
    navigate("/Prompt");
  };
  return (
    <>
      <Navbar onJoinClick={handleJoinClick} />
      <HeroSection />
      <FarmingInnovationSection />
      <AboutSection />
      <OurServices />
      <ContactForm />
      <Footer />
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
