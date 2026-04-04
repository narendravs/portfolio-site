import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header";
import useWindowDimensions from "../Dimensions/Dimensions";
import servicesData from "../../data/services.json";

const ServiceDetails = () => {
  const { width } = useWindowDimensions();
  const { serviceId } = useParams();

  // Get content based on URL, fallback to web-mobile if ID is invalid
  const content = servicesData[serviceId] || servicesData["web-mobile"];

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar / Header */}
        <div className="col-12 col-lg-3">
          <Header />
        </div>

        {/* Main Content Area */}
        <div
          className="col-12 col-lg-9"
          style={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          <main className="main">
            <section id="service-details" className="service-details section">
              <div className="container">
                <div className="row gy-4">
                  {/* Left Column: Service Selection List */}
                  <div
                    className="col-lg-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="services-list">
                      {Object.keys(servicesData).map((key) => (
                        <Link
                          key={key}
                          to={`/Service-details/${key}`}
                          className={serviceId === key ? "active" : ""}
                        >
                          {servicesData[key].title}
                        </Link>
                      ))}
                    </div>

                    <div className="mt-4">
                      <h4>{content.title} Overview</h4>
                      <p className="description">{content.description}</p>
                    </div>
                  </div>

                  {/* Right Column: Detailed Content */}
                  <div className="col-lg-8">
                    <div data-aos="fade-down" data-aos-delay="200">
                      <img
                        src={content.image}
                        alt={content.title}
                        className="img-fluid services-img"
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          marginBottom: "20px",
                        }}
                      />
                      <h3>Core Development & Implementation</h3>
                      <p>{content.details}</p>
                    </div>

                    <ul
                      className="mt-4"
                      style={{ listStyle: "none", padding: 0 }}
                    >
                      {content.features.map((feature, index) => (
                        <li
                          key={index}
                          className="mb-3 d-flex align-items-center"
                        >
                          <i
                            className="bi bi-check-circle text-primary me-2"
                            style={{ fontSize: "1.2rem" }}
                          ></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="help-box d-flex flex-column justify-content-center align-items-center mt-5 p-4 bg-light">
                      <i
                        className="bi bi-headset help-icon"
                        style={{
                          fontSize: "2.5rem",
                          color: "var(--accent-color)",
                        }}
                      ></i>
                      <h4 className="mt-3">Need a Custom Solution?</h4>
                      <p className="text-center">
                        Contact me to discuss how we can implement these
                        technologies for your specific project needs.
                      </p>
                      <Link to="/Contact" className="btn btn-primary mt-2">
                        Get in Touch
                      </Link>
                    </div>
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
