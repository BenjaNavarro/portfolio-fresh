import { MutableRef } from "preact/hooks";
import ConsoleLog from "../components/ConsoleLog.tsx";

declare interface ComponentProps {
  ref: MutableRef<HTMLElement | null>;
}

export default function Start({ ref }: ComponentProps) {
  return (
    <section 
      class={`min-h-[calc(100vh-10vh)] flex flex-col justify-center items-center`}
      ref={ref}
    >
      <div class={`flex w-full justify-start items-center text-3xl`}>
        <code class={`ml-[25%]`}>{"{"} Benjamin {"}"}</code><p class={`ml-3`}>Navarro</p>
      </div>
      <ConsoleLog />
    </section>
  );
}
