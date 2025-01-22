import { JSX } from "preact";

export default function FreshJS(props: JSX.HTMLAttributes<SVGSVGElement>) {
    return (
        <svg
            aria-hidden="true"
            width={150}
            height={150}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx={18} cy={891.969} r={4} fill="#fff" />
            <path
                d="M84 16c13 27 1 52-7 59 0 4-9 9-12 7-12 5-38-2-53-21-6-7 1-21 21-36 13-10 33-17 51-9"
                fill="#FFD80B"
            />
            <path
                d="M18 63.026c-3 0-2 0-6-2.026l-3-5C2 33 62-3 80 12c23 15-36 44-51 46-2 0-4 1-5 3-4 2.026-3 2.026-6 2.026"
                fill="#fff"
            />
            <path
                d="M69 15c15-1 9 10-6 19L44 44c-2 1-4-2-6 0l-3 6c-3 1-13 3-16 2-5-2-5-9 5-18l7-4c-1-2-1-2 2-5 3-2 19-10 29-11l1 2z"
                fill="#FFED4E"
            />
            <path
                d="M38 35c1-1 3-2 3-4l8-3c0 1-1 3 1 4-2 1-7 1-8 5-1-2-1-2-4-2"
                fill="#fff"
            />
        </svg>
    )
}
