import { MutableRef, useContext } from "preact/hooks";
import { LanguageContext } from "../context/languageContext.tsx";
import Layout from "./Layout.tsx";

declare interface ComponentProps {
    ref: MutableRef<HTMLElement | null>;
}

export default function Skills({
    ref
}: ComponentProps) {
    const { dictionary } = useContext(LanguageContext);
    return (
        <Layout
            {...{ref}}
            title={dictionary.skills.title}
        >
            <></>
        </Layout>
    );
}
