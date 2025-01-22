import en from './en.json' with { type: "json" };
import es from './es.json' with { type: "json" };
import { Dictionary, LangType } from "../types.d.ts";

export const dictionaries: Record<
    LangType, Dictionary
> = {
    "en": en,
    "es": es,
};