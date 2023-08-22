import { Box } from '@chakra-ui/react';
import { Header } from '../../../app/components/shared/Header';
import { DefaultTemplate } from '../../../app/components/templates/DefaultTheme';

export function Configuracoes() {
	return (
		<DefaultTemplate defaultFooter>
			<Header toGoBack title='Configurações' />
			<Box></Box>
		</DefaultTemplate>
	);
}
