import { Box } from '@chakra-ui/react';
import { Footer } from '../../../app/components/shared/Footer';
import { Header } from '../../../app/components/shared/Header';

export function IdeiaDoUsuario() {
	return (
		<Box>
			<Header toGoBack title='Conte sua ideia' />
			<Box></Box>
			<Footer />
		</Box>
	);
}
