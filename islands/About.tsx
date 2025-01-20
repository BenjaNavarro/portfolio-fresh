import { MutableRef, useContext } from "preact/hooks";
import { LanguageContext } from "../context/languageContext.tsx";
import Layout from "../components/Layout.tsx";

declare interface ComponentProps {
  ref: MutableRef<HTMLElement | null>;
}

export default function About({ ref }: ComponentProps) {
  const { dictionary } = useContext(LanguageContext);
  return (
    <Layout
      title={dictionary.about.title}
      ref={ref}
    >
      <div class={`flex w-full justify-start items-center md:pr-96`}>
        <p class={`w-full text-left font-semibold`}>{`{`}<br />
          <span class={`mr-2 text-lg ml-4 md:ml-10`}>{` ${dictionary.about.greet} 🙂`}</span>: <br />
          <span class={`ml-4 md:ml-10 flex text-left md:text-justify md:tracking-wide md:leading-7 `}>
            {dictionary.about.paragraph}
          </span>
          <span class={``}>{`}`}</span>
        </p>
      </div>
    </Layout>
  );
}