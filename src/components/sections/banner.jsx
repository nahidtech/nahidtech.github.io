import SlideUp from "../animations/slideUp";

const Banner = () => {
  return (
    <section id="home" className="main-hero-area">
      <div className="container">
        <div className="container-inner">
          <div className="row align-items-center">
            <div className="col-lg-12 col-sm-12">
              {/*  START HERO DESIGN AREA  */}
              <SlideUp>
                <div className="hero-content rmb-25 text-center">
                  <h1>
                    I'm <span>Nahid</span> Hasan
                  </h1>
                  <div className="job">
                    <span>IT Professional</span>
                    <span>Frontend Developer</span>
                    <span>Graphic Designer</span>
                    <span>Video Editor</span>
                    <span>Video Editor</span>
                  </div>
                </div>
              </SlideUp>
              {/*  / END HERO DESIGN AREA  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
