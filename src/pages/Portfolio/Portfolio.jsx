import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import portfolio from "../../data/portfolio.json";

const Portfolio = () => {
  if (portfolio.lenght === 0) {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Header />{" "}
          </div>
          <div
            className="col-6"
            style={{
              dispplay: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "250px",
              height: "300px",
            }}
          >
            No Portfolio projects Found.
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Header />{" "}
        </div>
        <div className="col-9" style={{ marginRight: "30px" }}>
          <div id="portfolio" className="portfolio section light-background">
            <div className="container section-title" data-aos="fade-up">
              <h2>Portfolio</h2>
              <p>
                This portfolio demonstrates the ability to deliver end-to-end,
                cross-platform solutions, ranging from high-performance web
                applications built with React/Next.js to native mobile
                experiences using React Native (Expo). Each project showcases
                expertise in architectural design, including efficient state
                management (Redux/Context API), API integration, and the
                development of reusable, well-structured components for robust
                and scalable systems. My recent work includes implementing
                AI/LLM-powered features for enhanced functionality.
              </p>
            </div>

            <div className="container">
              <div
                className="isotope-layout"
                data-default-filter="*"
                data-layout="masonry"
                data-sort="original-order"
              >
                <ul
                  className="portfolio-filters isotope-filters"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <li data-filter=".filter-app">Portfolio Projects</li>
                </ul>

                <div
                  className="row gy-4 isotope-container"
                  data-aos=""
                  data-aos-delay="200"
                >
                  {portfolio.map((project, ind) => {
                    return (
                      <div
                        className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app"
                        key={ind}
                      >
                        <div
                          className="portfolio-content h-150"
                          title="More Details"
                        >
                          <img
                            style={{
                              width: "430px",
                              height: "250px",
                              objectFit: "cover",
                            }}
                            src={project.image}
                            className="img-fluid"
                            alt=""
                          />
                          <div className="portfolio-info">
                            <h4>{project.name}</h4>

                            <Link
                              to={`/Portfolio-details/${project.name}`}
                              title="More Details"
                              className=""
                            >
                              {" "}
                              <p>{project.description}</p>
                            </Link>

                            <Link
                              to={`/Portfolio-details/${project.name}`}
                              title="More Details"
                              className="button"
                            >
                              <spna>View Details</spna>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
