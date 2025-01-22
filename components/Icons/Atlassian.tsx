import { JSX } from "preact";

export default function Atlassian(props: JSX.HTMLAttributes<SVGSVGElement>) {
    return (
        <svg
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.1186 14.0842C10.9735 13.8943 10.7399 13.7941 10.5025 13.8199C10.265 13.8457 10.0584 13.9938 9.95749 14.2105L4.07422 25.9816C3.96525 26.1998 3.9769 26.4588 4.10501 26.6662C4.23312 26.8737 4.45943 27 4.70312 27H12.8953C13.1633 27.0062 13.4099 26.8537 13.5242 26.611C15.2913 22.9568 14.2203 17.4006 11.1186 14.0842Z"
                fill="url(#paint0_linear_87_7650)"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.4339 3.37762C12.4515 7.96969 12.1073 13.7944 14.528 18.7062L18.4776 26.6108C18.5966 26.8492 18.8401 26.9998 19.1064 26.9998H27.2971C27.5408 26.9998 27.7671 26.8735 27.8952 26.6661C28.0233 26.4586 28.035 26.1996 27.926 25.9815C27.926 25.9815 16.9068 3.92489 16.6299 3.3732C16.5181 3.14406 16.2853 2.99906 16.0305 3C15.7757 3.00095 15.5439 3.14765 15.4339 3.37762Z"
                fill="#2684FF"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_87_7650"
                    x1={14.3428}
                    y1={15.9009}
                    x2={6.09079}
                    y2={24.759}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0052CC" />
                    <stop offset={0.923} stopColor="#2684FF" />
                </linearGradient>
            </defs>
        </svg>
    );
}
