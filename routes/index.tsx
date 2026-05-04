import { PageProps } from "$fresh/server.ts";
import Projects from "../components/Projects.tsx";
import Contact from "../islands/Contact.tsx";
import Footer from "../components/Footer.tsx";
import { Dictionary, LangType } from "../types.d.ts";
import Navbar from "../islands/Navbar.tsx";
import Experience from "../islands/Experience.tsx";
import About from "../islands/About.tsx";

export default function Home(props: PageProps) {
  // Extraemos el diccionario que el middleware preparó en el servidor
  const { dictionary, lang } = props.state as { dictionary: Dictionary; lang: LangType };

  return (
    <main class="contents">
      {/* Usa IDs nativos para el scroll. Ej: href="#projects" en tu Navbar irá aquí directamente */}
      
      <Navbar dictionary={dictionary} language={lang} />
      <About dictionary={dictionary} id="about" />
      <Experience dictionary={dictionary} language={lang} id="experience" />
      
      <div id="projects">
        <Projects dictionary={dictionary} />
      </div>
      <Contact dictionary={dictionary} language={lang} />
      <Footer dictionary={dictionary} />
    </main>
  );
}
