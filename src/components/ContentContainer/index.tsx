import { useState } from "react";
import FormattenDate from "../FormattenDate";
import Picture from "../Picture";
import Title from "../Title";
import Material from "../Material";
import Description from "../Description";
import Tech from "../Tech";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ExperienceItem = {
    date: string;
    title: string;
    link: string;
    material: { link: string; icon: IconProp }[];
    description: string[];
    tech: string[][];
    picture: string;
};

const ContentContainer = ({
    title: sectiontitle = "",
    data,
}: { title: string, data: ExperienceItem[] }) => {
    const [isMouseEnter, setIsMouseEnter] = useState<{ [ket: string]: boolean }>({});
    const SECTION_ID = `${sectiontitle}-section`;

    return (
        <div id={SECTION_ID} className="space-y-4">
            {/* title */}
            <div className="text-PrimaryBase font-semibold px-2 text-xl">Experience</div>
            {
                data.map(({ date, title, link, material, description, tech, picture }, index) => (

                    // {/* content */}

                    <div
                        key={`${SECTION_ID}-${index}-${title.replaceAll(/ /g, "")}`}
                        className={`grid grid-cols-[25%_75%] ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-PrimaryHoverBg" : ""} transition-all px-2 rounded-md py-5`}
                        onMouseEnter={() => setIsMouseEnter(prev => ({ ...prev, [`${SECTION_ID}-${index}`]: true }))}
                        onMouseLeave={() => setIsMouseEnter(prev => ({ ...prev, [`${SECTION_ID}-${index}`]: false }))}
                    >
                        {/* right */}
                        <div>
                            <FormattenDate>{date}</FormattenDate>
                            <Picture picture={picture} title={title} />
                        </div>
                        {/* left */}
                        <div className="space-y-4">
                            {/* title */}
                            <Title isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]} link={link} title={title}></Title>
                            {/* Material */}

                            {
                                material.length > 0 ?
                                    <div className="flex gap-4 text-2xl">
                                        {
                                            material.map(({ link, icon }, index) => (
                                                <Material key={`${title}-material${index}`} link={link} icon={icon}></Material>
                                            ))
                                        }
                                    </div>
                                    : null
                            }
                            {/* Description */}
                            {
                                description.map((desc, index) => (
                                    <Description key={`${title}-description${index}`} content={desc}></Description>
                                ))
                            }
                            {/* Tag */}
                            {
                                tech.map((tag, index) => (
                                    <Tech key={`${title}-tag${index}`} isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]} data={tag} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>

    );
};


export default ContentContainer;