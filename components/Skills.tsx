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
                        class={`flex flex-col md:flex-row items-center w-full md:w-[40%] border-b-[3px] border-primary`}
                    >
                        <span 
                            class={`text-nowrap text-left w-full md:w-1/2 after:content-[':']`}
                        >{skillsContents[key].title}</span>
                        <ul class={`flex w-full md:w-1/2 items-center justify-start md:justify-end gap-2 p-2`}>
                            {skillSet[key].map((skill, index) => (
                                <li key={index}>
                                    <a 
                                        href={skill.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        label={skill.text}
                                        title={skill.text}
                                        class={`flex justify-center items-center`}
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
