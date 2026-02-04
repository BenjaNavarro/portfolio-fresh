import { MutableRef, useContext, useEffect, useMemo, useRef } from "preact/hooks";
import { LanguageContext } from "../context/languageContext.tsx";
import { AsciiArtGenerator, ColorPalette } from "../utils/ASCIIArtGenerator.ts";

declare interface ComponentProps {
  ref: MutableRef<HTMLElement | null>;
}

export default function Start({ ref }: ComponentProps) {
  const { dictionary } = useContext(LanguageContext);
  const asciiRef = useRef<HTMLDivElement | null>(null);

  const nameString = '{ Benjamín } Navarro:';
  const totalLength = useMemo(() => {
    return nameString.length + dictionary.start.greet.length;
  }, [dictionary.start.greet.length]);

  useEffect(() => {
    if (!asciiRef.current) return;

    const gen = new AsciiArtGenerator(asciiRef.current, {
      charSet: ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~',
      size: 120,
      colorPalette: ColorPalette.Grey8Bit,
      charSamples: 3,
      contrast: .5,
      brightness: .1,
      url: '/1748462534417.jpeg',
    });

    return () => {
      gen.destroy();
    };
  }, []);
  
  return (
    <section 
      class={`relative min-h-[calc(100vh-10vh)] md:min-h-[calc(100vh-12vh)] lg:min-h-[calc(100vh-18vh)] xl:min-h-[calc(100vh-16vh)] flex justify-start items-center w-full p-[12%] mb-10 overflow-hidden`}
      ref={ref}
    >
      {/* Fondo ASCII */}
      <div id="ascii" ref={asciiRef} class="ascii-bg" aria-hidden="true" />
      <div class="relative z-10">
        {/** This <div/> avoids the the typing animation to use the full heigth of the screen. */}
        <code 
          class={`type text-4xl text-left select-none`}
          style={{
            '--n': `${totalLength}`,
          }}
        >
          {nameString} {dictionary.start.greet}
        </code>
      </div>
    </section>
  );
}