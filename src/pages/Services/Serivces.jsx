import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
const Serivces = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-3">
          <Header />
        </div>
        <div className="col-12 col-lg-9">
          {/* <!-- Services Section --> */}

          <section id="services" className="services section">
            {/* <!-- Section Title --> */}
            <div className="section-title" data-aos="fade-up">
              <h2>Services</h2>
              {/* 1. Agentic AI & LLM Orchestration */}
              <p className="mb-4">
                <span className="fw-bold">
                  1. Agentic AI & LLM Orchestration: {""}
                </span>
                Architecting next-generation
                <b> autonomous agents</b> and conversational interfaces using{" "}
                <b>LangGraph and LangChain</b>. I specialize in moving beyond
                simple chatbots to building AI that can execute
                <b> multi-step business logic</b>. Designing
                <b> Retrieval-Augmented Generation (RAG)</b> pipelines with{" "}
                <b>Pinecone</b> and
                <b> Hugging Face</b> embeddings. I enable LLMs to securely query
                your internal databases and documents with{" "}
                <b>high precision and low latency.</b>
                <br />
                <span className="fw-bold d-inline-block mt-2">
                  Enterprise RAG & Data Pipelines:
                </span>{" "}
                I design end-to-end {""}
                <b>Retrieval-Augmented Generation (RAG)</b> systems, including
                automated <b>document-to-vector embedding pipelines</b>. Using{" "}
                <b>Pinecone and Hugging Face</b>, I transform unstructured data
                and relational databases into high-performance{" "}
                <b>vector stores</b>. This ensures LLMs can securely query your
                internal knowledge base with{" "}
                <b>
                  semantic precision, sub-second latency, and zero
                  hallucinations.
                </b>
              </p>

              {/* 2. Modern Full-Stack Architecture */}
              <p className="mb-4">
                <span className="fw-bold">
                  2. Modern Full-Stack Architecture: {""}
                </span>
                Engineering
                <b> SEO-optimized, sub-second applications</b> using{" "}
                <b>Next.js (App Router)</b> and React. I focus on advanced
                patterns like <b>Server Components and streaming</b> to ensure
                elite user experiences. Developed robust backends with
                <b> Node.js, Express, and GraphQL</b>. From{" "}
                <b>Prisma/PostgreSQL to MongoDB</b>, ensuring data integrity and
                high-concurrency handling for enterprise-grade traffic. I
                deliver type-safe, <b>"Production-Ready"</b> codebases using
                TypeScript, enforced by automated CI/CD workflows. Every commit
                triggers a comprehensive suite of{" "}
                <b>
                  Playwright (E2E), Jest/RTL (Unit/Integration), and Lighthouse
                </b>{" "}
                Performance audits to ensure peak quality and zero regressions
                before deployment.
              </p>

              {/* 3. Mobile & Cross-Platform Delivery */}
              <p className="mb-4">
                <span className="fw-bold">
                  3. Mobile & Cross-Platform Delivery: {""}
                </span>
                Building and deploying
                <b> native-performance mobile applications</b> for iOS and
                Android from a single, high-quality codebase. I focus on smooth
                animations, offline capabilities, and
                <b> seamless API synchronization</b>.
              </p>

              {/* 4. DevOps & Performance Engineering */}
              <p className="mb-4">
                <span className="fw-bold">
                  4. DevOps & Performance Engineering: {""}
                </span>
                Implementing
                <b> GitHub Actions and Docker</b> workflows that automate
                testing and performance audits (<b>Lighthouse</b>) on every
                commit. Deployment and scaling on
                <b> AWS, Vercel, and Render</b>, ensuring your application
                remains highly available and <b>cost-efficient</b> under heavy
                load.
              </p>
            </div>
            {/* <!-- End Section Title --> */}

            <div className="container">
              <div className="row gy-4">
                <div
                  className="col-lg-4 col-md-6 service-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-globe"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <Link
                        to="/Service-details/web-mobile"
                        className="stretched-link"
                      >
                        Web & Mobile Development
                      </Link>
                    </h4>
                    <p className="description">
                      Engineering high-performance, SEO-optimized Next.js React
                      web applications and native-feel React Native mobile
                      experiences.
                    </p>
                  </div>
                </div>
                {/* <!-- End Service Item --> */}

                <div
                  className="col-lg-4 col-md-6 service-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-gpu-card"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <Link
                        to="/Service-details/cloud-devops"
                        class="stretched-link"
                      >
                        Cloud Infrastructure & DevOps.
                      </Link>
                    </h4>
                    <p className="description">
                      Architecting scalable AWS and Render environments with
                      Docker containerization and automated CI/CD performance
                      gates.
                    </p>
                  </div>
                </div>
                {/* <!-- End Service Item --> */}

                <div
                  className="col-lg-4 col-md-6 service-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-robot"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <Link
                        to="/Service-details/ai-automation"
                        className="stretched-link"
                      >
                        AI Automation & LLM Orchestration
                      </Link>
                    </h4>
                    <p className="description">
                      Building autonomous AI agents and precision RAG pipelines
                      using LangGraph to automate complex, multi-step business
                      logic.
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
