import { useEffect } from "react";
import "./App.css";
//import Index from "./pages/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Serivces from "./pages/Services/Serivces";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import ServiceDetails from "./pages/Service-Details/ServiceDetails";
import PortfolioDetails from "./pages/Portfolio-Details/PortfolioDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/About"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/Skills"
          element={
            <Layout>
              <Skills />
            </Layout>
          }
        />
        <Route
          path="/Resume"
          element={
            <Layout>
              <Resume />
            </Layout>
          }
        />
        <Route
          path="/Portfolio"
          element={
            <Layout>
              <Portfolio />
            </Layout>
          }
        />
        <Route
          path="/Services"
          element={
            <Layout>
              <Serivces />
            </Layout>
          }
        />
        <Route
          path="/Contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/Service-details"
          element={
            <Layout>
              <ServiceDetails />
            </Layout>
          }
        />
        <Route
          path="/Portfolio-details/:projectId"
          element={
            <Layout>
              <PortfolioDetails />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
