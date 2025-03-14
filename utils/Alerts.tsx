import Swal from 'sweetalert2';
import { LangType } from "../types.d.ts";

/**
 * Layout principal de alertas
 * @description Configuración de la librería SweetAlert2
 */
export const Alert = Swal.mixin({
	customClass: {
		cancelButton:
			'hover:font-semibold transition duration-400 text-center text-sm 2xl:text-base',
		confirmButton:
			'ml-2 hover:font-semibold transition duration-400 text-sm 2xl:text-base',
		title: 'font-bold text-lg 2xl:text-xl',
		htmlContainer: 'rounded-none rounded-t-xl p-2',
		closeButton:
			'flex justify-end mb-1 pr-4 w-full rounded-none rounded-t-xl',
		icon:
			'after:animate-none',
		container: 'rounded-none rounded-t-xl p-2',
		popup: 'rounded-none rounded-t-xl p-2',
	},
	buttonsStyling: false,
	confirmButtonText: 'Continuar',
	reverseButtons: true,
	showCloseButton: true,
});

export const LoadingAlert = (lang: LangType) => {

	const theme = globalThis?.document.documentElement.classList.contains('dark') ? 'dark' : 'light';

	Alert.fire({
		title: lang === 'es' ? 'Cargando...' : 'Loading...',
		allowEscapeKey: false,
		allowOutsideClick: false,
		showCloseButton: false,
		background: theme === 'light' ? '#111111': '#eeeeee',
		color: theme === 'light' ? '#eeeeee' : '#111111',
		iconColor: theme === 'light' ? '#eeeeee' : '#111111',
		didOpen: () => {
			Alert.showLoading();
		}
	})
};

export const ConfirmationAlert = (texto: string = '', title: string = '¿Está Seguro?', lang: LangType) => {

	const theme = globalThis?.document.documentElement.classList.contains('dark') ? 'dark' : 'light';

	return Alert.mixin({
		title: title,
		html: texto,
		icon: 'question',
		confirmButtonText: lang === 'es' ? 'Aceptar' : 'Ok',
		showCancelButton: true,
		cancelButtonText: lang === 'es' ? 'Cancelar' : 'Cancel',
		background: theme === 'light' ? '#111111': '#eeeeee',
		color: theme === 'light' ? '#eeeeee' : '#111111',
		iconColor: theme === 'light' ? '#eeeeee' : '#111111',
	});
};

export const SuccessAlert = (title: string = 'Éxito', texto: string = '', lang: LangType) => {

	const theme = globalThis?.document.documentElement.classList.contains('dark') ? 'dark' : 'light';

	return Alert.mixin({
		icon: 'success',
		title: title,
		html: texto,
		confirmButtonText: lang === 'es' ? 'Continuar': 'Continue',
		background: theme === 'light' ? '#111111': '#eeeeee',
		color: theme === 'light' ? '#eeeeee' : '#111111',
		iconColor: theme === 'light' ? '#eeeeee' : '#111111',
	});
};

export const ErrorAlert = (
	texto: string = 'Error',
	buttonText: string = 'Continuar',
	title: string = 'Error',
) => {

	const theme = globalThis?.document.documentElement.classList.contains('dark') ? 'dark' : 'light';

	return Alert.mixin({
		icon: 'error',
		title: title,
		html: texto,
		confirmButtonText: buttonText,
		background: theme === 'light' ? '#111111': '#eeeeee',
		color: theme === 'light' ? '#eeeeee' : '#111111',
		iconColor: theme === 'light' ? '#eeeeee' : '#111111',
	});

}