import { ChakraProvider, GlobalStyle } from '@chakra-ui/react';
import { MainPage } from './src/modules/@Main/presentation/pages/MainPage';
import { ThemeProvider } from 'styled-components';
import light from './src/assets/styles/themes/light';

export function App() {
	return (
		<ThemeProvider theme={light}>
			<ChakraProvider>
				<MainPage />
				<GlobalStyle />
			</ChakraProvider>
		</ThemeProvider>
	);
}
