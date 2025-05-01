import React, { useState } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
const ServiceDetails = () => {
  const [react, setReact] = useState(false);
  const [next, setNext] = useState(false);
  const [native, setNative] = useState(false);
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <Header />
        </div>
        <div class="col-9" style={{ width: "1060px", marginLeft: "180px" }}>
          <main class="main">
            <div class="page-title dark-background">
              <div class="container d-lg-flex justify-content-between align-items-center">
                <h1 class="mb-2 mb-lg-0">Service Details</h1>
                <nav class="breadcrumbs">
                  <ol>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li class="current">Service Details</li>
                  </ol>
                </nav>
              </div>
            </div>

            <section id="service-details" class="service-details section">
              <div class="container">
                <div class="row gy-4">
                  <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="services-list">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setNative(false);
                          setNext(false);
                          setReact(!react);
                        }}
                      >
                        React Development
                      </a>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setReact(false);
                          setNative(false);
                          setNext(!next);
                        }}
                      >
                        Next Development
                      </a>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setReact(false);
                          setNext(false);
                          setNative(!native);
                        }}
                      >
                        React-Native Development
                      </a>
                      {/*  <a href="#">Graphic Design</a>
                      <a href="#">Marketing</a> */}
                    </div>

                    {react && (
                      <p>
                        <h4>Core React Development Services</h4>
                        Building and Maintaining User Interfaces (UIs) with
                        <span style={{ fontWeight: "500" }}>
                          {" "}
                          React.js
                        </span>{" "}
                        Developing Reusable React Components, State Management
                        Implementation, Front-End Routing Implementation, API
                        Integration, Performance Optimization, Unit and
                        Integration Testing, Responsive Design Implementation,{" "}
                        Cross-Browser Compatibility, Code Review and Best
                        Practices etc..
                      </p>
                    )}
                    {next && (
                      <p>
                        <h4>Core Next Development Services</h4>
                        Building and Maintaining User Interfaces (UIs) with
                        <span style={{ fontWeight: "500" }}> Next.js</span>{" "}
                        Developing Reusable Next Components, State Management
                        Implementation, Front-End Routing Implementation, API
                        Integration, Performance Optimization, Unit and
                        Integration Testing, Responsive Design Implementation,{" "}
                        Cross-Browser Compatibility, Code Review and Best
                        Practices etc..
                      </p>
                    )}
                    {native && (
                      <p>
                        <h4>Core React-Native Development Services</h4>
                        Building and Maintaining User Interfaces (UIs) with
                        <span style={{ fontWeight: "500" }}>
                          {" "}
                          React-Native,
                        </span>{" "}
                        Developing Reusable React-Native Components, State
                        Management Implementation, Front-End Routing
                        Implementation, API Integration, Performance
                        Optimization, Unit and Integration Testing, Responsive
                        Design Implementation, Cross-Browser Compatibility, Code
                        Review and Best Practices etc..
                      </p>
                    )}
                  </div>

                  <div class="col-lg-8">
                    <div data-aos="fade-down" data-aos-delay="200">
                      <img
                        src="assets/img/santillan.jpg"
                        alt=""
                        class="img-fluid services-img"
                      />
                      <h3>Core Development & Implementation</h3>
                      <p>
                        Building and maintaining complex user interfaces (UIs)
                        using{" "}
                        <span style={{ fontWeight: "500" }}>
                          React.js Next.js Reeact-Native
                        </span>{" "}
                        and related technologies. This includes creating
                        reusable components, managing component state, and
                        ensuring a consistent user experience. Writing clean,
                        efficient, and well-documented JavaScript, HTML, and CSS
                        code. Following best practices and coding standards.
                        Implementing responsive designs and ensuring
                        cross-browser compatibility. UIs will adapt seamlessly
                        to different screen sizes and browsers.
                      </p>
                    </div>
                    <ul>
                      <li>
                        <i class="bi bi-check-circle"></i>{" "}
                        <span>Authentication & Authorization.</span>
                      </li>
                      <li>
                        <i class="bi bi-check-circle"></i>{" "}
                        <span>
                          State management with redux or the Context API.
                        </span>
                      </li>
                      <li>
                        <i class="bi bi-check-circle"></i>{" "}
                        <span>Responsive design principles</span>
                      </li>
                      <li>
                        <i class="bi bi-check-circle"></i>{" "}
                        <span>Performance optimization</span>
                      </li>
                    </ul>
                    <p>
                      Integrating front-end applications with RESTful APIs and
                      other backend services. This involves fetching and
                      displaying data, handling user interactions that trigger
                      API calls, and managing data flow. Optimizing application
                      performance for speed and scalability.
                    </p>
                    <p>
                      Writing unit, integration, and potentially end-to-end
                      tests to ensure code quality and reliability. Understand
                      the importance of testing and can write effective tests
                      using tools like Jest and React Testing Library. Debugging
                      and troubleshooting issues across the front-end
                      application. Identify and resolve bugs efficiently.
                      Participating in code reviews to provide and provide
                      constructive feedback. Understand the value of peer review
                      in improving code quality. Staying up-to-date with the
                      latest trends and best practices in front-end development
                      and the React ecosystem. Actively learn and adapt to new
                      technologies and approaches.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
