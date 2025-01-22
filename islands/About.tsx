import { MutableRef, useContext } from "preact/hooks";
import { LanguageContext } from "../context/languageContext.tsx";
import Layout from "../components/Layout.tsx";

declare interface ComponentProps {
  ref: MutableRef<HTMLElement | null>;
}

export default function About({ ref }: ComponentProps) {
  const { dictionary } = useContext(LanguageContext);

  const parts = dictionary.about.paragraph.split(" ");
  const keyWords = [
    { label: "Node.js,", style: "text-slate-500" },
    { label: "MongoDB,", style: "text-green-500" },
    { label: "Express,", style: "text-lime-500" },
    { label: "MySQL,", style: "text-blue-500" },
    { label: "React.js,", style: "text-cyan-400" }, //english
    { label: "React.js", style: "text-cyan-400" }, //spanish
    { label: "TailwindCSS,", style: "text-sky-400" },
  ];

  return (
    <Layout
      title={dictionary.about.title}
      ref={ref}
      class={`gap-0`}
    >
      <span class={`w-full text-left text-lg`}>{`{`}</span>
      <span class={`w-full text-left text-lg ml-4 md:ml-10 after:content-[':']`}>{` ${dictionary.about.greet} 🙂`}</span>
      <p class={`w-full ml-4 md:ml-10 text-justify`}>
        {parts.map((word, index) => {
          const keyword = keyWords.find(kw => kw.label === word);
          if (keyword) {
            return (
              <span key={index} class={keyword.style}>
                {word}{" "}
              </span>
            );
          }
          return word + " ";
        })}
      </p>
      <span class={`w-full text-left text-lg`}>{`}`}</span>
    </Layout>
  );
}