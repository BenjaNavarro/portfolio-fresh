import AdobeXD from "../components/Icons/AdobeXD.tsx";
import Agile from "../components/Icons/Agile.tsx";
import Angular from "../components/Icons/Angular.tsx";
import Atlassian from "../components/Icons/Atlassian.tsx";
import AWS from "../components/Icons/AWS.tsx";
import Bitbucket from "../components/Icons/Bitbucket.tsx";
import Canva from "../components/Icons/Canva.tsx";
import CLang from "../components/Icons/CLang.tsx";
import ClickUp from "../components/Icons/ClickUp.tsx";
import DesignThinking from "../components/Icons/DesignThinking.tsx";
import Express from "../components/Icons/Express.tsx";
import Figma from "../components/Icons/Figma.tsx";
import Firebase from "../components/Icons/Firebase.tsx";
import Formik from "../components/Icons/Formik.tsx";
import GCP from "../components/Icons/GCP.tsx";
import Git from "../components/Icons/Git.tsx";
import Github from "../components/Icons/Github.tsx";
import Java from "../components/Icons/Java.tsx";
import JavaScript from "../components/Icons/JavaScript.tsx";
import Jira from "../components/Icons/Jira.tsx";
import MongoDB from "../components/Icons/MongoDB.tsx";
import Mongoose from "../components/Icons/Mongoose.tsx";
import MySQL from "../components/Icons/MySQL.tsx";
import NodeJS from "../components/Icons/NodeJS.tsx";
import PostgreSQL from "../components/Icons/PostgreSQL.tsx";
import ProblemSolving from "../components/Icons/ProblemSolving.tsx";
import ProcessOptimization from "../components/Icons/ProcessOptimization.tsx";
import Python from "../components/Icons/Python.tsx";
import ReactJS from "../components/Icons/ReactJS.tsx";
import Redux from "../components/Icons/Redux.tsx";
import RubyOnRails from "../components/Icons/RubyOnRails.tsx";
import RxDB from "../components/Icons/RxDB.tsx";
import Scrum from "../components/Icons/Scrum.tsx";
import Supabase from "../components/Icons/Supabase.tsx";
import TailwindCSS from "../components/Icons/TailwindCSS.tsx";
import TypeScript from "../components/Icons/TypeScript.tsx";
import UkUsa from "../components/Icons/UkUsa.tsx";
import { SkillSet } from "../types.d.ts";

export const skillSet: SkillSet = {
    "backend": [
        {
            text: 'Node.js', Icon: NodeJS, url: "https://nodejs.org/en"
        },
        {
            text: 'Express', Icon: Express, url: "https://expressjs.com"
        },
        {
            text: 'Ruby on Rails', Icon: RubyOnRails, url: "https://rubyonrails.org"
        },
        {
            text: 'Mongoose', Icon: Mongoose, url: "https://mongoosejs.com"
        }
    ],
    "frontend": [
        {
            text: 'React.js', Icon: ReactJS, url: "https://react.dev"
        },
        {
            text: 'Angular', Icon: Angular, url: "https://angular.dev"
        },
        {
            text: 'TailwindCSS', Icon: TailwindCSS, url: "https://tailwindcss.com"
        },
        {
            text: 'Redux', Icon: Redux, url: "https://redux.js.org"
        },
        {
            text: 'Formik', Icon: Formik, url: "https://formik.org"
        },
    ],
    "programming-languages": [
        {
            text: 'JavaScript', Icon: JavaScript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
            text: 'TypeScript', Icon: TypeScript, url: "https://www.typescriptlang.org"
        },
        {
            text: 'Python', Icon: Python, url: "https://www.python.org"
        },
        {
            text: 'Java', Icon: Java, url: "https://docs.oracle.com/javase/8/docs/technotes/guides/language/"
        },
        {
            text: 'C', Icon: CLang, url: "https://clang.llvm.org"
        }
    ],
    "databases": [
        {
            text: 'MongoDB', Icon: MongoDB, url: "https://www.mongodb.com"
        },
        {
            text: 'MySQL', Icon: MySQL, url: "https://www.mysql.com"
        },
        {
            text: 'PostgreSQL', Icon: PostgreSQL, url: "https://www.postgresql.org"
        },
        {
            text: 'RxDB', Icon: RxDB, url: "https://rxdb.info"
        },
    ],
    "version-control": [
        {
            text: 'Git', Icon: Git, url: "https://git-scm.com"
        },
        {
            text: 'Github', Icon: Github, url: "https://github.com"
        },
        {
            text: 'Bitbucket', Icon: Bitbucket, url: "https://bitbucket.org/product/"
        },
    ],
    "cloud": [
        {
            text: 'Google cloud platform', Icon: GCP, url: "https://cloud.google.com/"
        },
        {
            text: 'Amazon web services', Icon: AWS, url: "https://aws.amazon.com"
        },
        {
            text: 'Supabase', Icon: Supabase, url: "https://supabase.com"
        },
        {
            text: 'Firebase', Icon: Firebase, url: "https://firebase.google.com"
        },
        {
            text: 'Atlassian', Icon: Atlassian, url: "https://www.atlassian.com"
        },
    ],
    "design": [
        {
            text: 'Figma', Icon: Figma, url: "https://www.figma.com"
        },
        {
            text: 'AdobeXD', Icon: AdobeXD, url: "https://adobexdplatform.com"
        },
        {
            text: 'Canva', Icon: Canva, url: "https://www.canva.com"
        },
    ],
    "project-management": [
        {
            text: 'ClickUp', Icon: ClickUp, url: "https://clickup.com"
        },
        {
            text: 'Jira', Icon: Jira, url: "https://www.atlassian.com/es/software/jira"
        },
    ],
    "soft-skills": [
        {
            text: 'Problem solving', Icon: ProblemSolving, url: ""
        },
        {
            text: 'Process optimization', Icon: ProcessOptimization, url: ""
        },
    ],
    "methodologies": [
        {
            text: 'SCRUM', Icon: Scrum, url: "https://www.scrum.org"
        },
        {
            text: 'Agile', Icon: Agile, url: "https://www.agilealliance.org/agile101/"
        },
        {
            text: 'Design thinking', Icon: DesignThinking, url: "https://designthinking.ideo.com"
        },
    ],
    "speaking-languages": [
        {
            text: "English", Icon: UkUsa, url: "https://www.cambridgeenglish.org/learning-english/"
        },
    ]
    // "soft-skills": ["Resolución de problemas", "Optimización de procesos"],
};