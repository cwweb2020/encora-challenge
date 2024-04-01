import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Footer from "./components/Footer";
import "./styles.css";
import ContentProvider from "./context/ContentProvider";

const App = () => {
  return (
    <Router>
      <ContentProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liked" element={<Liked />} />
        </Routes>
        <Footer />
      </ContentProvider>
    </Router>
  );
};

export default App;
