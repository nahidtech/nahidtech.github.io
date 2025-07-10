import { RiMailLine } from "@remixicon/react";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const ContactForm = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nahidhasan",
        "template_aqj2zbz",
        form.current,
        "Ac-SAi4k7Mlyboyfj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsError(false);
          setStatusMessage("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setIsError(true);
          setStatusMessage("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="col-lg-8">
      <div className="contact-form contact-form-area">
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <div className="row">
            {/* Name */}
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Write Your Message"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit */}
            <div className="col-md-12">
              <div className="form-group mb-0">
                <button type="submit" className="theme-btn">
                  Send Me Message <RiMailLine size={16} />
                </button>
              </div>
            </div>

            {/* Status Message */}
            {statusMessage && (
              <div className="col-md-12 mt-3">
                <div
                  style={{
                    color: isError ? "#dc3545" : "#28a745",
                    fontWeight: "bold",
                  }}
                >
                  {statusMessage}
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
