import AboutSection from "./components/about-section/AboutSection";
import Weapons from "./components/weapons/Weapons";
import WorkingEducation from "./components/working-education/WorkingEducation";

export default function Home() {
  return (
    <div>
      <AboutSection />
      <Weapons />
      <WorkingEducation />
    </div>
  );
}
