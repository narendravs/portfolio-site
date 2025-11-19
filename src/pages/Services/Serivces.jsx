import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
const Serivces = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <Header />
        </div>
        <div class="col-9" style={{ marginRight: "40px" }}>
          {/* <!-- Services Section --> */}

          <section id="services" class="services section">
            {/* <!-- Section Title --> */}
            <div class="container section-title" data-aos="fade-up">
              <h2>Services</h2>
              <p>
                <p>
                  1. AI/LLM Integration & Agent Development (Your Key
                  Differentiator) Intelligent Solutions: Design and
                  implementation of next-generation conversational interfaces
                  and AI-powered workflows using OpenAI, LangChain, and
                  LangGraph. Vector Search & RAG: Architecting
                  Retrieval-Augmented Generation (RAG) systems with Pinecone and
                  Hugging Face embeddings to enable dynamic, database-driven
                  chatbots.
                </p>
                &nbsp;
                <p>
                  2. Modern Full-Stack Architecture React & Next.js Development:
                  Building high-performance, SEO-optimized web applications and
                  server-side logic using Next.js. Focus on efficient state
                  management (Redux, Tanstack Query) and modular component
                  design. Backend & APIs: Engineering robust, scalable APIs with
                  Node.js/Express.js, GraphQL, and Prisma/PostgreSQL/MongoDB for
                  seamless data integrity and exchange. Quality & Standards:
                  Committed to delivering clean, efficient, and well-tested code
                  using TypeScript, Jest, and adherence to strict Agile/Scrum
                  methodologies.
                </p>
                &nbsp;
                <p>
                  3. Mobile & Cross-Platform Delivery React Native Solutions:
                  Developing and deploying native-feeling mobile applications
                  for iOS and Android, ensuring single codebase efficiency via
                  React Native (Expo).
                </p>
                &nbsp;
                <p>
                  4. DevOps & Cloud Deployment Deployment Automation: Full-cycle
                  application deployment and maintenance on major cloud
                  providers (AWS EC2, Vercel, Heroku), ensuring high
                  availability and scalability.
                </p>
              </p>
            </div>
            {/* <!-- End Section Title --> */}

            <div class="container">
              <div class="row gy-4">
                <div
                  class="col-lg-4 col-md-6 service-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div class="icon flex-shrink-0">
                    <i class="bi bi-briefcase"></i>
                  </div>
                  <div>
                    <h4 class="title">
                      <Link to="/Service-details" class="stretched-link">
                        React js Web-development
                      </Link>
                    </h4>
                    <p class="description">
                      Designing developing maintaining react applications and
                      its ecosystem.
                    </p>
                  </div>
                </div>
                {/* <!-- End Service Item --> */}

                <div
                  class="col-lg-4 col-md-6 service-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div class="icon flex-shrink-0">
                    <i class="bi bi-card-checklist"></i>
                  </div>
                  <div>
                    <h4 class="title">
                      <Link to="/Service-details" class="stretched-link">
                        Next js Web-development
                      </Link>
                    </h4>
                    <p class="description">
                      Imlementing the server side applications, deploying and
                      maintaining.
                    </p>
                  </div>
                </div>
                {/* <!-- End Service Item --> */}

                <div
                  class="col-lg-4 col-md-6 service-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div class="icon flex-shrink-0">
                    <i class="bi bi-bar-chart"></i>
                  </div>
                  <div>
                    <h4 class="title">
                      <Link to="/Service-details" class="stretched-link">
                        React-Native Mobile-development
                      </Link>
                    </h4>
                    <p class="description">
                      Developing native mobile apllocations, deploying and
                      maintaining the projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- /Services Section --> */}
        </div>
      </div>
    </div>
  );
};

export default Serivces;
