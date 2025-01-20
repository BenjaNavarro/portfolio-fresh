import en from './en.json' with { type: "json" };
import es from './es.json' with { type: "json" };
import { LangType } from "../types.d.ts";

export const dictionaries: Record<
    LangType, typeof en | typeof es
> = {
    "en": en,
    "es": es,
};