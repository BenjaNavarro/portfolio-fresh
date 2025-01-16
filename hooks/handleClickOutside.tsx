import { MutableRef, useEffect } from "preact/hooks";

/**
 * This hook is used to close a dialog when clicking outside of it.
 * @param dialogRef - The dialog reference.
 */
export function useOutsideClickClose(dialogRef: MutableRef<HTMLDialogElement | null>) {
    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
        function handleClickOutside(event: MouseEvent) {
            // Test if click outside
            if (dialogRef.current && !dialogRef.current.contains(event?.target as Node)) {
                // Test if dialog open
                if (dialogRef?.current?.open) {
                    dialogRef?.current?.close();
                }
            }
        }
    })
}