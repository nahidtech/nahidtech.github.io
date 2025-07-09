import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";

const ContactInfo = () => {
  return (
    <div className="col-lg-4">
      <div className="contact-content-part  wow fadeInUp delay-0-2s">
        <div className="single-contact wow fadeInUp" data-wow-delay=".2s">
          <div className="contact-icon">
            <i>
              <RiMapPinLine size={20} />
            </i>
          </div>
          <h2>our office:</h2>
          <p>Dhaka Bangladesh</p>
        </div>

        <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
          <div className="contact-icon">
            <i>
              <RiPhoneLine size={20} />
            </i>
          </div>
          <h2>contact number:</h2>
          <p>
            <a href="tel:+8801722940893">+8801722940893</a>
          </p>
        </div>

        <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
          <div className="contact-icon">
            <i>
              <RiMailLine size={20} />
            </i>
          </div>
          <h2>Email us:</h2>
          <p>
            <a href="mailto:nahidhasanbd71@mail.com">nahidhasanbd71@mail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
