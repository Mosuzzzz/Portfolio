import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Material = ({ icon, link }: { icon: IconProp, link: string }) => {
    return (
        <a href={link} target="_blank">
            <FontAwesomeIcon className="hover:scale-110 transition-all" icon={icon} />
        </a>
    );
}


export default Material;