import { JSX } from "preact";

export default function Bitbucket(props: JSX.HTMLAttributes<SVGSVGElement>) {
    return (
        <svg
            width={800}
            height={800}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            {...props}
        >
            <path
                fill="#2684FF"
                fillRule="evenodd"
                d="M1.403 2.15A.43.43 0 0 1 1.73 2l12.54.002a.43.43 0 0 1 .424.496l-1.81 11.135a.43.43 0 0 1-.425.36H3.693a.585.585 0 0 1-.568-.478l-1.82-11.02a.43.43 0 0 1 .098-.345m5.203 7.814H9.41l.677-3.93H5.859z"
                clipRule="evenodd"
            />
            <path
                fill="#0052CC"
                d="M14.122 6.033H10.1l-.67 3.931H6.604L3.317 13.86c.105.09.238.139.376.14h8.766a.43.43 0 0 0 .425-.36z"
            />
        </svg>
    )
}
