import { useRef, useState } from "preact/hooks";

declare interface ComponentProps {
    item: {
        title: string;
        subtitle: string;
        description: string;
        "learn-more": string;
    },
    language: "es" | "en";
}

export default function ExperienceItem({
    item, language
}: ComponentProps) {
    const paragraphRef = useRef<HTMLParagraphElement | null>(null);
    const [show, setShow] = useState<boolean>(false);

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
        <li class={`flex flex-col w-full gap-2 my-8`}>
            <div class={`flex flex-col md:flex-row w-full md:justify-between justify-center items-start md:items-center border-b-[3px] p-1 border-[var(--text-color)]`}>
                <div class={`gap-1 flex items-center`}>
                    <button 
                        class={`hidden md:flex text-3xl font-bold hover:animate-bounce`} 
                        onClick={toggleShow}
                        title={`${show ? '': ''}`}
                    >
                        {!show && '↓'}
                        {show && '↑'}
                    </button>
                    <h3 class={`md:text-lg text-left`}>
                        {item.title}
                    </h3>
                </div>
                <span class={`text-sm md:text-lg text-left md:text-right`}>{item.subtitle}</span>
            </div>
            <button 
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
                class={`font-light text-justify transition-all overflow-hidden max-h-0 ease-in-out duration-700`}
            >
                {item.description}
                <br />
                <a 
                    class={`font-semibold text-left flex w-fit items-center hover:border-b hover:border-[var(--text-color)] gap-2`}
                    href={item["learn-more"]}
                    aria-description={handleLearnMore[language]}
                    title={handleLearnMore[language]}
                >
                    {handleLearnMore[language]}
                    <span class={`text-3xl align-middle`}>→</span>
                </a>
            </p>
        </li>
    );
}
