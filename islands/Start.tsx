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
      class={`min-h-[calc(100vh-10vh)] md:min-h-[calc(100vh-12vh)] lg:min-h-[calc(100vh-18vh)] xl:min-h-[calc(100vh-16vh)] flex justify-center items-center w-full p-[12%] mb-10`}
      ref={ref}
    >
      <div>
      {/**
       * This <div/> avoids the the typing animation to use the full heigth of the screen.
       */}
        <code 
          class={`type text-4xl text-left select-none`}
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
