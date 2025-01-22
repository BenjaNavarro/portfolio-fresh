import { MutableRef, useContext, useState } from "preact/hooks";
import emailjs from '@emailjs/browser';

import { LanguageContext } from "../context/languageContext.tsx";
declare interface ComponentProps {
    ref: MutableRef<HTMLFormElement | null>;
};

export default function Contact({ ref }: ComponentProps) {
    const { dictionary } = useContext(LanguageContext);
    const [formFields, setFormFields] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleChange = (e: InputEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = async(e: SubmitEvent) => {
        setIsSubmitting(true);
        e.preventDefault();
        const formParent = e.submitter?.parentElement as HTMLFormElement;

        await emailjs
            .sendForm('service_rcenz4i', 'template_tumip9o', formParent , {
                publicKey: 'tUo1mvYob1Xb4AeRG',
            })
            .then(
                (res: unknown) => {                    
                    console.log('SUCCESS?', res);
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            ).finally(() => setIsSubmitting(false));
    };

    return (
        <form 
            class={`flex flex-col w-full justify-center items-center xl:items-start px-8 md:px-32 mt-16 md:mt-32 mb-8 gap-4`}
            onSubmit={handleSubmit} 
            {...{ref}}
        >
            <h2 class={`text-left w-full text-2xl font-semibold my-4 after:content-[':']`}>{dictionary.contact.title}</h2>
            <div class={`flex flex-col w-full`}>
                <input 
                    name={'user_name'}
                    id={'user_name'}
                    class={`w-full 2xl:w-1/3 p-2 focus:outline-none border-b border-[var(--text-color)] bg-[var(--background-color)] peer`}
                    type="text"
                    value={formFields.user_name}
                    required
                    onInput={handleChange}
                />
                <label 
                    for="user_name"
                    class={`relative pointer-events-none transition-[0.2s_ease_all] left-2 bottom-8 peer-focus:bottom-[3.625rem] peer-focus:text-xs peer-valid:bottom-[3.625rem] peer-valid:text-xs`}
                >
                    {dictionary.contact.form.name}
                </label>
            </div>
            <div class={`flex flex-col w-full`}>
                <input 
                    name={'user_email'}
                    id={"user_email"}
                    class={`w-full 2xl:w-1/3 p-2 focus:outline-none border-b border-[var(--text-color)] bg-[var(--background-color)] peer`}
                    type="email" 
                    required
                    onInput={handleChange}
                    value={formFields.user_email}
                />
                <label 
                    for="user_email"
                    class={`relative pointer-events-none transition-[0.2s_ease_all] left-2 bottom-8 peer-focus:bottom-[3.625rem] peer-focus:text-xs peer-valid:bottom-[3.625rem] peer-valid:text-xs`}
                >
                    {dictionary.contact.form.email}
                </label>
            </div>
            <div class={`flex flex-col w-full`}>
                <textarea 
                    class={`w-full 2xl:w-1/3 p-2 focus:outline-none border-b border-[var(--text-color)] bg-[var(--background-color)] peer h-32 resize-none`}
                    required
                    name={'message'}
                    id={'message'}
                    onInput={handleChange}
                    maxlength={300}
                    value={formFields.message}
                />
                <label 
                    class={`relative pointer-events-none transition-[0.2s_ease_all] left-2 bottom-8 peer-focus:bottom-36 peer-focus:text-xs peer-valid:bottom-36 peer-valid:text-xs`}
                    for="message"
                >
                    {dictionary.contact.form.message}
                </label>
                <span
                    class={`text-xs ${formFields.message.length > 300 ? 'text-red-500': ''}`}
                >
                    {`${formFields.message.length}/300`}
                </span>
            </div>
            <button 
                type="submit"
                disabled={isSubmitting}
                class={`w-full 2xl:w-1/3 p-2 rounded bg-[var(--text-color)] text-[var(--background-color)] hover:bg-neutral-800 dark:hover:bg-neutral-500`}
            >
                {dictionary.contact.form.button}
            </button>
        </form>
    );
}
