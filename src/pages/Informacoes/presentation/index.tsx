import { Box } from '@chakra-ui/react';
import { Header } from '../../../app/components/shared/Header';
import { DefaultTemplate } from '../../../app/components/templates/DefaultTheme';

export function Informacoes() {
	return (
		<DefaultTemplate defaultFooter>
			<Header toGoBack title='Informações' />
			<Box></Box>
		</DefaultTemplate>
	);
}
