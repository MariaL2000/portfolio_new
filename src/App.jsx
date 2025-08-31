import ThreeBackground from "./components/ThreeBackground";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import NumberSection from "./components/NumberSection";
import ServicesSection from "./components/ServicesSection"
import SkillSection from "./components/SkillsSection";
import Education from "./components/Education"
import ProjectSection from "./components/ProjectsSection"
import Footer from "./components/Footer";
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
    <ProjectSection/>
    <Footer/>
    
    </>
  );
};

export default App;
