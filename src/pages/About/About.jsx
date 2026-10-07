import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import skillsData from "../../data/skills.json";
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
            <div className="container section-title">
              <h2>About</h2>
              <p className="mb-4">
                I am a{" "}
                <b>
                  Senior Full Stack & AI Engineer with 12+ years of experience
                </b>{" "}
                building enterprise-grade software, high-throughput applications
                and autonomous AI systems. I specialize in bridging the gap
                between cutting-edge{" "}
                <b>
                  Agentic AI orchestration and robust, production-ready
                  full-stack architecture.
                </b>
              </p>

              <p>
                My career spans the full evolution of modern software
                engineering—from building high-concurrency enterprise backends
                in {""}
                <b>core enterprise Java/Spring Boot,</b> to architecting modern{" "}
                <b>modern MERN/Next.js ecosystems,</b> to engineering {""}
                <b>autonomous multi-agent workflows</b> autonomous multi-agent
                workflows that automate complex business logic.
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
                      <div>
                        <strong>Agentic AI, MCP & RAG Orchestration</strong>
                        <ul
                          style={{
                            margin: "6px 0 0 0",
                            paddingLeft: "20px",
                            listStyleType: "disc",
                          }}
                        >
                          <li>
                            Design and deploy autonomous AI agents and
                            structured multi-agent graphs using{" "}
                            <b>LangGraph, LangChain</b>, and{" "}
                            <b>AutoGen/CrewAI hybrid architectures</b>.
                            Integrated <b>Model Context Protocol (MCP)</b>{" "}
                            servers to enable standardized, secure tool access
                            and context retrieval across proprietary
                            documentation, vector indexes, and relational
                            databases. Architect production-grade
                            Retrieval-Augmented Generation (RAG) pipelines with
                            strict state bounds, deterministic tool execution,
                            and automated fallback recovery.
                          </li>
                          <li>
                            Build production-grade{" "}
                            <b>Retrieval-Augmented Generation (RAG)</b>{" "}
                            pipelines that safely connect LLMs to proprietary
                            company data with strict state bounds and
                            deterministic error recovery.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "10px",
                      }}
                    >
                      <span>🏗️</span>
                      <div>
                        <strong>Full-Stack Web & Mobile Architecture</strong>
                        <ul
                          style={{
                            margin: "6px 0 0 0",
                            paddingLeft: "20px",
                            listStyleType: "disc",
                          }}
                        >
                          <li>
                            <b>Web & Mobile:</b> Deep expertise in designing,
                            architecting, and developing web applications in{" "}
                            <b>
                              React, Next.js, Node.js, and React Native (Expo)
                            </b>{" "}
                            to build responsive, cross-platform applications
                            with seamless state management.
                          </li>
                          <li>
                            <b>Database Design:</b> Proven track record in
                            schema modeling, indexing, and performance tuning
                            across <b>PostgreSQL, MongoDB, and Redis</b>.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "10px",
                      }}
                    >
                      <span>⚡</span>
                      <div>
                        <strong>
                          Performance & Automated Quality Assurance:
                        </strong>
                        <ul
                          style={{
                            margin: "6px 0 0 0",
                            paddingLeft: "20px",
                            listStyleType: "disc",
                          }}
                        >
                          <li>
                            <b>100/100 Lighthouse Performance:</b> Optimize web
                            core vitals, server-side rendering (SSR), static
                            generation (ISR), and client-side asset delivery.
                          </li>
                          <li>
                            <b>Zero-Regression CI/CD:</b> Build robust GitHub
                            Actions deployment pipelines integrating automated{" "}
                            <b>Playwright (E2E)</b>,{" "}
                            <b>Jest/React Testing Library (Unit)</b>, and
                            continuous Lighthouse audits on every commit.
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Scalability & Distributed Architecture */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "10px",
                      }}
                    >
                      <span>🚀</span>
                      <div>
                        <strong>Scalability & Distributed Architecture:</strong>
                        <ul
                          style={{
                            margin: "6px 0 0 0",
                            paddingLeft: "20px",
                            listStyleType: "disc",
                          }}
                        >
                          <li>
                            <b>High-Throughput Systems:</b> Design resilient
                            microservices, asynchronous messaging queues, and
                            load-balanced edge infrastructure to ensure minimal
                            latency under peak traffic loads.
                          </li>
                          <li>
                            <b>Self-Healing Infrastructure:</b> Implement
                            container orchestration, auto-scaling policies, and
                            automated failover mechanisms to maintain high
                            availability and uninterrupted service delivery.
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Security & Enterprise Compliance */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "10px",
                      }}
                    >
                      <span>🔒</span>
                      <div>
                        <strong>Security & Enterprise Compliance:</strong>
                        <ul
                          style={{
                            margin: "6px 0 0 0",
                            paddingLeft: "20px",
                            listStyleType: "disc",
                          }}
                        >
                          <li>
                            <b>Zero-Trust Architecture:</b> Enforce strict
                            role-based access controls (RBAC), end-to-end data
                            encryption, and secure API gateways to eliminate
                            unauthorized access vectors.
                          </li>
                          <li>
                            <b>Automated Threat Detection:</b> Integrate
                            continuous SAST/DAST code scanning, dependency
                            vulnerability management, and automated compliance
                            checks into pre-deployment verification pipelines.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "10px",
                      }}
                    >
                      <span>☁️</span>
                      <div>
                        <strong>Cloud, DevOps & Scalability:</strong>
                        <ul
                          style={{
                            margin: "6px 0 0 0",
                            paddingLeft: "20px",
                            listStyleType: "disc",
                          }}
                        >
                          <li>
                            Deploy and manage scalable microservices and
                            serverless architectures across{" "}
                            <b>AWS, GCP, Vercel, and Render</b>.
                          </li>
                          <li>
                            Containerize applications using <b>Docker</b> to
                            ensure identical, secure execution across
                            development, staging, and production environments.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "10px",
                      }}
                    >
                      <span>💼</span>
                      <span>
                        <strong>What I Bring to Your Project:</strong> Whether
                        you are looking to integrate autonomous AI workflows
                        into your existing product, architect a new
                        enterprise-scale web/mobile application from scratch, or
                        overhaul system performance and CI/CD pipelines, I
                        deliver{" "}
                        <b>clean, maintainable, and battle-tested code</b> built
                        for long-term business growth.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
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
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Work Preference:</strong>{" "}
                          <span>100% Remote / Hybrid</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Availability:</strong>{" "}
                          <span>Open to Full-Time, Contracts & Clients</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Client Coverage:</strong>{" "}
                          <span>Global (US, EU, APAC Timezones)</span>
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
            style={{ paddingTop: "40px" }}
          >
            <div className="container section-title">
              <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
                Skills & Architectural Domains
              </h4>
              <p>
                <b>Technical Leadership & Architecture:</b> Leveraging over a
                decade of full-stack expertise to design highly available,
                secure, and performant systems. Integrating modern AI
                orchestration with battle-tested enterprise patterns.
              </p>
            </div>
            <div className="container">
              <div className="table-responsive">
                <table className="table table-hover align-middle custom-skills-table">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col" style={{ width: "22%" }}>
                        Domain
                      </th>
                      <th scope="col" style={{ width: "35%" }}>
                        Technologies & Libraries
                      </th>
                      <th scope="col" style={{ width: "18%" }}>
                        Proficiency
                      </th>
                      <th scope="col" style={{ width: "25%" }}>
                        Architectural Scope
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {skillsData.map((domain) => (
                      <tr key={domain.id}>
                        <td className="fw-bold">{domain.category}</td>
                        <td>
                          <div className="d-flex flex-wrap gap-1">
                            {domain.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="badge bg-light text-dark border me-1 mb-1"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-primary fs-6">
                            {domain.proficiency}
                          </span>
                        </td>
                        <td className="text-muted small">
                          {domain.architecturalScope}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
