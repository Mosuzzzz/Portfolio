import { faGithub } from "@fortawesome/free-brands-svg-icons";
import GolangIcon from "../assets/Golang (1).png";
import Shoping from "../assets/Shoping.png";

export const data = [
    {
        date: "2024",
        title: "Golang",
        link: "https://github.com/Mosuzzzz/DocumentGOlang",
        material: [
            {icon: faGithub,link: "https://github.com/Mosuzzzz/DocumentGOlang"},
        ],
        description:[
            "This is a Golang for Beginner, I want to shere my experience to ya'll"
        ],
        tech: [
            ["Golang", "Beginner", "Document"],
        ],
        picture:GolangIcon,

    },
    {
        date: "2024",
        title: "Shop",
        link: "https://github.com/Mosuzzzz/Shop",
        material: [
            {
                link: "https://github.com/Mosuzzzz/Shop",
                icon: faGithub,
            }
        ],
        description:[
            "This is just a simple shoping project",
        ],
        tech: [
            ["Golang", "Project"],
        ],
        picture:Shoping,
    }
]