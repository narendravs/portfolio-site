import React from "react";
import Header from "../../components/Header";
import resume from "../../data/resume.json";
import useWindowDimensions from "../Dimensions/Dimensions";
const Resume = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-lg-3">
          <Header />
        </div>
        <div
          className="col-12 col-lg-9"
          style={
            width > 750
              ? { paddingLeft: "0px", paddingRight: "0px" }
              : { paddingLeft: "0px", paddingRight: "0px" }
          }
        >
          {/* <!-- Resume Section --> */}
          <section id="resume" className="resume section">
            {/* <!-- Section Title --> */}
            <div className="container section-title">
              <div>
                <div className="d-flex gap-3 justify-content-between align-items-center pb-1 mb-4 border-2 border-bottom border-primary text-dark">
                  <h2>Resume</h2>
                  <ul className="list-unstyled">
                    <li>Location: Bangalore, India</li>
                    <li>Email: narendravs228@gmail.com</li>
                    <li>
                      github:{" "}
                      <a href="https://github.com/narendravs">
                        https://github.com/narendravs
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2">
                    {" "}
                    I am a{" "}
                    <b>
                      Senior Full Stack & AI Engineer with 11+ years of
                      experience
                    </b>{" "}
                    architecting <b>enterprise-grade</b> systems and
                    high-performance web/mobile applications. I specialize in
                    bridging the gap between{" "}
                    <b>
                      complex Agentic AI orchestration and scalable,
                      production-ready product delivery.
                    </b>
                  </p>

                  <p>
                    {" "}
                    Throughout my career, I have successfully evolved from a
                    foundational 7-year background in{" "}
                    <b>core enterprise Java/Spring Boot systems</b> to mastering
                    the <b>modern MERN/Next.js ecosystem</b> and, most recently,
                    engineering {""}
                    <b>autonomous AI agents (LangGraph/NodeJs)</b>. I don’t just
                    write code; I focus on <b>"Product-First" engineering</b>
                    —ensuring that complex AI logic, sub-second performance, and
                    robust system design work in perfect harmony.
                  </p>
                </div>
              </div>
              {/* <!-- End Section Title --> */}

              <div className="container">
                <div>
                  <h3 className="resume-title">Sumary</h3>
                  <div className="resume-item pb-0">
                    <div>
                      <p className="mb-2">
                        <span className="fw-bold">
                          Agentic AI & LLM Orchestration:
                        </span>
                        Expert in engineering <b>autonomous AI workflows</b> and{" "}
                        <b>RAG pipelines</b> using <b>LangGraph, LangChain</b>.
                        Proven track record in implementing{" "}
                        <b>vector-search systems</b> using
                        <b>Pinecone</b> and <b>Hugging Face embeddings</b> for
                        complex document and database querying.
                      </p>
                      <p className="mb-2">
                        <span className="fw-bold">
                          Modern Full-Stack Leadership (4+ Yrs):
                        </span>
                        Deep expertise in building{" "}
                        <b>scalable, production-grade applications</b> within
                        the <b>React and Next.js ecosystem</b>. Focused on{" "}
                        <b>Performance Engineering (100/100 Lighthouse) {""}</b>
                        and robust quality assurance. I have engineered {""}
                        <b>automated CI/CD workflows using GitHub Actions</b> to
                        trigger{" "}
                        <b>
                          Playwright (E2E), Jest/RTL (Unit/Integration), and
                          Lighthouse
                        </b>{" "}
                        audits on every commit, ensuring {""}
                        <b>zero-regression deployments</b> and sub-second
                        performance. Expert in cross-platform mobile development
                        using React Native (Expo).
                      </p>
                      <p className="mb-2">
                        <span className="fw-bold">
                          {" "}
                          DevOps & Product-First Mindset:
                        </span>
                        Proficient in <b>Docker-based CI/CD</b> and cloud
                        deployment across <b>AWS, GCP, Vercel, and Render</b>.
                        Committed to <b>Agile excellence</b>, sub-second
                        performance, and bridging the gap between complex AI
                        logic and intuitive user experiences.
                      </p>
                      <p>
                        <span className="fw-bold">
                          Enterprise Foundation (7+ Yrs):
                        </span>
                        Solid architectural background in large-scale{" "}
                        <b>Java/J2EE (Spring Boot, Hibernate)</b> systems across
                        Automobile, E-commerce, and Telecom domains. Expert in{" "}
                        <b>SQL optimization (Oracle/PostgreSQL)</b> and
                        enterprise middleware <b>(WebLogic)</b>.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h3 className="resume-title">Professional Experience</h3>
                  <div
                    className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="resume-item">
                      <h4>
                        I. ntechstack &nbsp;
                        <em style={{ fontSize: "15px" }}>
                          (Independent Technology Consulting & Development)
                        </em>
                        &nbsp; - CTO & Principal Consultant.
                      </h4>

                      <p>
                        <em>Jan-2022 - Present</em> |&nbsp;
                        <em>Bangalore, Ind</em>
                      </p>
                      <ul>
                        <li>
                          Designed and implemented LLM-powered conversational
                          interfaces (Chatbots) enabling users to interact
                          directly with internal documents and database content.
                        </li>
                        <li>
                          Developed complex AI Agent workflows that automate
                          multi-step processes, such as enabling users to book
                          appointments through a single prompt (prompt-driven
                          automation).
                        </li>
                        <li>
                          Integrated Stripe payment gateway functionality into
                          the application to securely process ticket bookings.
                        </li>
                        <li>
                          Developed and optimized responsive user interfaces
                          (UIs) and modular components using React and its
                          ecosystem.
                        </li>
                        <li>
                          Managed and orchestrated complex client-side
                          application state using Redux and the Context API.
                        </li>
                        <li>
                          Implemented robust APIs to facilitate seamless and
                          efficient data exchange between the React UIs and
                          backend services.
                        </li>
                        <li>
                          Engineered efficient data fetching and state
                          synchronization for complex lists by implementing
                          pagination functionality using Tanstack Query (React
                          Query).
                        </li>
                        <li>
                          Contributed to architectural design by designing
                          database tables and defining UI component structure
                          based on functional and business requirements.
                        </li>
                      </ul>
                    </div>
                    <div className="resume-item">
                      <h4>II. Schneider Electric - Fullstack developer</h4>

                      <p>
                        <em>Apr-2014 - Sep-2015</em>&nbsp;
                        <em>Bangalore, Ind</em>
                      </p>
                      <ul>
                        <li>
                          Designed and developed dynamic user interfaces (UIs)
                          using JSP to meet functional and aesthetic
                          requirements.
                        </li>
                        <li>
                          Developed and maintained controller and middle-layer
                          microservices to orchestrate business logic and data
                          flow.
                        </li>
                        <li>
                          Implemented robust APIs to facilitate seamless
                          interaction between the user interface and backend
                          services.
                        </li>
                        <li>
                          Led Proof-of-Concept (PoC) initiatives for new
                          technologies and features, successfully integrating
                          the resulting solutions into the existing application
                          codebase.
                        </li>
                        <li>
                          Actively participated in daily scrum and sprint
                          planning meetings, contributing to Agile development
                          processes and project delivery.
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Edn Resume Item --> */}

                    <div className="resume-item">
                      <h4>III. Capgemini India Pvt Ltd - Consultant</h4>
                      {/* <h5>2010 - 2014</h5> */}
                      <p>
                        <em>Jan-2011 - Nov-2013</em>&nbsp;
                        <em>Bangalore, Ind</em>
                      </p>

                      <ul>
                        <li>
                          Designed and implemented new user interfaces (UIs) and
                          modular components, ensuring seamless integration into
                          the existing application.
                        </li>
                        <li>
                          Developed, tested, and maintained APIs for both
                          frontend components and middleware services to
                          facilitate efficient interaction with the backend.
                        </li>
                        <li>
                          Engineered core backend business logic by developing
                          Entity, Entity-Manager, Model, and Descriptor classes
                          for robust data processing.
                        </li>
                        <li>
                          Contributed to the full application lifecycle by
                          developing Action, Bean, Helper, and Model classes to
                          implement and update application functionality.
                        </li>
                        <li>
                          Wrote and maintained code to consume external web
                          services, integrating third-party data and
                          functionality into the application.
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
                      <h4>IV. Accenture - Senior Software Engineer</h4>
                      {/* <h5>2019 - Present</h5> */}
                      <p>
                        <em>Nov-2009 - Oct-2010</em>&nbsp;
                        <em>Bangalore, Ind </em>
                      </p>
                      <ul>
                        <li>
                          Modified component-level API queries to ensure
                          efficient and accurate data exchange within the
                          application.
                        </li>
                        <li>
                          Wrote, optimized, and modified SQL queries to align
                          with evolving business requirements and improve data
                          retrieval performance.
                        </li>
                        <li>
                          Refactored and enhanced existing application
                          functionality and components based on new business
                          requirements.
                        </li>
                        <li>
                          Performed debugging and bug fixing across various
                          application layers to ensure stability and
                          reliability.
                        </li>
                        <li>
                          Actively participated in daily scrum and sprint
                          planning meetings, contributing to Agile development
                          processes and project delivery.
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Edn Resume Item --> */}

                    <div className="resume-item">
                      <h4>
                        V. Technologia Software Solutions Pvt Ltd - Software
                        Engineer
                      </h4>
                      {/* <h5>2017 - 2018</h5> */}
                      <p>
                        <em>Sep-2007 - Mar-2009</em>&nbsp;
                        <em>Bangalore, Ind</em>
                      </p>
                      <ul>
                        <li>
                          Contributed to core application functionality by
                          developing Action, Form Bean, Model, and Helper
                          classes to manage application state and workflow.
                        </li>
                        <li>
                          Wrote and maintained code for business functionality
                          within the persistence layer (data access module).
                        </li>
                        <li>
                          Developed and optimized SQL queries to meet specific
                          data retrieval and manipulation requirements.
                        </li>
                        <li>
                          Conducted manual, module-wise application testing and
                          prepared comprehensive test cases to ensure software
                          quality and functional alignment.
                        </li>
                        <li>
                          Managed and executed the deployment of new application
                          modules to the target environment.
                        </li>
                        <li>
                          Consistently developed and shipped application
                          functionality according to business requirements.
                        </li>
                        <li>
                          Conducted manual, module-wise application testing and
                          prepared comprehensive test cases to ensure software
                          quality and functional alignment.
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
