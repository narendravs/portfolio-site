import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import skills from "../../data/skills.json";
import useWindowDimensions from "../Dimensions/Dimensions";

const About = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <Header />
        </div>
        <div
          className="col-12 col-lg-9 ps-0"
          style={
            width > 750
              ? { paddingLeft: "0px", paddingRight: "0px" }
              : { paddingLeft: "px", paddingRight: "0px" }
          }
        >
          <section id="about" className="about section">
            <div className="container section-title" data-aos="fade-up">
              <h2>About</h2>
              <p className="mb-4">
                I am a{" "}
                <b>
                  Senior Full Stack & AI Engineer with 11+ years of experience
                </b>{" "}
                building enterprise-grade systems and high-performance
                web/mobile applications. I specialize in bridging the gap
                between{" "}
                <b>
                  complex Agentic AI orchestration and scalable product
                  delivery.
                </b>
              </p>

              <p>
                Throughout my career, I have evolved from a deep foundation in{" "}
                {""}
                <b>core enterprise Java/Spring Boot</b> systems to mastering the{" "}
                <b>modern MERN/Next.js ecosystem</b> and, most recently,
                engineering {""}
                <b>autonomous AI agents</b>.
              </p>

              {/* Moved soft skills into this section for flow */}
              <div>
                {/* Optimized Alignment for Key Strategic Strengths */}
                <div style={{ marginTop: "10px" }}>
                  <p style={{ fontWeight: "bold", marginBottom: "15px" }}>
                    Key Strategic Strengths:
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      paddingLeft: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "10px",
                      }}
                    >
                      <span>🤖</span>
                      <span>
                        <strong>AI Orchestration:</strong> Engineering{" "}
                        <b>RAG pipelines</b> and agentic workflows using{" "}
                        <b>LangGraph, LangChain</b>.
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "10px",
                      }}
                    >
                      <span>⚡</span>
                      <span>
                        <strong>Performance Engineering:</strong> Delivering
                        <b>100/100 Lighthouse scores</b> via automated{" "}
                        <b>CI/CD</b>. I have implemented{" "}
                        <b>GitHub Actions workflows</b> that trigger {""}
                        <b>Playwright (E2E)</b>, <b>Jest/RTL (Unit)</b>, and{" "}
                        <b>Lighthouse</b> audits on every commit to ensure{" "}
                        <b>zero-regression deployments</b>.
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "10px",
                      }}
                    >
                      <span>🏗️</span>
                      <span>
                        <strong>Full-Stack Architecture:</strong> Expert in {""}
                        <b>Node.js, React, Next.js and React Native (Expo)</b>,
                        with a deep background in <b>PostgreSQL</b> and{" "}
                        <b>MongoDB</b>.
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "10px",
                      }}
                    >
                      <span>☁️</span>
                      <span>
                        <strong>DevOps & Scalability:</strong> Implementing {""}
                        <b>Docker-based CI/CD workflows</b> and deploying across{" "}
                        <b>AWS, GCP, Vercel, and Render</b>.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-4">
                  <img
                    src="assets/img/designer.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-8 content">
                  <p>Following are the personal information.</p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Website:</strong>{" "}
                          <span>
                            <a
                              href="https://github.com/narendravs"
                              target="_blank"
                            >
                              https://github.com/naren
                            </a>
                          </span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Phone:</strong> <span>+91 6362 949 010</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>City:</strong> <span>Bangalore, Ind</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Degree:</strong> <span>Master</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Email:</strong>{" "}
                          <span>narendravs228@gmail.com</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Freelance:</strong> <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* */}
          {/* --- SPACING FIX APPLIED HERE --- */}
          <section
            id="skills"
            className="skills section light-background"
            style={{ paddingTop: "40px" }} // Adjust this value to control the gap
          >
            {/* */}
            <div className="container section-title " data-aos="fade-up">
              <h2>Skills</h2>
              <p>
                <b>Technical Skills & Architecture:</b> Leveraging over a decade
                of full-stack expertise, I architect highly available, secure,
                and performant systems. My approach integrates modern AI
                orchestration with battle-tested enterprise patterns to deliver
                scalable, production-grade applications.
              </p>
            </div>
            {/* */}

            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row skills-content skills-animation ">
                <div
                  className="col-lg-6"
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: "column",
                  }}
                >
                  <span style={{ fontWeight: "500" }}>
                    Front End & Middleware Skills
                  </span>

                  {skills.frontEnd.map((skill, i) => (
                    <div key={i}>
                      <div className="progress">
                        <span className="skill">
                          <span>{skill.language}</span>{" "}
                          <i className="val">{skill.percentage}%</i>
                        </span>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={skill.percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="col-lg-6"
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: "column",
                  }}
                >
                  <span style={{ fontWeight: "500" }}>AI/ML Skills</span>
                  <div className="bottom-10">
                    {skills["AI/ML"].map((skill, i) => (
                      <div key={i}>
                        <div className="progress">
                          <span className="skill">
                            <span>{skill.language}</span>{" "}
                            <i className="val">{skill.percentage}%</i>
                          </span>
                          <div className="progress-bar-wrap">
                            <div
                              className="progress-bar"
                              style={{ width: `${skill.percentage}%` }}
                              role="progressbar"
                              aria-valuenow={skill.percentage}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <span style={{ fontWeight: "500" }}>Back End Skills</span>
                  <div>
                    {skills.backEnd.map((skill, i) => (
                      <div key={i}>
                        <div className="progress">
                          <span className="skill">
                            <span>{skill.language}</span>{" "}
                            <i className="val">{skill.percentage}%</i>
                          </span>
                          <div className="progress-bar-wrap">
                            <div
                              className="progress-bar"
                              style={{ width: `${skill.percentage}%` }}
                              role="progressbar"
                              aria-valuenow={skill.percentage}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* */}
        </div>
      </div>
    </div>
  );
};

export default About;
