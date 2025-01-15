import { MutableRef } from "preact/hooks";

declare interface ComponentProps {
  ref: MutableRef<HTMLElement | null>;
}

export default function Experience({ ref }: ComponentProps) {
  return (
    <section 
      ref={ref}
      class={`h-screen flex w-full justify-center items-center`}
    >
      Experience
    </section>
  );
}
