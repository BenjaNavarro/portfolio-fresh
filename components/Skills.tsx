import { MutableRef, useContext } from "preact/hooks";
import { LanguageContext } from "../context/languageContext.tsx";
import Layout from "./Layout.tsx";
import { skillSet } from "../utils/skillsSet.ts";
import { SkillsContents } from "../types.d.ts";

declare interface ComponentProps {
    ref: MutableRef<HTMLElement | null>;
};

export default function Skills({
    ref
}: ComponentProps) {
    const { dictionary } = useContext(LanguageContext);
    const skillsContents: SkillsContents = dictionary.skills.contents;
    return (
        <Layout
            {...{ref}}
            title={dictionary.skills.title}
        >
            <div class={`flex flex-wrap justify-between gap-4 w-full`}>
                {Object.keys(skillsContents).map((key) => (
                    <div 
                        key={key}
                        class={`flex flex-col 2xl:flex-row items-center w-full 2xl:w-[40%] border-b-[3px] border-primary`}
                    >
                        <span 
                            class={`text-nowrap text-left w-full 2xl:w-1/2 after:content-[':']`}
                        >{skillsContents[key].title}</span>
                        <ul class={`flex w-full 2xl:w-1/2 items-center justify-start 2xl:justify-end gap-2 p-2`}>
                            {skillSet[key].map((skill, index) => (
                                <li key={index} class={`w-auto`}>
                                    <a 
                                        href={skill.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        label={skill.text}
                                        title={skill.text}
                                        class={`flex justify-center items-center hover:-translate-y-1 transition-transform duration-150 w-full`}
                                    >
                                        <skill.Icon class={`w-8 h-8 cursor-inherit`}/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
