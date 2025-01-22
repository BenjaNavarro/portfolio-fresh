import { createElement } from "preact";

// Define a custom type for the refs that includes the base property
export type CustomRef = { base: HTMLElement | null };

export type Dictionary = {
    start: {
        greet: string,
    },
    navbar: {
        NavOptions: { label: string, name: string }[],
        lang: string,
        theme: string,
    };
    about: {
        title: string,
        greet: string;
        paragraph: string;
    };
    experience: {
        title: string,
        exp: {
            title: string,
            subtitle: string,
            description: string,
            "learn-more": string,
        }[],
        achievements: string[]
    },
    skills: {
        title: string,
        contents: SkillsContents,
        // contents: {
        //     "backend": ContentType,
        //     "frontend": ContentType,
        //     "version-control": ContentType,
        //     "cloud": ContentType,
        //     "programming-languages": ContentType,
        //     "design": ContentType,
        //     "project-management": ContentType,
        //     "soft-skills": ContentType,
        //     "speaking-languages": ContentType,
        //     "methodologies": ContentType
        // },
    },
    formation: {
        title: string,
        bachelor: {
            title: string,
            description: string,
        },
        lang: {
            title: string,
            subtitle: string,
            description: string,
            link: string,
        },
    };
    projects: {
        title: string;
    };
    contact: {
        title: string,
        form: {
            name: string,
            email: string,
            message: string,
            button: string,
        }
    };
    footer: {
        $fresh: string,
        rights: string,
    };
};

export type ContentType = {
    title: string
};

export type SkillItem = {
    text: string;
    Icon: (props: createElement.JSX.HTMLAttributes<SVGSVGElement>) => createElement.JSX.Element;
    url: string;
};
  
export type SkillsContents = {
    [key: string]: ContentType;
};

export type SkillSet = {
    [key: string]: SkillItem[];
};

export type LangType = "en" | "es";