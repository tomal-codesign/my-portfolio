
import { Icon } from "@iconify/react/dist/iconify.js"
import SpotlightCard from "../../common-component/spotlight-card/SpotlightCard"
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type props = {
    className?: string
    icon: string
    text: string
    spotlightColor?: RGBA
}
const WeaponCard = ({ className, icon, text, spotlightColor = `rgba(67, 0, 255, 0.3)` }: props) => {
    return (
        <>
            <div className={className}>
                <SpotlightCard className={`flex flex-col lg:gap-6  gap-2 items-center bg-white/60 px-4 lg:py-8 py-4  border border-[#fff]/80 rounded-[30px] backdrop-blur-lg`} spotlightColor={spotlightColor}>
                    <div>
                        <Icon icon={icon} width="50" height="50" />
                    </div>
                    <h2 className="text-[var(--normal-text)] lg:text-xl text-md font-medium">{text}</h2>
                </SpotlightCard>
            </div>
        </>
    )
}

export default WeaponCard