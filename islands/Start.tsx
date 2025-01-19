import { MutableRef, useContext } from "preact/hooks";
import { LanguageContext } from "../context/languageContext.tsx";

declare interface ComponentProps {
  ref: MutableRef<HTMLElement | null>;
}

export default function Start({ ref }: ComponentProps) {
  const { dictionary } = useContext(LanguageContext);

  const nameString = '{ Benjamín } Navarro:';
  const totalLength = nameString.length + dictionary.start.greet.length;
  
  return (
    <section 
      class={`min-h-[calc(100vh-10vh)] md:min-h-[calc(100vh-10vh)] flex justify-center items-center w-full p-[12%]`}
      ref={ref}
    >
      <div class={``}>
        <code 
          class={'type text-4xl text-left'}
          style={{
            '--n': `${totalLength}`,
          }}
        >
          {nameString} {dictionary.start.greet}
        </code>
      </div>
    </section>
  );
}
