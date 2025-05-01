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
                Following are the portfolio projects build and maintain some
                complex and interactive user interfaces using React.js Next.js
                React-Native and its core principles. Effectively utilizing
                state management libraries like Redux or the Context API to
                manage application data flow. Designing and implementing
                reusable and well-structured React components. Seamlessly
                integrating front-end applications with APIs and handling
                asynchronous operations.
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
                        <div className="portfolio-content h-100">
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
                              className="details-link"
                            >
                              <i className="bi bi-link-45deg"></i>
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
