
import { IconType } from "react-icons";
import { FaNodeJs, FaReact, } from "react-icons/fa";
import { SiBun, SiCplusplus, SiCss3, SiGo, SiHtml5, SiJavascript, SiTypescript } from "react-icons/si";

export type SkillItem = {
    name: string;
    icon: IconType;
  };

  export const skills: SkillItem[] = [
    { name: "React", icon: FaReact },
    { name: "Go", icon: SiGo  },
    { name: "Typescript", icon: SiTypescript  },
    { name: "Javascript", icon: SiJavascript },
    { name: "Bun", icon: SiBun },
    { name: "C++", icon: SiCplusplus },
    { name: "Html", icon: SiHtml5 },
    { name: "Css", icon: SiCss3 },
    { name : "Node.js", icon: FaNodeJs },
  ];