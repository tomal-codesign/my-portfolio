type props = {
    classNameprops?: string
}
const AboutCard = ({ classNameprops }: props) => {
    return (
        <div className={`${classNameprops}`}>AboutCard</div>
    )
}

export default AboutCard