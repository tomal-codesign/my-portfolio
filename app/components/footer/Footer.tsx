import SocialButton from "../common-component/social-button/SocialButton"

const Footer = () => {
    return (
        <div className="pb-8">
            <div className="container mx-auto px-4">
                <div className="custom-spotlight-card bg-white/40 p-[30px] lg:p-[40px] lg:pb-[26px] pt-[16px]  border border-[#fff]/80 rounded-[46px] backdrop-blur-lg flex flex-col items-center">
                    <h2 className="text-[var(--normal-text)] text-[26px] font-semibold">Let's Connect On</h2>
                    <div className="flex gap-4 items-center py-6" >
                        <SocialButton textHidenMobile={true} icon='bxl:facebook' iconColor="bg-[#1877f2]" hoverColor='hover:bg-[#1877f2]' text='Facebook' link='https://www.facebook.com/' />
                        <SocialButton textHidenMobile={true} icon='bxl:github' iconColor="bg-[#000]" hoverColor='hover:bg-[#000]' text='Github' link='https://github.com/' />
                        <SocialButton textHidenMobile={true} icon='bxl:dribbble' iconColor="bg-[#ea4c89]" hoverColor='hover:bg-[#ea4c89]' text='Dribbble' link='https://dribbble.com/' />
                        <SocialButton textHidenMobile={true} icon='la:linkedin-in' iconColor="bg-[#0a66c2]" hoverColor='hover:bg-[#0a66c2]' text='Linkedin' link='https://www.linkedin.com/' />
                    </div>
                    <div className="w-full pt-[16px] lg:pt-[26px] border-t border-[var(--normal-text)]/10">
                        <p className="text-[var(--normal-text)]/80  text-center text-xs lg:text-[14px] font-regular">Copyright © {new Date().getFullYear()} Tomal M. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer