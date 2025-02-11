import Swal from 'sweetalert2';

const theme = globalThis?.document?.documentElement?.classList?.contains('dark') ? 'dark' : 'light';

/**
 * Layout principal de alertas
 * @description Configuración de la librería SweetAlert2
 */
export const Alert = Swal.mixin({
	customClass: {
		// cancelButton: 'rounded-xl bg-[#EE4452] font-raleway text-white py-2 px-12 hover:bg-[#FF2222] hover:font-semibold transition duration-400',
		cancelButton:
			'hover:font-semibold transition duration-400 text-center text-sm 2xl:text-base',
		// confirmButton: 'ml-2 rounded-xl bg-[#002758] font-raleway text-white py-2 px-12 hover:bg-[#3C9AC5] hover:font-semibold transition duration-400',
		confirmButton:
			'ml-2 hover:font-semibold transition duration-400 text-sm 2xl:text-base',
		title: 'font-bold text-lg 2xl:text-xl',
		htmlContainer: 'rounded-none rounded-t-xl p-2',
		closeButton:
			'text-white hover:text-white flex justify-end mb-1 pr-4 w-full rounded-none rounded-t-xl',
		icon:
			'after:animate-none',
		container: 'rounded-none rounded-t-xl p-2',
		popup: 'rounded-none rounded-t-xl p-2',
	},
	background: '#111111',
	color: '#FFFFFF',
	iconColor: '#FFFFFF',
	buttonsStyling: false,
	confirmButtonText: 'Continuar',
	reverseButtons: true,
	showCloseButton: true,
});

export const LoadingAlert = (title: string = 'Cargando...') => {
	Swal.fire({
		title: title,
		allowEscapeKey: false,
		allowOutsideClick: false,
		showCloseButton: false,
		// iconColor: '#009DDC',
		// customClass: {
		// 	title: 'font-jost text-[#111111] font-bold',
		// 	htmlContainer: 'font-poppins text-[#111111]',
		// 	icon:
		// 		'text-secondary border-secondary after:text-secondary after:animate-none',
		// 	container: 'text-[#111111] rounded-xl',
		// 	popup: 'text-[#111111] rounded-xl w-[40rem]',
		// 	closeButton:
		// 		'text-[#111111] focus:text-[#111111] hover:text-[#111111] focus:outline-none',
		// },
		didOpen: () => {
			// Swal?.getPopup()?.firstChild?.disabled = true;
			// Swal?.getPopup()?.firstChild?.innerText = '';
			// Swal?.getPopup()?.firstChild?.style?.display = 'flex';
			// Swal.getPopup().firstChild.onclick = () => null;
			// Swal.getPopup().firstChild.className = 'bg-white h-10';
			Swal.showLoading();
		},
	});
};

export const ConfirmationAlert = (texto: string = '', title: string = '¿Está Seguro?') => {
	const customIcon = `
		<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clip-path="url(#clip0_1538_9027)">
		<path d="M49.9997 8.33398C73.0122 8.33398 91.6664 26.9882 91.6664 50.0007C91.6664 73.0132 73.0122 91.6673 49.9997 91.6673C26.9872 91.6673 8.33301 73.0132 8.33301 50.0007C8.33301 26.9882 26.9872 8.33398 49.9997 8.33398ZM49.9997 66.6673C48.8946 66.6673 47.8348 67.1063 47.0534 67.8877C46.272 68.6691 45.833 69.7289 45.833 70.834C45.833 71.9391 46.272 72.9989 47.0534 73.7803C47.8348 74.5617 48.8946 75.0007 49.9997 75.0007C51.1047 75.0007 52.1646 74.5617 52.946 73.7803C53.7274 72.9989 54.1663 71.9391 54.1663 70.834C54.1663 69.7289 53.7274 68.6691 52.946 67.8877C52.1646 67.1063 51.1047 66.6673 49.9997 66.6673ZM49.9997 27.084C45.9938 27.084 42.152 28.6753 39.3194 31.5079C36.4868 34.3405 34.8955 38.1823 34.8955 42.1882C34.8955 43.2932 35.3345 44.353 36.1159 45.1344C36.8973 45.9158 37.9571 46.3548 39.0622 46.3548C40.1672 46.3548 41.2271 45.9158 42.0085 45.1344C42.7899 44.353 43.2288 43.2932 43.2288 42.1882C43.2302 40.9591 43.5661 39.7537 44.2004 38.701C44.8348 37.6484 45.7437 36.7882 46.8297 36.2128C47.9157 35.6374 49.1378 35.3685 50.3651 35.4348C51.5923 35.5011 52.7783 35.9002 53.796 36.5893C54.8136 37.2784 55.6245 38.2315 56.1418 39.3464C56.659 40.4612 56.863 41.6959 56.7319 42.9179C56.6008 44.1399 56.1396 45.3032 55.3977 46.283C54.6558 47.2628 53.6612 48.0222 52.5205 48.4798C49.7038 49.6048 45.833 52.4882 45.833 57.2923V58.334C45.833 59.4391 46.272 60.4989 47.0534 61.2803C47.8348 62.0617 48.8946 62.5007 49.9997 62.5007C51.1047 62.5007 52.1646 62.0617 52.946 61.2803C53.7274 60.4989 54.1663 59.4391 54.1663 58.334C54.1663 57.3173 54.3747 56.809 55.2538 56.3757L55.6163 56.209C58.8697 54.9002 61.5665 52.5005 63.2444 49.4211C64.9223 46.3418 65.4767 42.7747 64.8127 39.3314C64.1487 35.8881 62.3075 32.783 59.6049 30.5484C56.9022 28.3139 53.5064 27.0891 49.9997 27.084Z" fill="#009DDC"/>
		</g>
		<defs>
		<clipPath id="clip0_1538_9027">
		<rect width="100" height="100" fill="white"/>
		</clipPath>
		</defs>
		</svg>
	`;

	return Alert.mixin({
		title: title,
		html: texto,
		icon: 'question',
		// iconHtml: customIcon,
		// iconColor: '#009DDC',
		confirmButtonText: 'Aceptar',
		showCancelButton: true,
		cancelButtonText: 'Cancelar',
		// customClass: {
		// 	cancelButton: "mr-2",
		// 	confirmButton: "ml-2 border-[var(--text-color)] text-primary rounded-full",
		// 	icon: "text-primary border-primary after:text-primary after:animate-none",
		// 	popup: 'text-primary rounded-xl w-[40rem]',
		// 	container: 'text-primary rounded-xl',
		// 	htmlContainer: 'font-poppins text-primary',
		// }
	});
};

export const SuccessAlert = (title: string = 'Éxito', texto: string = '') => {
	const customIcon = `
		<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="100" height="100" fill="white"/>
		<mask id="mask0_1636_5341" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="6" y="6" width="88" height="88">
		<path d="M50 91.6664C55.4727 91.6735 60.893 90.5989 65.9491 88.5045C71.0053 86.4101 75.5977 83.3371 79.4624 79.4622C83.3374 75.5975 86.4104 71.0051 88.5048 65.9489C90.5992 60.8927 91.6737 55.4725 91.6666 49.9997C91.6736 44.5269 90.599 39.1068 88.5046 34.0506C86.4102 28.9944 83.3373 24.402 79.4624 20.5372C75.5977 16.6623 71.0053 13.5893 65.9491 11.4949C60.893 9.40048 55.4727 8.32595 50 8.33304C44.5272 8.32607 39.107 9.40065 34.0508 11.495C28.9947 13.5894 24.4023 16.6624 20.5375 20.5372C16.6626 24.402 13.5897 28.9944 11.4953 34.0506C9.4009 39.1068 8.32631 44.5269 8.33329 49.9997C8.3262 55.4725 9.40073 60.8927 11.4951 65.9489C13.5895 71.0051 16.6625 75.5975 20.5375 79.4622C24.4023 83.3371 28.9947 86.41 34.0508 88.5044C39.107 90.5988 44.5272 91.6733 50 91.6664Z" fill="white" stroke="white" stroke-width="4" stroke-linejoin="round"/>
		<path d="M33.3333 50L45.8333 62.5L70.8333 37.5" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		</mask>
		<g mask="url(#mask0_1636_5341)">
		<path d="M0 0H100V100H0V0Z" fill="#009DDC"/>
		</g>
		</svg>
	`;

	return Alert.mixin({
		// iconHtml: customIcon,
		icon: 'success',
		title: title,
		html: texto,
		confirmButtonText: 'Continuar',
		// iconColor: '#009DDC',
		// customClass: {
		// 	cancelButton: 'btn-secondary transition duration-400',
		// 	confirmButton:
		// 		'ml-2 btn-primary hover:font-semibold transition duration-400',
		// 	title: 'font-jost text-[#111111] font-bold',
		// 	htmlContainer: 'font-poppins text-[#111111]',
		// 	icon:
		// 		'text-secondary border-secondary after:text-secondary after:animate-none',
		// 	container: 'text-[#111111] rounded-xl',
		// 	popup: 'text-[#111111] rounded-xl w-[40rem]',
		// 	closeButton:
		// 		'text-[#111111] focus:text-[#111111] hover:text-[#111111] focus:outline-none',
		// },
	});
};

export const ErrorAlert = (
	texto: string = 'Error',
	buttonText: string = 'Continuar',
	title: string = 'Error',
) =>
	Alert.mixin({
		icon: 'error',
		title: title,
		html: texto,
		confirmButtonText: buttonText,
		// iconColor: '#009DDC',
		// customClass: {
		// 	cancelButton: 'btn-secondary transition duration-400',
		// 	confirmButton:
		// 		'ml-2 btn-primary hover:font-semibold transition duration-400',
		// 	title: 'font-jost text-[#111111] font-bold',
		// 	htmlContainer: 'font-poppins text-[#111111]',
		// 	icon:
		// 		'text-secondary border-secondary after:text-secondary after:animate-none',
		// 	container: 'text-[#111111] rounded-xl',
		// 	popup: 'text-[#111111] rounded-xl w-[40rem]',
		// 	closeButton:
		// 		'text-[#111111] focus:text-[#111111] hover:text-[#111111] focus:outline-none',
		// },
	});

// /**
//  * Alerta de carga
//  * @param {string} title
//  * @returns {Promise<Swal>}
//  */
// export const LoadingAlert = (title = 'Cargando...') => {
// 	Swal.fire({
// 		title: title,
// 		allowEscapeKey: false,
// 		allowOutsideClick: false,
// 		showCloseButton: false,
// 		iconColor: '#009DDC',
// 		customClass: {
// 			title: 'font-jost text-[#111111] font-bold',
// 			htmlContainer: 'font-poppins text-[#111111]',
// 			icon:
// 				'text-secondary border-secondary after:text-secondary after:animate-none',
// 			container: 'text-[#111111] rounded-xl',
// 			popup: 'text-[#111111] rounded-xl w-[40rem]',
// 			closeButton:
// 				'text-[#111111] focus:text-[#111111] hover:text-[#111111] focus:outline-none',
// 		},
// 		didOpen: async () => {
// 			Swal.getPopup().firstChild.disabled = true;
// 			Swal.getPopup().firstChild.innerText = '';
// 			Swal.getPopup().firstChild.style.display = 'flex';
// 			Swal.getPopup().firstChild.onclick = () => null;
// 			Swal.getPopup().firstChild.className = 'bg-white h-10';
// 			Swal.showLoading();
// 		},
// 	});
// };

// /**
//  * Alerta de éxito
//  * @param {string} title
//  * @param {string} texto
//  * @returns {Swal}
//  */
// export const SuccessAlert = (title = 'Éxito', texto = '') => {
// 	const customIcon = `
// 		<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
// 		<rect width="100" height="100" fill="white"/>
// 		<mask id="mask0_1636_5341" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="6" y="6" width="88" height="88">
// 		<path d="M50 91.6664C55.4727 91.6735 60.893 90.5989 65.9491 88.5045C71.0053 86.4101 75.5977 83.3371 79.4624 79.4622C83.3374 75.5975 86.4104 71.0051 88.5048 65.9489C90.5992 60.8927 91.6737 55.4725 91.6666 49.9997C91.6736 44.5269 90.599 39.1068 88.5046 34.0506C86.4102 28.9944 83.3373 24.402 79.4624 20.5372C75.5977 16.6623 71.0053 13.5893 65.9491 11.4949C60.893 9.40048 55.4727 8.32595 50 8.33304C44.5272 8.32607 39.107 9.40065 34.0508 11.495C28.9947 13.5894 24.4023 16.6624 20.5375 20.5372C16.6626 24.402 13.5897 28.9944 11.4953 34.0506C9.4009 39.1068 8.32631 44.5269 8.33329 49.9997C8.3262 55.4725 9.40073 60.8927 11.4951 65.9489C13.5895 71.0051 16.6625 75.5975 20.5375 79.4622C24.4023 83.3371 28.9947 86.41 34.0508 88.5044C39.107 90.5988 44.5272 91.6733 50 91.6664Z" fill="white" stroke="white" stroke-width="4" stroke-linejoin="round"/>
// 		<path d="M33.3333 50L45.8333 62.5L70.8333 37.5" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
// 		</mask>
// 		<g mask="url(#mask0_1636_5341)">
// 		<path d="M0 0H100V100H0V0Z" fill="#009DDC"/>
// 		</g>
// 		</svg>
// 	`;

