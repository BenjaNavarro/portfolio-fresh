import Angular from "../components/Icons/Angular.tsx";
import CLang from "../components/Icons/CLang.tsx";
import Express from "../components/Icons/Express.tsx";
import Mongoose from "../components/Icons/Mongoose.tsx";
import NodeJS from "../components/Icons/NodeJS.tsx";
import ReactJS from "../components/Icons/ReactJS.tsx";
import RubyOnRails from "../components/Icons/RubyOnRails.tsx";
import TailwindCSS from "../components/Icons/TailwindCSS.tsx";

export const skillContent = {
    "backend": [
        {
            text: 'Node.js', Icon: NodeJS
        },
        {
            text: 'Express', Icon: Express
        },
        {
            text: 'Ruby on Rails', Icon: RubyOnRails
        },
        {
            text: 'Mongoose', Icon: Mongoose
        }
    ],
    "frontend": [
        {
            text: 'React.js', Icon: ReactJS
        },
        {
            text: 'Angular', Icon: Angular
        },
        {
            text: 'TailwindCSS', Icon: TailwindCSS
        },
    ],
    "programming-languages": [
        {
            text: 'C', Icon: CLang
        }
    ]
    // "backend": ["Node", "MongoDB", "Express", "MySQL", "Ruby on Rails"],
    // "frontend": ["React", "Angular", "TailwindCSS", "Redux", "Formik"],
    // "version-control": ["Git", "Bitbucket", "Github"],
    // "cloud": ["GCP", "AWS", "Supabase", "Firebase", "Atlassian"],
    // "programming-languages": ["JavaScript", "TypeScript", "Python", "Java", "C"],
    // "design": ["Figma", "AdobeXD", "Canva"],
    // "project-management": ["clickUp", "Jira"],
    // "soft-skills": ["Resolución de problemas", "Optimización de procesos"],
    // "speaking-languages": ["Inglés"],
    // "methodologies": ["SCRUM", "Design thinking", "Agile"]
} as const;