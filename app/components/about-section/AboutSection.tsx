import AboutCard from "./about-card/AboutCard"
import ProfileCard from "./profile-card/ProfileCard"

const AboutSection = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-7 gap-4">
                    <ProfileCard classNameprops="col-span-3" />
                    <AboutCard classNameprops="col-span-3" />
                </div>
            </div>
        </>
    )
}

export default AboutSection