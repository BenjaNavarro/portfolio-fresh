import { MutableRef } from "preact/hooks";
import ConsoleLog from "../components/ConsoleLog.tsx";

declare interface ComponentProps {
  ref: MutableRef<HTMLElement | null>;
}

export default function Start({ ref }: ComponentProps) {
  return (
    <section 
      class={`min-h-[calc(100vh-12vh)] md:min-h-[calc(100vh-8vh)] flex flex-col justify-center items-center`}
      ref={ref}
    >
      <div class={`flex w-full justify-center md:justify-start items-center text-2xl sm:text-3xl mb-24`}>
        <code class={`md:ml-[25%]`}>{"{"} Benjamin {"}"}</code><p class={`ml-3`}>Navarro</p>
      </div>
      <ConsoleLog />
    </section>
  );
}
