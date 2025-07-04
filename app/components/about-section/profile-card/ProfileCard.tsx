"use client";
import Image from "next/image"
import ProfileImg from "../../../../public/images/profile-img.jpg"
import SocialButton from "../../common-component/social-button/SocialButton"
import SpotlightCard from "../../common-component/spotlight-card/SpotlightCard"

type props = {
    classNameprops?: string
}
const ProfileCard = ({ classNameprops }: props) => {
    return (
        <>
            <SpotlightCard className={`${classNameprops} custom-spotlight-card bg-white/40 p-[30px] lg:p-[40px] border border-[#fff]/80 rounded-[46px] backdrop-blur-lg`} spotlightColor="rgba(67, 0, 255, 0.3)">
                <div className="flex flex-col gap-4 w-full items-center relative z-10">
                    <div>
                        <Image className="rounded-full " src={ProfileImg} width={250} height={250} alt="profile" />
                    </div>
                    <div className="text-center w-full pb-6 border-b border-[var(--normal-text)]/10">
                        <h1 className="text-[var(--normal-text)] text-[40px] lg:text-[56px] font-extrabold">Tomal M.</h1>
                        <h2 className="text-[var(--normal-text)] text-[16px] lg:text-[18px] font-regular">Front-End Developer | UX UI Designer</h2>
                        <div className="flex justify-center gap-4 pt-5">
                            <SocialButton textHidenMobile={false} icon='line-md:downloading-loop' iconColor="bg-[#fff]/20 " hoverColor='!bg-[#3E84DE] !text-white w-auto' text='Download CV' link='https://drive.google.com/file/d/1WB5rNB7XLhwJyE8M03b1njpPOmc_1BBb/view' />
                        </div>
                    </div>
                    <div className="flex gap-4 items-center" >
                        <SocialButton textHidenMobile={true} icon='bxl:facebook' iconColor="bg-[#1877f2]" hoverColor='hover:bg-[#1877f2]' text='Facebook' link='https://www.facebook.com/' />
                        <SocialButton textHidenMobile={true} icon='bxl:github' iconColor="bg-[#000]" hoverColor='hover:bg-[#000]' text='Github' link='https://github.com/' />
                        <SocialButton textHidenMobile={true} icon='bxl:dribbble' iconColor="bg-[#ea4c89]" hoverColor='hover:bg-[#ea4c89]' text='Dribbble' link='https://dribbble.com/' />
                        <SocialButton textHidenMobile={true} icon='la:linkedin-in' iconColor="bg-[#0a66c2]" hoverColor='hover:bg-[#0a66c2]' text='Linkedin' link='https://www.linkedin.com/' />
                    </div>
                </div>
            </SpotlightCard>
        </>
    )
}

export default ProfileCard