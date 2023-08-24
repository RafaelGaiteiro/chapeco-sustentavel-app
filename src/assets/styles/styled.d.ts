import 'styled-components';

declare module 'styled-components' {
	export interface Theme {
		title: string;
		colors: {
			Green50: string;
			Green100: string;
			Green200: string;
			Green300: string;
			Green400: string;
			Green500: string;
			Green600: string;
			Green700: string;
			Green800: string;
			Green900: string;
			white: string;
			lightGray: string;
		};
	}
}
