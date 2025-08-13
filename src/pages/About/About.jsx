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
                Having overall 10+ years into IT and having 3+ years of
                experience in implementing web applications by using{" "}
                <span style={{ fontWeight: "700" }}>
                  {" "}
                  React js, Nextjs, React Native,Javascript, Typescript,
                  Tailwind, Node js, Express js, Redux,Tanskstank
                  Query/React-Query,JWT, Auth0,Clerk, Shadcn,Material/Chakra UI,
                  Mongo db, graphql , Prisma, aws amplify, firebase etc..
                </span>
                <span style={{ fontWeight: "700", color: "blue" }}>
                  {" "}
                  Latestly using and exploring modern AI libraries OpenAI
                  LangChain LangGraph. 1.Implemented Chatbot with documents
                  either pdf or text. 2.Converted data bases of the applications
                  into vector search using hugging face embeddings and pincone
                  vector data base, with the chatbot prompt you can chat with
                  your data base.{" "}
                </span>
                , As a '3+ year React developer,' I possess a strong
                understanding of the React ecosystem and can proficiently build
                complex and interactive user interfaces. I'm adept at utilizing
                component-based architecture, managing application state
                effectively with tools like Redux and the Context API, and
                integrating seamlessly with backend APIs. I have a solid grasp
                of JavaScript (ES6+), HTML, and CSS, and I prioritize writing
                clean, efficient, and well-tested code using libraries like Jest
                and React Testing Library. I'm comfortable with debugging and
                troubleshooting front-end issues and collaborating effectively
                within a team, participating in code reviews and contributing to
                technical discussions. I'm also committed to staying up-to-date
                with the latest React best practices and exploring new
                advancements in the front-end landscape.
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
                  <h2> Fullstack web &amp; mobile app developer.</h2>
                  <p className="fst-italic py-3">
                    Deployed applications on cloud using the aws-ec2, google
                    cloud, vercel, heroku. Good experience in developing web
                    based business applications using various Java-script
                    libraries (react-router-dom,Redux,
                    Context-api,tankstank-query, react-hook-form…etc). Involved
                    in Coding, Documentation, Deploying and maintaining the
                    applications. Excellent commitment, dedication and planning
                    towards goal oriented tasks. Good team player with excellent
                    work history as regards with work ethics, dependability and
                    Willingness to go an extra mile.
                  </p>
                  <p>Following are the personal information...</p>
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
          {/* <!-- /About Section --> */}
          <section id="skills" className="skills section light-background">
            {/* <!-- Section Title --> */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Skills</h2>
              <p>
                As a Fullstack developer i was being expertise with the follwing
                tect stack and have been experienced in building scalable,
                secure and reliable web applications using various frameworks
                and technologies.
              </p>
            </div>
            {/* <!-- End Section Title --> */}

            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row skills-content skills-animation">
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
          {/* <!-- /Skills Section --> */}
        </div>
      </div>
    </div>
  );
};

export default About;
