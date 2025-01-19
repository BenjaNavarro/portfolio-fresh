import { MutableRef } from "preact/hooks";

declare interface ComponentProps {
    ref: MutableRef<HTMLElement | null>;
}

export default function Projects({
    ref
}: ComponentProps) {
  return (
    <section {...{ref}} class={`flex h-screen w-full justify-center items-center px-32`}>
        <h2 class={`text-2xl font-semibold my-4 text-left w-full`}>Projects</h2>
    </section>
  );
}
