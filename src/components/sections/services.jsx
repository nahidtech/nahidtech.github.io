import {
  RiCodeSSlashLine, // Web Development
  RiHtml5Line,
  RiLayout3Line, // WordPress Development
  RiPaletteLine, // Graphic Design
  RiScissorsCutLine, // Video Editing // Frontend Development
  RiWordpressLine,
} from "react-icons/ri";

import ZoomIn from "../animations/zoomIn";
import Title from "../ui/title";

const servicesList = [
  {
    id: 1,
    icon: <RiLayout3Line size={65} />,
    service_name: "Website Design",
    service_description:
      "Crafting modern, user friendly website layouts that align with your brand and enhance user experience.",
  },
  {
    id: 2,
    icon: <RiCodeSSlashLine size={65} />,
    service_name: "Web Development",
    service_description:
      "Building responsive and high performance websites using clean, scalable, and secure code.",
  },
  {
    id: 3,
    icon: <RiHtml5Line size={65} />,
    service_name: "Frontend Development",
    service_description:
      "Building interactive and visually rich interfaces with HTML, CSS, JavaScript, and modern tools.",
  },
  {
    id: 3,
    icon: <RiWordpressLine size={65} />,
    service_name: "WordPress Development",
    service_description:
      "Custom WordPress themes, plugins, and full-site solutions for blogs and businesses.",
  },
  {
    id: 3,
    icon: <RiPaletteLine size={65} />,
    service_name: "Graphic Design",
    service_description:
      "Delivering eye-catching graphics for branding, social media, logos, banners, posters and more.",
  },
  {
    id: 3,
    icon: <RiScissorsCutLine size={65} />,
    service_name: "Video Editing",
    service_description:
      "Creating polished and engaging videos with smooth cuts, effects and storytelling to match your brand.",
  },
];
const Services = () => {
  return (
    <section id="services" className="services-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <Title>
              <p>Services</p>
              <h2>Quality Services</h2>
            </Title>
          </div>
        </div>
        <div className="row">
          {servicesList.map(
            ({ icon, id, service_description, service_name }) => {
              return (
                <div key={id} className="col-lg-4 col-md-6 mb-lg-4">
                  <ZoomIn id={id}>
                    <div className="service-item">
                      {icon}
                      <h4>{service_name}</h4>
                      <p>{service_description}</p>
                    </div>
                  </ZoomIn>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
