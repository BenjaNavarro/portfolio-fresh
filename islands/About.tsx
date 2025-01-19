import { MutableRef, useContext } from "preact/hooks";
import { LanguageContext } from "../context/languageContext.tsx";

declare interface ComponentProps {
  ref: MutableRef<HTMLElement | null>;
}

export default function About({ ref }: ComponentProps) {
  const { dictionary } = useContext(LanguageContext);
  return (
    <section 
      ref={ref}
      id={`about`}
      class={`flex items-start px-8 md:px-32 mt-24 md:mt-32 flex-col w-full gap-4`}
    >
      <h2 class={`text-2xl font-semibold my-4`}>{dictionary.about.title}</h2>
      <div class={`flex w-full justify-start items-center md:pr-96`}>
        <p class={`w-full text-left font-semibold`}>{`{`}<br />
          <span class={`mr-2 text-lg ml-4 md:ml-10`}>{` ${dictionary.about.greet} 🙂`}</span>: <br />
          <span class={`ml-4 md:ml-10 flex text-left md:text-justify md:tracking-wide md:leading-7 `}>
            {dictionary.about.paragraph}
          </span>
          <span class={``}>{`}`}</span>
        </p>
      </div>
    </section>
  );
}