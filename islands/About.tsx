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
      class={`flex w-full justify-start items-center px-12 md:px-72 mt-64`}
    >
      <p class={`w-full text-left font-semibold`}>{`{`}<br />
        <span class={`font-bold mr-2 text-lg md:ml-10`}>{` ${dictionary.about.greet} 🙂`}</span>: <br />
        <span class={`md:ml-10 flex text-justify tracking-normal md:tracking-wide leading-4 md:leading-7 `}>
          {dictionary.about.paragraph}
        </span>
        <span class={``}>{`}`}</span>
      </p>
    </section>
  );
}