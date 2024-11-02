import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Footer from "./pages/Footer/Footer";
import Landing from "./pages/Home/Landing";
import HowWeHelp from "./pages/HowWeHelp/HowWeHelp";
import Insights from "./pages/Insights/Insights";
import Portfolio from "./pages/Portfolio/Portfolio";
import Testimonials from "./pages/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="relative">
   <NavBar/>
   <Landing/>
   <HowWeHelp/>
   <Portfolio/>
   <Testimonials/>
   <AboutUs/> 
   <Insights/>
   <Footer/>   
    </div>
  );
}
