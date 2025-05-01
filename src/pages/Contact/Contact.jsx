import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/Header";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n24mf0e",
        "template_0c6q0le",
        form.current,
        "SgewXKdg1JSAFyjCp"
      )
      .then(
        (result) => {
          toast.success("Your message has been sent. Thank you!", {
            position: "top-center",
            // classNameName: "toast-message",
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.success(error.text + "\n" + "please check the email", {
            position: "top-center",
            // classNameName: "toast-message",
          });
        }
      );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
        <div
          className="col-9"
          style={{
            marginRight: "60px",
          }}
        >
          {/* <!-- Contact Section --> */}
          <div id="contact" className="contact section">
            {/* <!-- Section Title --> */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Contact</h2>
              <p>
                Please drop a message and I'll get back to you as soon as
                possible.
              </p>
            </div>
            {/* <!-- End Section Title --> */}

            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">
                <div className="col-lg-5">
                  <div className="info-wrap">
                    <div
                      className="info-item d-flex"
                      data-aos=""
                      data-aos-delay="200"
                    >
                      <i className="bi bi-geo-alt flex-shrink-0"></i>
                      <div>
                        <h3>Address</h3>
                        <p>Hsr Layout, Bangalore, Ind 560102</p>
                      </div>
                    </div>
                    {/* <!-- End Info Item --> */}

                    <div
                      className="info-item d-flex"
                      data-aos=""
                      data-aos-delay="300"
                    >
                      <i className="bi bi-telephone flex-shrink-0"></i>
                      <div>
                        <h3>Call Us</h3>
                        <p>+91 6362 949 010</p>
                      </div>
                    </div>
                    {/* <!-- End Info Item --> */}

                    <div
                      className="info-item d-flex"
                      data-aos=""
                      data-aos-delay="400"
                    >
                      <i className="bi bi-envelope flex-shrink-0"></i>
                      <div>
                        <h3>Email Us</h3>
                        <p>narendravs228@gmail.com</p>
                      </div>
                    </div>
                    {/* <!-- End Info Item --> */}

                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.042517696784!2d77.6433215741192!3d12.904987616337149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1498d7484145%3A0xa21a4248452af88a!2sSri%20Chaitanya%20School!5e0!3m2!1sen!2sin!4v1744714379945!5m2!1sen!2sin"
                      width="100%"
                      height="300px"
                      data-aos=""
                      data-aos-delay="200"
                    ></iframe>
                  </div>
                </div>

                <div className="col-lg-7">
                  <form
                    // action="forms/contact.php"
                    // method="post"
                    className="php-email-form"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <label htmlFor="name-field" className="pb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name-field"
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="email-field" className="pb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email-field"
                          required
                        />
                      </div>

                      <div className="col-md-12">
                        <label htmlFor="message-field" className="pb-2">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          name="message"
                          rows="10"
                          id="message-field"
                          required
                        ></textarea>
                      </div>

                      <div className="col-md-12 text-center">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>

                        <button type="submit" value="Send">
                          Send Message
                        </button>
                        <ToastContainer />
                      </div>
                    </div>
                  </form>
                </div>
                {/* <!-- End Contact Form --> */}
              </div>
            </div>
          </div>
          {/* <!-- /Contact Section --> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
