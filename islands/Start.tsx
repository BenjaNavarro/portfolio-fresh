import { MutableRef } from "preact/hooks";
import ConsoleLog from "../components/ConsoleLog.tsx";

declare interface ComponentProps {
  ref: MutableRef<HTMLElement | null>;
}

export default function Start({ ref }: ComponentProps) {
  return (
    <section 
      class={`min-h-[calc(100vh-12vh)] md:min-h-[calc(100vh-10vh)] flex flex-col justify-center items-center w-full`}
      ref={ref}
    >
      <div class={`flex justify-center md:justify-start items-center w-full text-2xl md:text-2xl mb-24`}>
        <code class={`md:ml-[25%]`}>{"{"} Benjamin {"}"}</code><p class={`ml-2`}>Navarro</p>
      </div>
      <ConsoleLog />
    </section>
  );
}
