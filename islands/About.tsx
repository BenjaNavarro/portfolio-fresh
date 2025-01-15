import { MutableRef } from "preact/hooks";

declare interface ComponentProps {
  ref: MutableRef<HTMLElement | null>;
}

export default function About({ ref }: ComponentProps) {
  return (
    <section 
      ref={ref}
      id={`about`}
      class={`h-screen flex w-full justify-center items-center`}
    >About</section>
  );
}
