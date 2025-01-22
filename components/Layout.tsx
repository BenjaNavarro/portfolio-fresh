import { JSX } from "preact";

declare interface ComponentProps extends JSX.HTMLAttributes<HTMLElement> {
    title: string;
};

export default function Layout({
    children, title, class: className, ...props
}: ComponentProps) {
    return (
        <section 
            class={`flex flex-col w-full justify-center items-center px-8 md:px-32 mt-16 md:mt-32 gap-4 ${className || ""}`}
            {...props}
        >
            <h1 class={`text-2xl font-semibold text-left w-full after:content-[':']`}>{title}</h1>
            {children}
        </section>
    );
}
