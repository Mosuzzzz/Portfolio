import { data } from "../../Content/about";

const About = () => {
    return (
        <div className="space-y-4 scroll-m-14" id="About-section">
            <div className="text-PrimaryBase px-2 font-semibold text-xl">{data.title}</div>
            <div className="w-4/5 px-2">{data.description}</div>
        </div>
    )
}

export default About;