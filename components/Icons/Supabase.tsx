import { JSX } from "preact";

export default function Supabase(props: JSX.HTMLAttributes<SVGSVGElement>) {
    return (
        <svg
            width={256}
            height={263}
            viewBox="0 0 256 263"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            {...props}
        >
            <defs>
                <linearGradient
                    x1="20.862%"
                    y1="20.687%"
                    x2="63.426%"
                    y2="44.071%"
                    id="a"
                >
                    <stop stopColor="#249361" offset="0%" />
                    <stop stopColor="#3ECF8E" offset="100%" />
                </linearGradient>
                <linearGradient
                    x1="1.991%"
                    y1="-13.158%"
                    x2="21.403%"
                    y2="34.708%"
                    id="b"
                >
                    <stop offset="0%" />
                    <stop stopOpacity={0} offset="100%" />
                </linearGradient>
            </defs>
            <path
                d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                fill="url(#a)"
            />
            <path
                d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                fillOpacity={0.2}
                fill="url(#b)"
            />
            <path
                d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                fill="#3ECF8E"
            />
        </svg>
    );
}
