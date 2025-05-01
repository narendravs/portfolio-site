import React from "react";
import Header from "../../components/Header";
import { ReactTyped } from "react-typed";
import useWindowDimensions from "../Dimensions/Dimensions";
const Home = () => {
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

                  width: "1040px",
                  marginLeft: "200px",
                }
              : { width: "100%" }
          }
        >
          <section id="home" className="hero section dark-background">
            <div className="profile-img dark">
              <img
                src="assets/img/workhard.jpg"
                alt=""
                className="img-fluid "
                loading="eager"
                style={{ width: "100%" }}
              />
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <h2>Narendra</h2>
              <ReactTyped
                strings={[
                  "Designer",
                  "Developer",
                  "Freelancer",
                  "Web Developer",
                  "Web Designer",
                  "Full Stack Developer",
                  "Best Code Customiser",
                  "Familiar Open AI Library",
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
