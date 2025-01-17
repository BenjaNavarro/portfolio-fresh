import { MutableRef, useContext } from "preact/hooks";
import { LanguageContext } from "../context/languageContext.tsx";

declare interface ComponentProps {
  ref: MutableRef<HTMLElement | null>;
}

export default function Experience({ ref }: ComponentProps) {
  const { dictionary } = useContext(LanguageContext);
  return (
    <section 
      ref={ref}
      class={`h-screen flex w-full justify-center items-center`}
    >
      <h2 class={`text-2xl font-semibold my-4`}>{dictionary.experience.title}</h2>
    </section>
  );
}
