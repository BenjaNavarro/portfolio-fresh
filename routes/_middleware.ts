import { FreshContext } from "$fresh/server.ts";
import es from "../utils/es.json" with { type: "json" };
// Asumimos que tienes un en.json. Si no, usa "es" como fallback siempre.
// import en from "../utils/en.json" with { type: "json" };

export async function handler(_req: Request, ctx: FreshContext) {
  // Aquí podrías leer una cookie 'lang' o el header 'Accept-Language'
  // Por simplicidad, estableceremos 'es' por defecto.
  const lang = "es"; 
  
  // Selecciona el diccionario adecuado (simulado aquí con 'es' por defecto)
  const dictionary = lang === "es" ? es : es; 

  // Guardamos el diccionario y el idioma en el estado para usarlo en SSR
  ctx.state.lang = lang;
  ctx.state.dictionary = dictionary;

  return await ctx.next();
}