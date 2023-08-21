import 'styled-components';

declare module 'styled-components' {
	export interface Theme {
		title: string;
		colors: {
			primary: string;
			complementary: string;
			turquoise: string;
			lightGreen: string;
			darkGreen: string;
			lightTone: string;
			white: string;
			lightGray: string;
			darkText: string;
			mediumText: string;
		};
	}
}
