import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import skills from "../../data/skills.json";
import useWindowDimensions from "../Dimensions/Dimensions";

const About = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
        <div
          className="col-10"
          style={
            width > 750
              ? { width: "1040px", marginLeft: "200px" }
              : { width: "100%" }
          }
        >
          <section id="about" className="about section">
            <div className="container section-title " data-aos="fade-up">
              <h2>About</h2>
              <p>
                I am a Seasoned Full-Stack Architect with 10+ years of
                enterprise IT experience, including 3+ years dedicated to
                building complex, scalable applications within the React,
                Next.js, and React Native Ecosystems. My core value lies in
                delivering end-to-end solutions, from responsive UIs and robust
                backend APIs to secure cloud deployment.{" "}
              </p>
              &nbsp;
              <p>
                Pioneering AI/LLM Integration: My recent work focuses on
                implementing cutting-edge, intelligent systems using OpenAI and
                LangChain. I specialize in developing dynamic, vector-search
                chatbots by leveraging Hugging Face embeddings and Pinecone, and
                creating complex, multi-step AI Agents for process automation.
              </p>
              &nbsp;
              {/* Moved soft skills into this section for flow */}
              <p>
                Committed to writing clean, efficient, and well-tested code
                while operating within Agile/Scrum methodologies. I am a
                dedicated team player, dependable, and willing to go the extra
                mile to ensure project success.
              </p>
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
                Technology Stack & Architecture: Leveraging my full-stack
                expertise, I design and build highly available, secure, and
                performant applications using the following core technologies.
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
