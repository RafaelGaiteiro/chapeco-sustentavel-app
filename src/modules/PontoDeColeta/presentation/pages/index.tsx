import { Box } from '@chakra-ui/react';
import { Header } from '../../../../app/components/shared/Header';
import { DefaultTemplate } from '../../../../app/components/templates/DefaultTheme';

export function PontoDeColeta() {
	return (
		<DefaultTemplate defaultFooter>
			<Header toGoBack title='Pontos De Coleta' />
			<Box></Box>
		</DefaultTemplate>
	);
}
