// Define a custom type for the refs that includes the base property
export type CustomRef = { base: HTMLElement | null };

export type Dictionary = {
    start: {
        greet: string,
    },
    navbar: {
        NavOptions: { label: string, name: string }[],
    };
    about: {
        title: string,
        greet: string;
        paragraph: string;
    };
    experience: {
        title: string,
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