// 	return Alert.mixin({
// 		iconHtml: customIcon,
// 		title: title,
// 		html: texto,
// 		confirmButtonText: 'Continuar',
// 		iconColor: '#009DDC',
// 		customClass: {
// 			cancelButton: 'btn-secondary transition duration-400',
// 			confirmButton:
// 				'ml-2 btn-primary hover:font-semibold transition duration-400',
// 			title: 'font-jost text-[#111111] font-bold',
// 			htmlContainer: 'font-poppins text-[#111111]',
// 			icon:
// 				'text-secondary border-secondary after:text-secondary after:animate-none',
// 			container: 'text-[#111111] rounded-xl',
// 			popup: 'text-[#111111] rounded-xl w-[40rem]',
// 			closeButton:
// 				'text-[#111111] focus:text-[#111111] hover:text-[#111111] focus:outline-none',
// 		},
// 	});
// };

// /**
//  * Alerta de error
//  * @param {string} texto
//  * @param {string} buttonText
//  * @returns {Swal}
//  */
// export const ErrorAlert = (
// 	texto = 'Error',
// 	buttonText = 'Continuar',
// 	title = 'Error',
// ) =>
// 	Alert.mixin({
// 		icon: 'error',
// 		title: title,
// 		html: texto,
// 		confirmButtonText: buttonText,
// 		iconColor: '#009DDC',
// 		customClass: {
// 			cancelButton: 'btn-secondary transition duration-400',
// 			confirmButton:
// 				'ml-2 btn-primary hover:font-semibold transition duration-400',
// 			title: 'font-jost text-[#111111] font-bold',
// 			htmlContainer: 'font-poppins text-[#111111]',
// 			icon:
// 				'text-secondary border-secondary after:text-secondary after:animate-none',
// 			container: 'text-[#111111] rounded-xl',
// 			popup: 'text-[#111111] rounded-xl w-[40rem]',
// 			closeButton:
// 				'text-[#111111] focus:text-[#111111] hover:text-[#111111] focus:outline-none',
// 		},
// 	});

