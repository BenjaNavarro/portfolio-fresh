import { JSX } from "preact";

export default function GitLab(props: JSX.HTMLAttributes<SVGSVGElement>) {
    return (
        <svg
            width={800}
            height={800}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {/* <title>{"file_type_gitlab"}</title> */}
            <path
                style={{
                    fill: "#e24329",
                }}
                d="m16 28.896 5.156-15.867H10.844z"
            />
            <path
                style={{
                    fill: "#fc6d26",
                }}
                d="m16 28.896-5.156-15.867H3.619z"
            />
            <path
                d="m3.619 13.029-1.567 4.822a1.07 1.07 0 0 0 .388 1.193L16 28.9z"
                style={{
                    fill: "#fca326",
                }}
            />
            <path
                d="M3.619 13.029h7.225L7.739 3.473a.534.534 0 0 0-1.015 0z"
                style={{
                    fill: "#e24329",
                }}
            />
            <path
                style={{
                    fill: "#fc6d26",
                }}
                d="m16 28.896 5.156-15.867h7.225z"
            />
            <path
                d="m28.381 13.029 1.567 4.822a1.07 1.07 0 0 1-.388 1.193L16 28.9z"
                style={{
                    fill: "#fca326",
                }}
            />
            <path
                d="M28.381 13.029h-7.225l3.105-9.557a.534.534 0 0 1 1.015 0z"
                style={{
                    fill: "#e24329",
                }}
            />
        </svg>
    )
}