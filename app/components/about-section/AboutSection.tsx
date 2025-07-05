import AboutCard from "./about-card/AboutCard"
import ProfileCard from "./profile-card/ProfileCard"
type props = {
    className?: string
}
const AboutSection = ({ className }: props) => {
    return (
        <>
            <div className={`pt-16 ${className}`}>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-7 gap-6">
                        <ProfileCard classNameprops="col-span-7 lg:col-span-3 " />
                        <AboutCard classNameprops="col-span-7 lg:col-span-4" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection