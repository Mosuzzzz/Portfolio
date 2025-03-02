import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({ icon, link }: { icon: IconDefinition, link: string }) => {
    return (

        <a href={link} target="_blank">
            <FontAwesomeIcon className="hover:scale-110 transition-all" icon={icon} />
        </a>
    )
}

export default Contact;