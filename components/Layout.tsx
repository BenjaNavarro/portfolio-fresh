import { ComponentChildren } from "preact";
import { MutableRef } from "preact/hooks";

declare interface ComponentProps {
    children: ComponentChildren;
    title: string;
    ref?: MutableRef<HTMLElement | null>;
};

export default function Layout({
    children, title, ref
}: ComponentProps) {
    return (
        <section 
            class={`flex flex-col w-full justify-center items-center px-8 md:px-32 mt-16 md:mt-32 gap-4`}
            {...{ref}}
        >
            <h1 class={`text-2xl font-semibold text-left w-full`}>{title}</h1>
            {children}
        </section>
    );
}
