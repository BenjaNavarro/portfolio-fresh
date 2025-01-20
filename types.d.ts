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
        backend: string[],
        frontend: string[],
        "version-control": string[],
        cloud: string[],
        "programming-languages": string[],
        design: string[],
        "project-management": string[],
        "soft-skills": string[],
        "speaking-languages": string[],
        methodologies: string[]
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

export type LangType = "en" | "es";