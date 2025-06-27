import AboutSection from "./components/about-section/AboutSection";
import Services from "./components/services/Services";
import Weapons from "./components/weapons/Weapons";
import WorkingEducation from "./components/working-education/WorkingEducation";

export default function Home() {
  return (
    <div>
      <AboutSection />
      <Weapons />
      <WorkingEducation />
      <Services />
    </div>
  );
}
