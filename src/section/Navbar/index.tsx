import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const navs = [
    { title: 'About', sectionId: 'About-section' },
    { title: 'Experience', sectionId: 'Experience-section' },
    { title: 'Education', sectionId: 'Education-section' },
    { title: 'Skills', sectionId: 'Skills-section' },
]

const Navbar = () => {
    const [active, setActive] = useState<{ [ket: string]: boolean }>({});

    const handleClick = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className='flex flex-col gap-4 font-semibold'>
            {
                navs.map((e, index) => (

                    <div
                        className="cursor-pointer flex "
                        key={`nav-${e}-${index}`}
                        onClick={() => handleClick(e.sectionId)}
                        onMouseEnter={() => setActive(prev => ({ ...prev, [e.title]: true }))}
                        onMouseLeave={() => setActive(prev => ({ ...prev, [e.title]: false }))}

                    >
                        <div>
                            <FontAwesomeIcon className={`mr-2 ml-2 new-arrow text-PrimarySubcontent ${active[e.title] ? "" : "hidden"}`} icon={faArrowRight} />
                        </div>
                        <div className={`hover:scale-105 transition-all ${active[e.title] ? "text-PrimarySubcontent translate-x-4" : ""} duration-500 ease-out`}>
                            {e.title}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Navbar;