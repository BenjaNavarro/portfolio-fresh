import { MutableRef, useState } from "preact/hooks";

declare interface ComponentProps {
    ref: MutableRef<HTMLFormElement | null>;
};

export default function Contact({ ref }: ComponentProps) {
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
    };

    return (
        <form 
            class={`flex items-start px-32 my-8 flex-col w-full gap-4`} 
            onSubmit={handleSubmit} 
            ref={ref}
        >
            <h2 class={`text-2xl font-semibold`}>Contact</h2>
            <div class={`flex flex-col w-full`}>
                <label for="name">Name</label>
                <input 
                    name={'name'}
                    class={`w-1/4 rounded p-2`}
                    type="text" 
                    placeholder="John Doe" 
                    required
                    onInput={handleChange}
                />
            </div>
            <div class={`flex flex-col w-full`}>
                <label for="email">Email</label>
                <input 
                    name={'email'}
                    class={`w-1/4 rounded p-2`}
                    type="email" 
                    placeholder="mail@mail.com" 
                    required
                    onInput={handleChange}
                />
            </div>
            <div class={`flex flex-col w-full`}>
                <label for="message">Message</label>
                <textarea 
                    class={`w-1/3 h-32 p-2 rounded`}
                    placeholder="Message" 
                    required
                    name={'message'}
                    onInput={handleChange}
                    maxlength={300}
                />
            </div>
            <button 
                type="submit"
                class={`w-1/4 p-2 rounded bg-[var(--text-color)] text-[var(--background-color)] hover:bg-neutral-800`}
            >
                Send
            </button>
        </form>
    );
}
