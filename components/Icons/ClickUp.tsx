import { JSX } from "preact";

export default function ClickUp(props: JSX.HTMLAttributes<SVGSVGElement>) {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path 
                d="m2 18.439 3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439M12.04 6.15l-6.568 5.66-3.036-3.52L12.055 0l9.543 8.296-3.05 3.509z" 
                fill={`currentColor`}
            />
        </svg>
    );
}
