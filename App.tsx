import { ChakraProvider, GlobalStyle } from '@chakra-ui/react';
import { MainPage } from './src/modules/@Main/presentation/pages/MainPage';

export function App() {
	return (
		<ChakraProvider>
			<MainPage />
			<GlobalStyle />
		</ChakraProvider>
	);
}
