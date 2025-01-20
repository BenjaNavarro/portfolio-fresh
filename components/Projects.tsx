import { MutableRef, useContext } from "preact/hooks";
import Layout from "./Layout.tsx";
import { LanguageContext } from "../context/languageContext.tsx";

declare interface ComponentProps {
    ref: MutableRef<HTMLElement | null>;
}

export default function Projects({
    ref
}: ComponentProps) {
    const { dictionary } = useContext(LanguageContext);
    return (
        <Layout
            title={dictionary.projects.title}
            ref={ref}
        >
            <></>
        </Layout>
    );
}
