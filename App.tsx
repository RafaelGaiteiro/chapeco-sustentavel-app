import { ChakraProvider, GlobalStyle } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { router } from './src/app/routes/router';
import light from './src/assets/styles/themes/light';

export function App() {
	return (
		<ChakraProvider>
			<ThemeProvider theme={light}>
				<RouterProvider router={router} />
			</ThemeProvider>
			<GlobalStyle />
		</ChakraProvider>
	);
}