// /**
//  * Alerta de confirmación
//  * @param {string} title
//  * @param {string} texto
//  * @returns {Swal}
//  */
// export const ConfirmationAlert = (texto = '', title = '¿Está Seguro?') => {
// 	const customIcon = `
// 		<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
// 		<g clip-path="url(#clip0_1538_9027)">
// 		<path d="M49.9997 8.33398C73.0122 8.33398 91.6664 26.9882 91.6664 50.0007C91.6664 73.0132 73.0122 91.6673 49.9997 91.6673C26.9872 91.6673 8.33301 73.0132 8.33301 50.0007C8.33301 26.9882 26.9872 8.33398 49.9997 8.33398ZM49.9997 66.6673C48.8946 66.6673 47.8348 67.1063 47.0534 67.8877C46.272 68.6691 45.833 69.7289 45.833 70.834C45.833 71.9391 46.272 72.9989 47.0534 73.7803C47.8348 74.5617 48.8946 75.0007 49.9997 75.0007C51.1047 75.0007 52.1646 74.5617 52.946 73.7803C53.7274 72.9989 54.1663 71.9391 54.1663 70.834C54.1663 69.7289 53.7274 68.6691 52.946 67.8877C52.1646 67.1063 51.1047 66.6673 49.9997 66.6673ZM49.9997 27.084C45.9938 27.084 42.152 28.6753 39.3194 31.5079C36.4868 34.3405 34.8955 38.1823 34.8955 42.1882C34.8955 43.2932 35.3345 44.353 36.1159 45.1344C36.8973 45.9158 37.9571 46.3548 39.0622 46.3548C40.1672 46.3548 41.2271 45.9158 42.0085 45.1344C42.7899 44.353 43.2288 43.2932 43.2288 42.1882C43.2302 40.9591 43.5661 39.7537 44.2004 38.701C44.8348 37.6484 45.7437 36.7882 46.8297 36.2128C47.9157 35.6374 49.1378 35.3685 50.3651 35.4348C51.5923 35.5011 52.7783 35.9002 53.796 36.5893C54.8136 37.2784 55.6245 38.2315 56.1418 39.3464C56.659 40.4612 56.863 41.6959 56.7319 42.9179C56.6008 44.1399 56.1396 45.3032 55.3977 46.283C54.6558 47.2628 53.6612 48.0222 52.5205 48.4798C49.7038 49.6048 45.833 52.4882 45.833 57.2923V58.334C45.833 59.4391 46.272 60.4989 47.0534 61.2803C47.8348 62.0617 48.8946 62.5007 49.9997 62.5007C51.1047 62.5007 52.1646 62.0617 52.946 61.2803C53.7274 60.4989 54.1663 59.4391 54.1663 58.334C54.1663 57.3173 54.3747 56.809 55.2538 56.3757L55.6163 56.209C58.8697 54.9002 61.5665 52.5005 63.2444 49.4211C64.9223 46.3418 65.4767 42.7747 64.8127 39.3314C64.1487 35.8881 62.3075 32.783 59.6049 30.5484C56.9022 28.3139 53.5064 27.0891 49.9997 27.084Z" fill="#009DDC"/>
// 		</g>
// 		<defs>
// 		<clipPath id="clip0_1538_9027">
// 		<rect width="100" height="100" fill="white"/>
// 		</clipPath>
// 		</defs>
// 		</svg>
// 	`;

// 	return Alert.mixin({
// 		title: title,
// 		html: texto,
// 		iconHtml: customIcon,
// 		iconColor: '#009DDC',
// 		confirmButtonText: 'Aceptar',
// 		showCancelButton: true,
// 		customClass: {
// 			cancelButton: 'btn-secondary transition duration-400',
// 			confirmButton:
// 				'ml-2 btn-primary hover:font-semibold transition duration-400',
// 			title: 'font-jost text-[#111111] font-bold',
// 			htmlContainer: 'font-poppins text-[#111111]',
// 			icon:
// 				'text-secondary border-secondary after:text-secondary after:animate-none',
// 			container: 'text-[#111111] rounded-xl',
// 			popup: 'text-[#111111] rounded-xl w-[40rem]',
// 			closeButton:
// 				'text-[#111111] focus:text-[#111111] hover:text-[#111111] focus:outline-none',
// 		},
// 	});
// };

// /**
//  * Alerta de información
//  * @param {string} title
//  * @param {string} texto
//  * @returns {Swal}
//  */
// export const InfoAlert = (title = 'Información', texto = '') => {
// 	const customIcon = `
// 		<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
// 		<path d="M45.8332 62.5003L54.1665 62.5003L54.1665 70.8337L45.8332 70.8337M45.8332 29.167L54.1665 29.167L54.1665 54.167L45.8332 54.167M49.9998 91.667C55.4716 91.667 60.8898 90.5892 65.945 88.4953C71.0002 86.4014 75.5935 83.3322 79.4626 79.4631C87.2766 71.6491 91.6665 61.051 91.6665 50.0003C91.6665 38.9496 87.2766 28.3516 79.4626 20.5375C75.5935 16.6684 71.0002 13.5993 65.945 11.5053C60.8898 9.4114 55.4716 8.33366 49.9998 8.33366C38.9492 8.33366 28.3511 12.7235 20.5371 20.5375C12.723 28.3516 8.33318 38.9496 8.33318 50.0003C8.33318 55.4721 9.41091 60.8902 11.5049 65.9455C13.5988 71.0007 16.668 75.594 20.5371 79.4631C24.4062 83.3322 28.9995 86.4014 34.0547 88.4953C39.1099 90.5892 44.5281 91.667 49.9998 91.667V91.667Z" fill="#009DDC"/>
// 		</svg>
// 	`;

