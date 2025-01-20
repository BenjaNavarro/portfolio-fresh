export default function Button() {
    const handleClick = () => {
        location.pathname = '/';
    }

    return (
        <button 
            onClick={handleClick}
            class={`text-lg border-b border-primary font-bold hover:scale-110 transition-transform`}
        >
            <span class={`text-5xl mr-6`}>←</span>
            <span>Volver.</span>
        </button>
    );
}
