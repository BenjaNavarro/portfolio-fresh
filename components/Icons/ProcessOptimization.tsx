import { JSX } from "preact";

export default function ProcessOptimization(props: JSX.HTMLAttributes<SVGSVGElement>) {
    return (
        <svg
            height={800}
            width={800}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
            {...props}
        >
            <path 
                d="M17 24V11h6v13zm2-11v9h2v-9zm-4 11H9v-8h6zm-4-2h2v-4h-2zm-4 2H1v-6h6zm-4-2h2v-2H3zm-2-6v-2c7.8 0 12.8-3.4 16.1-10.9l-4.3 1.7-.8-1.9L19.5 0l3 7.2-1.9.8-1.7-4.2C15.3 12.1 9.6 16 1 16" 
                fill={`currentColor`}
            />
        </svg>
    );
}