// 	return Alert.mixin({
// 		title: title,
// 		html: texto,
// 		iconHtml: customIcon,
// 		iconColor: '#009DDC',
// 		confirmButtonText: 'Aceptar',
// 		customClass: {
// 			// cancelButton: 'btn-secondary transition duration-400',
// 			confirmButton:
// 				'ml-2 btn-primary hover:font-semibold transition duration-400',
// 			title: 'font-jost text-[#111111] font-bold',
// 			htmlContainer: 'font-poppins text-[#111111]',
// 			icon:
// 				'text-secondary border-secondary after:text-secondary after:animate-none',
// 			container: 'text-[#111111] rounded-xl',
// 			popup: 'text-[#111111] rounded-xl w-[40rem]',
// 			closeButton:
// 				'text-[#111111] focus:text-[#111111] hover:text-[#111111] focus:outline-none',
// 		},
// 	});
// };

// /**
//  * Alerta de bienvenida
//  * @returns {Promise<Swal>}
//  */
// export const WelcomeAlert = () => {
// 	const title = '¡Bienvenido!';
// 	const texto = `
// 		<p class="font-[inherit] text-[inherit] p-6">
// 			Antes de que pueda ingresar a la plataforma, 
// 			<span class="font-bold">
// 				es necesario que active su cuenta mediante el link que le llegará a su correo registrado
// 			</span>
// 			dentro de los siguientes minutos. No olvide verificar su bandeja de spam.
// 		</p>
// 	`;

