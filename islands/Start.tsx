import { MutableRef } from "preact/hooks";

declare interface ComponentProps {
  ref: MutableRef<HTMLElement | null>;
}

export default function Start({ ref }: ComponentProps) {
  return (
    <section 
      class={`min-h-[calc(100vh-10vh)] flex w-full justify-start items-center text-2xl`}
      ref={ref}
    >
      <code class={`ml-[25%]`}>{"{"} Benjamin {"}"}</code><p class={`ml-3`}>Navarro</p>
    </section>
  );
}
