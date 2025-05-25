import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(false);
  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <div
        className="header-toggle d-xl-none bi bi-list"
        onClick={() => {
          setSelect(!select);
        }}
      >
        {select && (
          <div>
            <div
              onClick={() => {
                setSelect(false);
              }}
              className="menu"
            >
              <span className="span">
                <Link to="/">Home</Link>
              </span>
              <span className="span">
                <Link to="/about">About</Link>
              </span>
              <span className="span">
                <Link to="/services">Services</Link>
              </span>
              <span className="span">
                <Link to="/portfolio">Portfolio</Link>
              </span>
              <span className="span">
                <Link to="/resume">Resume</Link>
              </span>
              <span className="span">
                <Link to="/contact">Contact</Link>
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="profile-img">
        <img
          src="../assets/img/Photo.jpg"
          alt=""
          className="img-fluid rounded-circle"
        />
      </div>

      <a
        href="/index.html"
        className="logo d-flex align-items-center justify-content-center"
      >
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
        {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
        <h1 className="sitename">Narendra</h1>
      </a>

      <div className="social-links text-center">
        <a href="#" className="twitter">
          <i className="bi bi-twitter-x"></i>
        </a>
        <a href="#" className="facebook">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" className="instagram">
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://github.com/narendravs"
          className="github"
          target="_blank"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/narendra-narendra-792546147/"
          className="linkedin"
          target="_blank"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a
              href="/home"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <i className="bi bi-house navicon"></i>Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                navigate("/about");
              }}
            >
              <i className="bi bi-person navicon"></i> About
            </a>
          </li>
          <li>
            <a
              href="/resume"
              onClick={(e) => {
                e.preventDefault();
                navigate("/resume");
              }}
            >
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              onClick={(e) => {
                e.preventDefault();
                navigate("/portfolio");
              }}
            >
              <i className="bi bi-images navicon"></i> Portfolio
            </a>
          </li>
          <li>
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                navigate("/services");
              }}
            >
              <i className="bi bi-hdd-stack navicon"></i> Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate("/contact");
              }}
            >
              <i className="bi bi-envelope navicon"></i> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
