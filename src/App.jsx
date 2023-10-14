import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center opacity-75">
          <div className="bg-gradient-to-b from-transparent to-primary h-full"></div>
          <Hero />
        </div>
        <About />
        {/* <StarsCanvas /> */}
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
