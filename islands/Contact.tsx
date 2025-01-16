import { MutableRef, useContext, useState } from "preact/hooks";
import emailjs from 'https://esm.sh/@emailjs/browser';

import { LanguageContext } from "../context/languageContext.tsx";
declare interface ComponentProps {
    ref: MutableRef<HTMLFormElement | null>;
};

export default function Contact({ ref }: ComponentProps) {
    const { dictionary } = useContext(LanguageContext);
    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: InputEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        console.log('submit: 🍋‍🟩', formFields);
        console.log('emailjs: ✉️', emailjs);

        // emailjs
        //     .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', ref?.current as HTMLFormElement, {
        //         publicKey: 'YOUR_PUBLIC_KEY',
        //     })
        //     .then(
        //         () => {
        //             console.log('SUCCESS!');
        //         },
        //         (error) => {
        //             console.log('FAILED...', error.text);
        //         },
        //     );
    };

    return (
        <form 
            class={`flex items-start px-8 md:px-32 my-8 flex-col w-full gap-4`} 
            onSubmit={handleSubmit} 
            ref={ref}
        >
            <h2 class={`text-2xl font-semibold my-4`}>{dictionary.contact.title}</h2>
            <div class={`flex flex-col w-full`}>
                <input 
                    name={'name'}
                    class={`w-full md:w-1/3 p-2 focus:outline-none border-b border-[var(--text-color)] bg-[var(--background-color)] peer`}
                    type="text"
                    value={formFields.name}
                    required
                    onInput={handleChange}
                />
                <label 
                    for="name"
                    class={`relative pointer-events-none transition-[0.2s_ease_all] left-2 bottom-8 peer-focus:bottom-[3.625rem] peer-focus:text-xs peer-valid:bottom-[3.625rem] peer-valid:text-xs`}
                >
                    {dictionary.contact.form.name}
                </label>
            </div>
            <div class={`flex flex-col w-full`}>
                <input 
                    name={'email'}
                    class={`w-full md:w-1/3 p-2 focus:outline-none border-b border-[var(--text-color)] bg-[var(--background-color)] peer`}
                    type="email" 
                    required
                    onInput={handleChange}
                    value={formFields.email}
                />
                <label 
                    for="email"
                    class={`relative pointer-events-none transition-[0.2s_ease_all] left-2 bottom-8 peer-focus:bottom-[3.625rem] peer-focus:text-xs peer-valid:bottom-[3.625rem] peer-valid:text-xs`}
                >
                    {dictionary.contact.form.email}
                </label>
            </div>
            <div class={`flex flex-col w-full`}>
                <textarea 
                    class={`w-full md:w-1/3 p-2 focus:outline-none border-b border-[var(--text-color)] bg-[var(--background-color)] peer h-32 resize-none`}
                    required
                    name={'message'}
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
                class={`w-full md:w-1/4 p-2 rounded bg-[var(--text-color)] text-[var(--background-color)] hover:bg-neutral-800 dark:hover:bg-neutral-500`}
            >
                {dictionary.contact.form.button}
            </button>
        </form>
    );
}
