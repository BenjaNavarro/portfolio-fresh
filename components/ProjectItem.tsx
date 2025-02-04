import { asset } from "$fresh/runtime.ts";
import { useContext } from "preact/hooks";
import { LanguageContext } from "../context/languageContext.tsx";

declare interface ComponentProps {
    project: {
        name: string;
        repo: string;
        url?: string;
        description: {
            en: string;
            es: string;
        };
        stack: string[];
        image?: string;
    }
};

export default function ProjectItem({
    project
}: ComponentProps) {
    const { language } = useContext(LanguageContext);
    return (
        <a 
            class={`group w-full xl:w-1/4 flex flex-col gap-2`}
            href={project.url || "#"}
            target={`_blank`}
            rel={`noopener noreferrer`}
            title={`${project.name} | ${project.description[language]}`}
        >
            <div class={`w-full block`}>
                <img 
                    src={asset(`${project.image || "mockup.jpg"}`)} 
                    loading={`lazy`} 
                    alt={`mockup`}
                    class={`w-full h-48 object-cover object-top rounded-sm group-hover:scale-105 transition-transform duration-300 group-hover:border`}
                >

                </img>
            </div>
            <div class={`w-full flex flex-col gap-2`}>
                <div class={`flex justify-between items-center`}>
                    <h3 class={`text-lg font-bold`}>{project.name}</h3>
                    <object class={``}>
                        <a 
                            href={project.repo} 
                            target={`_blank`} 
                            rel={`noopener noreferrer`}
                            class={`text-xs text-[var(--background-color)] cursor-pointer rounded-lg bg-[var(--text-color)] px-1`}
                        >
                            Github
                        </a>
                    </object>
                </div>
                <p class={`text-sm`}>{project.description[language]}</p>
                <div class={`flex flex-wrap gap-4 justify-start items-center`}>
                    {project.stack.map((tech, index) => (
                        <span key={index} class={`text-xs`}>{tech}</span>
                    ))}
                </div>
            </div>
        </a>
    );
}
