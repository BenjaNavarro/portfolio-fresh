import { MutableRef, useContext } from "preact/hooks";
import { LanguageContext } from "../context/languageContext.tsx";
import Layout from "./Layout.tsx";
import { skillSet } from "../utils/skillsSet.ts";
import { SkillsContents } from "../types.d.ts";

declare interface ComponentProps {
    ref: MutableRef<HTMLElement | null>;
}

export default function Skills({
    ref
}: ComponentProps) {
    const { dictionary, language } = useContext(LanguageContext);
    const skillsContents: SkillsContents = dictionary.skills.contents;
    return (
        <Layout
            {...{ref}}
            title={dictionary.skills.title}
        >
            <div class={`flex flex-wrap gap-4`}>
                {Object.keys(skillsContents).map((key) => (
                    <div 
                        key={key}
                        class={`flex justify-start items-center gap-8 w-[40%]`}
                    >
                        <span 
                            class={`text-nowrap text-left w-1/2`}
                        >{skillsContents[key].title}</span>
                        <ul class={`flex w-1/2 items-center justify-end gap-2`}>
                            {skillSet[key].map((skill, index) => (
                                <li key={index}>
                                    <a 
                                        href={skill.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        label={skill.text}
                                        title={skill.text}
                                        class={``}
                                    >
                                        <skill.Icon class={`w-8 h-8 cursor-inherit`}/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {/* <div class={`flex flex-wrap justify-start gap-2 w-full`}>
                {skillSet["backend"].map(({Icon, text, url}, index) => (
                    <a 
                        key={index}
                        title={text}
                        href={url}
                    >
                        <Icon class={`w-12 h-12 cursor-inherit`}/>
                    </a>
                ))}
            </div>
            <div class={`flex flex-wrap justify-start gap-2 w-full`}>
                {skillSet["frontend"].map(({Icon, text, url}, index) => (
                    <a 
                        key={index}
                        title={text}
                        href={url}
                    >
                        <Icon class={`w-12 h-12 cursor-inherit`}/>
                    </a>
                ))}
            </div>
            <div class={`flex flex-wrap justify-start gap-2 w-full`}>
                {skillSet["programming-languages"].map(({Icon, text, url}, index) => (
                    <a 
                        key={index}
                        title={text}
                        href={url}
                    >
                        <Icon class={`w-12 h-12 cursor-inherit`}/>
                    </a>
                ))}
            </div>
            <div class={`flex flex-wrap justify-start gap-2 w-full`}>
                {skillSet["databases"].map(({Icon, text, url}, index) => (
                    <a 
                        key={index}
                        title={text}
                        label={text}
                        href={url}
                    >
                        <Icon class={`w-12 h-12 cursor-inherit`}/>
                    </a>
                ))}
            </div>
            <div class={`flex flex-wrap justify-start gap-2 w-full`}>
                {skillSet["speaking-languages"].map(({Icon, text, url}, index) => (
                    <a 
                        key={index}
                        title={text}
                        label={text}
                        href={url}
                    >
                        <Icon class={`w-12 h-12 cursor-inherit`}/>
                    </a>
                ))}
            </div> */}
        </Layout>
    );
}
