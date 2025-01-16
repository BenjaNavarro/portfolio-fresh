// Define a custom type for the refs that includes the base property
export type CustomRef = { base: HTMLElement | null };

export type Dictionary = {
    navbar: {
        NavOptions: { label: string, name: string }[],
    };
    about: {
        greet: string;
        paragraph: string;
    };
    experience: {};
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