// 	const customIcon = `
// 		<svg width="109" height="109" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
// 		<g clip-path="url(#clip0_1569_174)">
// 		<circle cx="54.5" cy="54.5" r="54.5" fill="#009DDC"/>
// 		<path d="M44.1997 42.0571L44.449 42.275L66.7248 64.5481C67.0168 64.8398 67.2358 65.1962 67.3643 65.5884C67.4927 65.9806 67.5268 66.3975 67.4639 66.8054C67.401 67.2132 67.2428 67.6005 67.0022 67.9358C66.7616 68.2711 66.4453 68.5449 66.079 68.735L65.7746 68.8663L38.5139 78.9121C33.3899 80.8021 28.3998 75.9853 29.9564 70.8691L30.0877 70.4859L40.1309 43.2253C40.2637 42.8642 40.4742 42.5366 40.7476 42.2659C41.021 41.9952 41.3506 41.7879 41.713 41.6587C42.0754 41.5294 42.4617 41.4814 42.8447 41.5181C43.2277 41.5548 43.598 41.6751 43.9293 41.8708L44.1997 42.0545V42.0571ZM67.9061 53.4601C70.2974 53.5861 73.5761 54.0901 76.4268 55.8016C77.0047 56.1443 77.4293 56.6954 77.613 57.3417C77.7968 57.9879 77.7258 58.68 77.4146 59.2755C77.1034 59.8709 76.5758 60.3244 75.9403 60.5425C75.3048 60.7606 74.6099 60.7267 73.9987 60.4479L73.7257 60.3035C71.9354 59.2273 69.6464 58.8073 67.6304 58.7023C66.7998 58.6542 65.9669 58.6577 65.1367 58.7128L64.3072 58.7941C63.6224 58.8825 62.9304 58.6975 62.3811 58.2793C61.8317 57.861 61.4693 57.2432 61.3723 56.5596C61.2752 55.876 61.4515 55.1817 61.8627 54.6271C62.274 54.0725 62.8872 53.7023 63.5696 53.5966C65.0072 53.4109 66.4594 53.3643 67.9061 53.4575V53.4601ZM73.2217 46.1469C73.8905 46.1483 74.5336 46.405 75.0196 46.8645C75.5056 47.324 75.7979 47.9517 75.8367 48.6194C75.8756 49.2871 75.6581 49.9444 75.2287 50.4572C74.7993 50.97 74.1903 51.2995 73.5262 51.3785L73.2217 51.3969H71.3632C70.6943 51.3955 70.0513 51.1388 69.5653 50.6793C69.0793 50.2198 68.787 49.5921 68.7481 48.9244C68.7093 48.2567 68.9267 47.5994 69.3561 47.0866C69.7856 46.5738 70.3945 46.2443 71.0587 46.1653L71.3632 46.1469H73.2217ZM64.8689 44.1309C65.3209 44.5829 65.5924 45.1843 65.6325 45.8222C65.6726 46.4602 65.4786 47.0908 65.0868 47.5959L64.8689 47.8426L62.0838 50.6278C61.6114 51.0986 60.9775 51.3719 60.3109 51.3922C59.6443 51.4126 58.9949 51.1785 58.4947 50.7374C57.9945 50.2963 57.6809 49.6813 57.6176 49.0174C57.5544 48.3535 57.7462 47.6904 58.1542 47.1628L58.3721 46.916L61.1546 44.1335C61.3983 43.8895 61.6879 43.6958 62.0065 43.5637C62.3252 43.4316 62.6668 43.3636 63.0117 43.3636C63.3567 43.3636 63.6983 43.4316 64.017 43.5637C64.3356 43.6958 64.6251 43.8868 64.8689 44.1309ZM58.0781 30.3076C59.2541 33.8409 58.6241 37.7101 57.8891 40.4139C57.4473 42.0995 56.8406 43.7376 56.0778 45.3043C55.7669 45.9274 55.2213 46.4014 54.5609 46.6222C53.9005 46.843 53.1795 46.7924 52.5564 46.4816C51.9333 46.1707 51.4592 45.6251 51.2384 44.9647C51.0176 44.3043 51.0682 43.5832 51.3791 42.9601C51.9878 41.7016 52.4713 40.3863 52.8228 39.0331C53.4187 36.8491 53.7179 34.4788 53.2586 32.5363L53.0984 31.9693C52.984 31.641 52.936 31.2932 52.9571 30.9462C52.9782 30.5992 53.068 30.2599 53.2213 29.9479C53.3746 29.6358 53.5883 29.3574 53.8501 29.1287C54.1119 28.8999 54.4166 28.7255 54.7463 28.6154C55.0761 28.5054 55.4245 28.462 55.7712 28.4876C56.1179 28.5133 56.456 28.6076 56.766 28.765C57.0759 28.9225 57.3515 29.1399 57.5768 29.4047C57.802 29.6695 57.9724 29.9764 58.0781 30.3076ZM72.2924 36.7074C72.7845 37.1997 73.061 37.8672 73.061 38.5633C73.061 39.2593 72.7845 39.9269 72.2924 40.4191L70.4365 42.275C70.1944 42.5257 69.9047 42.7257 69.5845 42.8633C69.2642 43.0009 68.9198 43.0733 68.5712 43.0763C68.2227 43.0793 67.877 43.0129 67.5544 42.8809C67.2318 42.7489 66.9387 42.554 66.6923 42.3076C66.4458 42.0611 66.2509 41.768 66.1189 41.4454C65.9869 41.1228 65.9205 40.7771 65.9235 40.4286C65.9265 40.08 65.999 39.7356 66.1365 39.4153C66.2741 39.0951 66.4741 38.8054 66.7248 38.5633L68.5807 36.7074C69.0729 36.2153 69.7405 35.9388 70.4365 35.9388C71.1326 35.9388 71.8002 36.2153 72.2924 36.7074Z" fill="white"/>
// 		</g>
// 		<defs>
// 		<clipPath id="clip0_1569_174">
// 		<rect width="109" height="109" fill="white"/>
// 		</clipPath>
// 		</defs>
// 		</svg>
// 	`;

// 	return Alert.mixin({
// 		title: title,
// 		iconHtml: customIcon,
// 		html: texto,
// 		iconColor: '#009DDC',
// 		// showCancelButton: true,
// 		// cancelButtonText: 'Cancelar',
// 		showConfirmButton: false,
// 		customClass: {
// 			// cancelButton: 'btn-secondary transition duration-400',
// 			// confirmButton: 'ml-2 btn-primary hover:font-semibold transition duration-400',
// 			title: 'font-jost text-[#111111] font-bold',
// 			htmlContainer: 'font-poppins text-[#111111]',
// 			icon:
// 				'text-secondary border-secondary after:text-secondary after:animate-none',
// 			container: 'text-[#111111] rounded-xl',
// 			popup: 'text-[#111111] rounded-xl w-[40rem]',
// 			closeButton:
// 				'text-[#111111] focus:text-[#111111] hover:text-[#111111] focus:outline-none',
// 		},
// 	}).fire();
// };
