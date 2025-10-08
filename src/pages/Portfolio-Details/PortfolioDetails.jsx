import React from "react";
import Header from "../../components/Header";
import useWindowDimensions from "../Dimensions/Dimensions";
import { Link } from "react-router-dom";
import projDetails from "../../data/portfolio-proj-details";
import { useParams } from "react-router-dom";

const PortfolioDetails = () => {
  const { projectId } = useParams();

  const project = projDetails.find((p) => p.projectId === projectId);

  if (!project) {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <Header />{" "}
          </div>
          <div
            class="col-6"
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

  const { width } = useWindowDimensions();
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
        <div
          className="col-9"
          style={
            width > 750
              ? {
                  display: "flex",
                  width: "1060px",
                  marginLeft: "185px",
                }
              : { width: "100%" }
          }
        >
          <main className="main">
            <div className="page-title dark-background">
              <div className="container d-lg-flex justify-content-between align-items-center">
                <h1 className="mb-2 mb-lg-0">Portfolio Details</h1>
                <nav className="breadcrumbs">
                  <ol>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="current">Portfolio Details</li>
                  </ol>
                </nav>
              </div>
            </div>

            <div id="portfolio-details" className="portfolio-details section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-7">
                    <div
                      className="portfolio-info"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{ marginLeft: "-10px" }}
                    >
                      <h3>Project information</h3>
                      <ul>
                        <li
                          style={{
                            width: "100%",
                            backgroundColor: "white",
                            color: "black",
                            fontStyle: "vardan",
                          }}
                        >
                          <strong>Category </strong> : {project.category}
                        </li>

                        <li>
                          <strong>Project URL</strong>:{" "}
                          <a
                            href={project.gitUrl}
                            target="_blank"
                            style={{ color: "blue", fontWeight: "500" }}
                          >
                            {project.tmpUrl}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="portfolio-description"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <h2>Project Description</h2>
                      <p
                        style={{
                          width: "100%",
                          backgroundColor: "white",
                          color: "black",
                          fontStyle: "vardan",
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="swiper-slide">
                      <img src={project.image} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div className="portfolio-description">
                  <div>
                    <h2>
                      Technical skills used to Implement this Application :{" "}
                    </h2>
                  </div>
                  {project.skills.map((skill, index) => (
                    <div
                      style={{
                        color: "black",
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                        marginBottom: "10px",
                      }}
                      key={index}
                    >
                      <span className="bi bi-check-circle" />
                      <span>{skill}</span>
                    </div>
                  ))}

                  <div>
                    <h2>Project Experience : </h2>

                    {project.features.map((feature, index) => (
                      <div
                        style={{
                          color: "black",
                          backgroundColor: "white",
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                          marginTop: "10px",
                        }}
                        key={index}
                      >
                        <span className="bi bi-check-circle" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
