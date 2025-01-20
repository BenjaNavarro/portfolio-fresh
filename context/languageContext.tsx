import { ComponentChildren, createContext } from "preact";
import { StateUpdater, useState, Dispatch } from "preact/hooks";
import { dictionaries } from "../utils/dictionaries.ts";
import { Dictionary, LangType } from "../types.d.ts";

declare interface IContext{
    language: LangType,
    setLanguage: Dispatch<StateUpdater<LangType>>,
    dictionary: Dictionary,
};

export const LanguageContext = createContext<IContext>({
    language: "en",
    setLanguage: () => {},
    dictionary: dictionaries.en,
});

export const LanguageProvider = ({ children }: { children: ComponentChildren }) => {
    const [language, setLanguage] = useState<LangType>("en");

    const value = {
        language,
        setLanguage,
        dictionary: dictionaries[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};