import Image from "next/image"
import ProfileImg from "../../../../public/images/profile-img.jpg"
import SocialButton from "../../common-component/social-button/SocialButton"

type props = {
    classNameprops?: string
}
const ProfileCard = ({ classNameprops }: props) => {
    return (
        <div className={`${classNameprops} bg-white/40 p-[30px] rounded-[40px] backdrop-blur-lg`}>
            <div className="flex flex-col gap-4 w-full items-center">
                <div>
                    <Image className="rounded-full" src={ProfileImg} width={300} height={300} alt="profile" />
                </div>
                <div className="text-center w-full pb-6 border-b border-[var(--normal-text)]/10">
                    <h1 className="text-[var(--normal-text)] text-[48px] font-extrabold">Tomal .M</h1>
                    <h2 className="text-[var(--normal-text)] text-[16px] font-regular">Front-End Developer | UX UI Designer</h2>
                    <button>Download</button>
                </div>
                <div>
                    <SocialButton />
                </div>
            </div>
        </div>
    )
}

export default ProfileCard