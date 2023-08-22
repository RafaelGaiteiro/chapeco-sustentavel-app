import { Box } from '@chakra-ui/react';
import { Header } from '../../../app/components/shared/Header';
import { DefaultTemplate } from '../../../app/components/templates/DefaultTheme';

export function IdeiaDoUsuario() {
	return (
		<DefaultTemplate>
			<Header toGoBack title='Conte sua ideia' />
			<Box></Box>
		</DefaultTemplate>
	);
}
