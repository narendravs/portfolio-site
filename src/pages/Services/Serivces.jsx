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
                Building and maintaining complex and interactive user interfaces
                using React.js and its core principles.Effectively utilizing
                state management libraries like Redux or the Context API to
                manage application data flow.Designing and implementing reusable
                and well-structured React components.Strong grasp of JavaScript
                (ES6+), HTML, and CSS, including responsive design principles.
                and I prioritize writing clean, efficient, and well-tested code
                using libraries like Jest and React Testing Library. I'm
                comfortable with debugging and troubleshooting front-end issues
                and collaborating effectively within a team, participating in
                code reviews and contributing to technical discussions.
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
