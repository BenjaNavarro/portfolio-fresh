import { MutableRef, useContext } from "preact/hooks";
import { LanguageContext } from "../context/languageContext.tsx";
import ExperienceItem from "../components/ExperienceItem.tsx";
import Layout from "../components/Layout.tsx";

declare interface ComponentProps {
  ref: MutableRef<HTMLElement | null>;
}

export default function Experience({ ref }: ComponentProps) {
  const { dictionary, language } = useContext(LanguageContext);
  return (
    <Layout
      title={`${dictionary.experience.title}`}
      ref={ref}
    >
      <ul class={`w-full`}>
        {dictionary.experience.exp.map((item, index) => (
          <ExperienceItem key={index} {...{item}} {...{language}}/>
        ))}
      </ul>
      <div class={`flex w-full justify-start items-center`}>
        <h3 class={`text-left text-xl w-auto after:content-[':'] after:border-none border-b border-[inherit]`}>
          {language === "en" && "Achievements"}
          {language === "es" && "Logros"}
        </h3>
      </div>
      <ul class={`flex flex-col gap-4 justify-start w-full`}>
        {dictionary.experience.achievements.map((ach, index) => (
          <li 
            class={`before:content-['$:'] before:m-2 w-full`}
            key={index}
          >
            {ach}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
