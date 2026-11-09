import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import ResumePage from "./pages/ResumePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import PublicationDetailPage from "./pages/PublicationDetailPage";
import MoreInfo from "./components/MoreInfo/MoreInfo";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {/* Skip to Content Accessibility Anchor */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-400 focus:text-zinc-950 focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <ScrollToTop />
        <main id="main-content" className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/projects" element={<Navigate to="/#projects" replace />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/research/:slug" element={<PublicationDetailPage />} />
            <Route path="/publications" element={<Navigate to="/#research" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/more-info" element={<MoreInfo />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
