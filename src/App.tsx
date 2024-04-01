import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liked" element={<Liked />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
