import React from "react";
import Header from "../../components/Header";
import { ReactTyped } from "react-typed";
import useWindowDimensions from "../Dimensions/Dimensions";
const Home = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12 col-lg-3">
          <Header />
        </div>
        <div
          className="col-12 col-lg-9 ps-0"
          style={
            width > 750
              ? { paddingLeft: "0px", paddingRight: "0px" }
              : { paddingLeft: "0px", paddingRight: "0px" }
          }
        >
          <section id="home" className="hero section dark-background">
            <div className="profile-img dark">
              <img
                src="assets/img/workhard.jpg"
                alt=""
                className="img-fluid "
                loading="eager"
                fetchPriority="high"
                style={{ width: "100%" }}
              />
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <h2>Narendra</h2>
              <ReactTyped
                strings={[
                  "Freelancer",
                  "Web Developer",
                  "Full Stack Developer",
                  "Best Code Customiser",
                  "AI Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop
              >
                <input
                  type="text"
                  style={{
                    backgroundColor: "inherit",
                    paddingLeft: "25px",
                    color: "#dc3545",
                    fontWeight: "500",
                    border: "0px",
                    fontSize: "20px",
                  }}
                />
              </ReactTyped>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
