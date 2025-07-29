import AboutCard from "../../components/about-section/about-card/AboutCard";
import Weapons from "../../components/weapons/Weapons";
import WorkingEducation from "../../components/working-education/WorkingEducation";

const page = () => {
    return (
        <div>
            <div className={`pt-10`}>
                <div className="container mx-auto px-4">
                    <AboutCard />
                </div>
            </div>
            <Weapons />
            <WorkingEducation />
        </div>
    )
}

export default page