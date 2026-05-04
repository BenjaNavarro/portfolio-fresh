import { Dictionary } from "../types.d.ts";
import Layout from "./Layout.tsx";
import ProjectItem from "./ProjectItem.tsx";
// import portfolioImg from "portfolio.png" with { type: "module" };

export default function Projects({ dictionary }: { dictionary: Dictionary }) {

    const ProjectsList = [
        // {
        //     name: "Project 1",
        //     repo: "https://github.com",
        //     url: "https://example.com",
        //     description: {
        //         en: "Description in English",
        //         es: "Descripción en Español"
        //     },
        //     stack: [ "React", "TypeScript", "TailwindCSS" ],
        //     // image: "https://via.placeholder.com/150"
        // },
        {
            name: "bnavarro.deno.dev",
            repo: "https://github.com/BenjaNavarro/portfolio-fresh",
            url: "https://bnavarro.deno.dev",
            description: {
                en: "My personal website.",
                es: "Mi sitio web personal."
            },
            stack: [ "Fresh.js", "TypeScript", "TailwindCSS" ],
            image: "portfolio.png"
        }
    ];

    return (
        <Layout
            title={dictionary.projects.title}
        >
            <div class={`flex flex-wrap w-full justify-start items-center gap-8`}>
                {ProjectsList.map((project, index) => (
                    <ProjectItem key={index} {...{project}}/>
                ))}
            </div>
        </Layout>
    );
}
