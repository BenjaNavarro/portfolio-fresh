import { MutableRef, useContext, useRef, useState } from "preact/hooks";
import { LanguageContext } from "../context/languageContext.tsx";
import Layout from "./Layout.tsx";

declare interface ComponentProps {
    ref: MutableRef<HTMLElement | null>;
};

export default function Formation({
    ref
}: ComponentProps) {
    const { dictionary, language } = useContext(LanguageContext);
    const [show, setShow] = useState<boolean>(false);
    const paragraphRef = useRef<HTMLParagraphElement | null>(null);

    const toggleShow = () => {
        setShow(!show);
        paragraphRef.current?.classList.toggle('max-h-0');
        paragraphRef.current?.classList.toggle('max-h-screen');
    };

    const handleLearnMore: Record<string,string> = {
        "es": "Saber más",
        "en": "Learn more"
    } as const;

    return (
        <Layout
            ref={ref}
            title={dictionary.formation.title}
        >
            <div class={`flex flex-col md:flex-row w-full justify-between border-b-[3px] p-1 border-[var(--text-color)] gap-1`}>
                <h3 class={`md:text-lg text-left`}>{dictionary.formation.bachelor.title}</h3>
                <span class={`text-sm md:text-lg text-left md:text-right`}>{dictionary.formation.bachelor.description}</span>
            </div>
            <div class={`flex flex-col md:flex-row w-full justify-between border-b-[3px] p-1 border-[var(--text-color)] gap-1`}>
                <div class={`gap-1 flex items-center`}>
                    <button 
                        type={`button`}
                        class={`hidden md:flex text-3xl font-bold hover:animate-bounce`} 
                        onClick={toggleShow}
                        title={`${show ? '': ''}`}
                    >
                        {!show && '↓'}
                        {show && '↑'}
                    </button>
                    <h3 class={`md:text-lg text-left`}>{dictionary.formation.lang.title}</h3>
                </div>
                <span class={`text-sm md:text-lg text-left md:text-right`}>{dictionary.formation.lang.subtitle}</span>
            </div>
            <button 
                type={`button`}
                class={`md:hidden self-start`}
                onClick={toggleShow}
            >
                <span class={`decoration-inherit text-sm`}>
                    {language === "en" && show && "Show less"}
                    {language === "en" && !show && "Show more"}
                    {language === "es" && show && "Ver menos"}
                    {language === "es" && !show && "Ver más"}
                </span>
            </button>
            <p 
                ref={paragraphRef}
                class={`w-full font-light text-justify transition-all overflow-hidden max-h-0 ease-in-out duration-700`}
            >
                {dictionary.formation.lang.description}
                <br />
                <a 
                    class={`font-semibold text-left flex w-fit items-center hover:border-b hover:border-[var(--text-color)] gap-2`}
                    href={dictionary.formation.lang.link}
                    aria-description={handleLearnMore[language]}
                    title={handleLearnMore[language]}
                >
                    {handleLearnMore[language]}
                    <span class={`text-3xl align-middle`}>→</span>
                </a>
            </p>
        </Layout>
    );
}
