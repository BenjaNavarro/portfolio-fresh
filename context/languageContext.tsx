import { ComponentChildren, createContext } from "preact";
import { StateUpdater, useState, Dispatch } from "preact/hooks";
import { dictionaries } from "../utils/dictionaries.ts";
import { Dictionary } from "../types.d.ts";

declare interface IContext{
    language: 'en' | 'es',
    setLanguage: Dispatch<StateUpdater<'en' | 'es'>>,
    dictionary: Dictionary,
};

export const LanguageContext = createContext<IContext>({
    language: "en",
    setLanguage: () => {},
    dictionary: dictionaries.en,
});

export const LanguageProvider = ({ children }: { children: ComponentChildren }) => {
    const [language, setLanguage] = useState<'en' | 'es'>("en");

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