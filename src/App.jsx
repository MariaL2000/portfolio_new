import ThreeBackground from "./components/ThreeBackground";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import NumberSection from "./components/NumberSection";
import ServicesSection from "./components/ServicesSection"
import SkillSection from "./components/SkillsSection";
import Education from "./components/Education"
import ProjectCarousel from "./components/ProjectCarousel"
import Footer from "./components/Footer";
import { projects , projects2} from "./components/data/config";
const App = () => {
  return (
    <>
    <ThreeBackground/>
    <NavBar/>
    <HeroSection/>
    <NumberSection/>
    <ServicesSection/>
    <SkillSection/>
    <Education/>
    <ProjectCarousel title="Main Projects" data={projects} isFirst={true} />
    <ProjectCarousel title="Other Projects" data={projects2} />
    <Footer/>
    
    </>
  );
};

export default App;
