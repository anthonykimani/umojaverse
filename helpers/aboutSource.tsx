import Blogs from "@/components/Blogs";
import Courses from "@/components/Courses";
import Events from "@/components/Events";
import { Community, CoursesSvg, Rocket, SocialMedia } from "@/constants/svg";

export const aboutSource = [
    {
        img: Rocket,
        title: "Incubation Programme",
        description: " The Incubation Hub is the core platform that nurtures and accelerates the development of innovative software products. As the parent platform, it provides essential resources, mentorship, and strategic guidance to transform ideas into market-ready solutions.",
        action: "Apply to the Program",
        layoutDirection: true,
        overview: null
    },
    {
        img: Community,
        title: "Community Hub",
        description: "The Community Hub is a vibrant platform designed to connect, engage, and empower users, developers, and enthusiasts. It serves as a central gathering place for sharing knowledge, collaborating on projects, and fostering meaningful interactions",
        action: "Join the Community",
        layoutDirection: false,
        overview: <Blogs />
    },
    {
        img: SocialMedia,
        title: "Social Media Partnerships",
        description: " The Incubation Hub is the core platform that nurtures and accelerates the development of innovative software products. As the parent platform, it provides essential resources, mentorship, and strategic guidance to transform ideas into market-ready solutions.",
        action: "See the Social Buzz",
        layoutDirection: true,
        overview: <Events />
    },
    {
        img: CoursesSvg,
        title: "Courses & Programmes",
        description: "The Community Hub is a vibrant platform designed to connect, engage, and empower users, developers, and enthusiasts. It serves as a central gathering place for sharing knowledge, collaborating on projects, and fostering meaningful interactions",
        action: "Browse Available Programmes",
        layoutDirection: false,
        overview: <Courses />
    },
]