import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import portfolio from "../../data/portfolio.json";
import useWindowDimensions from "../Dimensions/Dimensions";

const Portfolio = () => {
  const { width } = useWindowDimensions();
  if (portfolio.lenght === 0) {
    return (
      <div className="container-fluid p-0">
        <div className="row g-0">
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
        <div className="col-12 col-lg-3">
          <Header />{" "}
        </div>
        <div
          className="col-12 col-lg-9 ps-0"
          style={
            width > 750
              ? { paddingLeft: "0px", paddingRight: "0px" }
              : { paddingLeft: "0px", paddingRight: "0px" }
          }
        >
          <div id="portfolio" className="portfolio section ">
            <div className="container section-title" data-aos="fade-up">
              <h2>Portfolio</h2>
              <p>
                This portfolio showcases a commitment to{" "}
                <b>Product-First Engineering</b>, delivering high-performance,
                end-to-end solutions across the{" "}
                <b>React, Next.js and React Native (Expo) ecosystems</b>. Each
                project is architected for extreme scalability, featuring
                complex state management (Redux/Context) and robust
                architectural design. A core focus of my recent work is{" "}
                <b>Agentic AI Orchestration</b>, integrating autonomous agents
                and <b>RAG pipelines (LangGraph/Node.js)</b> into
                production-ready environments. To ensure zero-regression and
                sub-second performance, I implement Automated DevOps Workflows
                via GitHub Actions. Every commit triggers a comprehensive{" "}
                <b>CI/CD pipeline</b>
                that automatically executes.
              </p>
              &nbsp;
              <p>
                I am committed to a{" "}
                <b>"Zero-Regression" engineering culture,</b> where performance
                and reliability are enforced through automated DevOps workflows.
                Every commit to my repositories triggers a comprehensive{" "}
                <b>CI/CD pipeline via GitHub Actions</b>, executing automated
                Performance Audits to maintain <b>100/100 Lighthouse scores</b>{" "}
                and running rigorous Quality Assurance suites—including {""}
                <b>Playwright</b> for <b>End-to-End (E2E)</b> testing and{" "}
                <b>Jest/React Testing Library (RTL)</b> for{" "}
                <b>Unit and Integration</b> tests. This automated architecture
                ensures that every deployment to <b>Vercel, AWS, or Render</b>{" "}
                is architecturally sound, sub-second in performance, and
                production-ready the moment it hits the branch.
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
                              <span>View Details</span>
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
