type props = {
    classNameprops?: string
}
const AboutCard = ({ classNameprops }: props) => {
    return (
        <div className={`${classNameprops} custom-spotlight-card bg-white/40 p-[30px] lg:p-[40px] border border-[#fff]/80 rounded-[46px] backdrop-blur-lg`}>
            <h1 className="text-[var(--normal-text)] text-[20px] lg:text-[40px]  font-extrabold">Frontend Developer Focused on User-Centered Design</h1>
            <p className="pt-4 text-[var(--normal-text)] text-sm lg:text-md">I’m deeply passionate about advanced design and coding, with a strong addiction to crafting visually appealing and user-friendly digital experiences. I bring hands-on expertise in tools like Photoshop and Illustrator for high-fidelity UI design, and I translate those designs into responsive, functional interfaces using HTML, CSS, JavaScript, jQuery, and Bootstrap.</p>
            <p className="pt-6 text-[var(--normal-text)] text-sm lg:text-md">With a solid background in Website Design, I prioritize both aesthetics and usability. My design approach is driven by a deep understanding of user needs, while my development process ensures pixel-perfect implementation. I focus on aligning closely with client requirements to deliver results that not only meet but exceed expectations.
                Whether it’s designing intuitive UI layouts or implementing interactive frontend features, I bring a designer’s eye and a developer’s precision to every project.</p>

        </div>
    )
}

export default AboutCard