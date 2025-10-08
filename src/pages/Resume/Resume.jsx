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
            <div className="container section-title">
              <div>
                <div class="d-flex justify-content-between align-items-center pb-1 mb-4 border-2 border-bottom border-primary text-dark">
                  <h2>Resume</h2>
                  <ul class="list-unstyled">
                    <li>Name: Narendra</li>
                    <li>Bangalore,Hsr Layout, Ind</li>
                    <li>(+91) 6362 949 010</li>
                    <li>narendravs228@gmail.com</li>
                  </ul>
                </div>
                <p>
                  A seasoned Full-Stack Web & Mobile Developer Engineer with
                  over 10 years of IT experience, including 3+ years dedicated
                  to building and deploying complex, scalable applications
                  within the React & Next Ecosystem. Expertise spans across the
                  full stack—from responsive, data-driven UIs to robust backend
                  services.
                </p>
              </div>
              {/* <!-- End Section Title --> */}

              <div className="container">
                <div>
                  <h3 className="resume-title">Sumary</h3>
                  <div className="resume-item pb-0">
                    <p>
                      <p>
                        <span class="fw-bold">
                          Pioneering AI/LLM Development:
                        </span>
                        Recently leveraged OpenAI, LangChain, and LangGraph to
                        implement advanced conversational interfaces.
                        Successfully created a vector-search chatbot for dynamic
                        document and database querying, utilizing Hugging Face
                        embeddings and Pinecone vector database.
                      </p>
                      <p>
                        <span class="fw-bold">
                          Modern Full-Stack Proficiency (3+ Yrs):
                        </span>
                        Expert in building high-performance web and mobile
                        solutions using React.js, Next.js, React Native, and
                        TypeScript. Proficient in back-end development with
                        Node.js/Express.js, GraphQL, Prisma, and MongoDB.
                      </p>
                      <p>
                        <span class="fw-bold">
                          Enterprise Foundation (7+ Yrs):
                        </span>
                        Built a strong, scalable foundation across Automobile,
                        E-commerce, and Telecom domains, specializing in Java,
                        J2EE, Struts, Spring, and Hibernate. Experienced with
                        enterprise tools like WebLogic and Oracle SQL.
                      </p>
                      <p>
                        <span class="fw-bold"> DevOps & Practices:</span>
                        Experienced in deploying applications on major cloud
                        platforms (AWS EC2, Vercel, Google Cloud, Heroku) and
                        committed to Agile/Scrum methodologies, code quality,
                        and peer review.
                      </p>
                    </p>
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
                        Portfolio & Freelance - Fullstack web and mobile
                        developer.
                      </h4>

                      <p>
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
                      <h4>Schneider electric &amp; Fullstack developer</h4>

                      <p>
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
                      <h4>Capgemini India Pvt Ltd &amp; Consultant</h4>
                      {/* <h5>2010 - 2014</h5> */}
                      <p>
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
                    data-aos="fade-up fade-down"
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
                      <h4>Technologia Software Solutions Pvt Ltd</h4>
                      {/* <h5>2017 - 2018</h5> */}
                      <p>
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
