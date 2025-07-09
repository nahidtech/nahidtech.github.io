import About from "./components/sections/about";
import Banner from "./components/sections/banner";
import Blogs from "./components/sections/blogs";
import Contact from "./components/sections/contact/contact";
import Footer from "./components/sections/footer";
import Header from "./components/sections/header";
import Portfolio from "./components/sections/portfolio";
import Services from "./components/sections/services";
import Testimonial from "./components/sections/testimonial";
import ProgressBar from "./components/ui/progressBar";

const App = () => {
  return (
    <main>
      <Header />
      <Banner />
      <About />
      <Services />
      {/* <Experience /> */}
      <Portfolio />
      <Testimonial />
      {/* <Pricing /> */}
      <Blogs />
      <Contact />
      <Footer />
      <ProgressBar />
    </main>
  );
};

export default App;
