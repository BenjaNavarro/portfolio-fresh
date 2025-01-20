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
    >
      <div class={`flex w-full justify-start items-center md:pr-96`}>
        <p class={`w-full text-left font-semibold`}>{`{`}<br />
          <span class={`mr-2 text-lg ml-4 md:ml-10`}>{` ${dictionary.about.greet} 🙂`}</span>: <br />
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
          <span class={``}>{`}`}</span>
        </p>
      </div>
    </Layout>
  );
}