import React from "react";
import Header from "../../components/Header";
import resume from "../../data/resume.json";
import useWindowDimensions from "../Dimensions/Dimensions";
const Resume = () => {
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
              ? {
                  display: "flex",
                  justifyContent: "",
                  alignItems: "center",
                  width: "1040px",
                  marginLeft: "200px",
                }
              : { width: "100%" }
          }
        >
          {/* <!-- Resume Section --> */}
          <section id="resume" className="resume section">
            {/* <!-- Section Title --> */}
            <div className="container section-title" data-aos="fade-up">
              <div>
                <h2>Resume</h2>
                <p>
                  I am a Fullstack developer, over all having 10 years of IT
                  experience, among them having 3+ years of experience in web
                  developement by implementing applications using React js, Next
                  js, React Native,Javascript, Typescript, Node js, Express js,
                  Redux,Tailwind, Mongo db, graphql, Prisma, aws amplify,
                  firebase etc.. Keeping up-to-date with the latest trends and
                  best practices in the React ecosystem.
                </p>
              </div>
              {/* <!-- End Section Title --> */}

              <div className="container">
                <div className="row">
                  <div>
                    <h3 className="resume-title">Sumary</h3>
                    <div className="resume-item pb-0">
                      <h4>Narendra</h4>
                      <p>
                        Building and maintaining complex and interactive user
                        interfaces using React.js and its core
                        principles.Effectively utilizing state management
                        libraries like Redux or the Context API to manage
                        application data flow.Designing and implementing
                        reusable and well-structured React components.Strong
                        grasp of JavaScript (ES6+), HTML, and CSS, including
                        responsive design principles.Seamlessly integrating
                        front-end applications with RESTful APIs and handling
                        asynchronous operations.Writing unit, integration, and
                        potentially end-to-end tests using tools like Jest and
                        React Testing Library to ensure code quality.Identifying
                        and resolving front-end related bugs and performance
                        issues.Working effectively within a team, participating
                        in code reviews, and communicating technical concepts
                        clearly.Familiarity with Agile methodologies and using
                        tools like Git for version control.Keeping up-to-date
                        with the latest trends and best practices in the React
                        ecosystem.
                      </p>
                      <ul style={{ marginTop: "10px" }}>
                        <li>Bangalore,Hsr Layout, Ind</li>
                        <li>(+91) 9739 252 306</li>
                        <li>narendravs228@gmail.com</li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="resume-title">Professional Experience</h3>
                  <div
                    className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="resume-item">
                      <h4>Schneider electric &amp; Fullstack developer</h4>

                      <p>
                        <em>Bangalore, Ind</em>
                      </p>
                      <ul>
                        <li>
                          Independently troubleshooting complex issues,
                          contributing to architectural decisions, and
                          potentially mentoring junior developers.
                        </li>
                        <li>
                          Building complex UIs with React, utilizing state
                          management solutions (like Redux or Context API),
                          routing, and UI libraries.
                        </li>
                        <li>
                          Proficiency in backend language and framework
                          (Node.js/Express, Java/Spring Boot), including
                          database design and interaction (SQL or NoSQL).
                        </li>
                        <li>
                          Designing and implementing RESTful or GraphQL APIs and
                          seamlessly integrating them with the React front-end.
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Edn Resume Item --> */}

                    <div className="resume-item">
                      <h4>Capgemini India Pvt Ltd &amp; Consultant</h4>
                      {/* <h5>2010 - 2014</h5> */}
                      <p>
                        <em>Bangalore, Ind</em>
                      </p>

                      <ul>
                        <li>
                          Seamlessly integrating front-end applications with
                          RESTful APIs and handling asynchronous operations.
                        </li>
                        <li>
                          Identifying and resolving front-end related bugs and
                          performance issues.
                        </li>
                        <li>
                          Working effectively within a team, participating in
                          code reviews, and communicating technical concepts
                          clearly.
                        </li>
                        <li>
                          Familiarity with Agile methodologies and using tools
                          like Git for version control.
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Edn Resume Item --> */}
                  </div>
                  <div
                    className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {/* <h3 className="resume-title">Professional Experience</h3> */}
                    <div className="resume-item">
                      <h4>Accenture Services India Pvt Ltd</h4>
                      {/* <h5>2019 - Present</h5> */}
                      <p>
                        <em>Bangalore, Ind </em>
                      </p>
                      <ul>
                        <li>
                          Building and maintaining complex and interactive user
                          interfaces using React.js and its core principles.
                        </li>
                        <li>
                          Effectively utilizing state management libraries like
                          Redux or the Context API to manage application data
                          flow.
                        </li>
                        <li>
                          Designing and implementing reusable and
                          well-structured React components.
                        </li>
                        <li>
                          Strong grasp of JavaScript (ES6+), HTML, and CSS,
                          including responsive design principles.
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Edn Resume Item --> */}

                    <div className="resume-item">
                      <h4>Technologia Software Solutions Pvt Ltd</h4>
                      {/* <h5>2017 - 2018</h5> */}
                      <p>
                        <em>Bangalore, Ind</em>
                      </p>
                      <ul>
                        <li>
                          Independently troubleshooting complex issues,
                          contributing to architectural decisions, and
                          potentially mentoring junior developers.
                        </li>
                        <li>
                          Building complex UIs with React, utilizing state
                          management solutions (like Redux or Context API),
                          routing, and UI libraries.
                        </li>
                        <li>
                          Proficiency in backend language and framework
                          (Node.js/Express, Java/Spring Boot), including
                          database design and interaction (SQL or NoSQL).
                        </li>
                        <li>
                          Designing and implementing RESTful or GraphQL APIs and
                          seamlessly integrating them with the React front-end.
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Edn Resume Item --> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- /Resume Section --> */}
        </div>
      </div>
    </div>
  );
};

export default Resume;
