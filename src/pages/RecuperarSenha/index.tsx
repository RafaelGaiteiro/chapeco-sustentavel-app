import { Box } from '@chakra-ui/react';
import { Header } from '../../app/components/shared/Header';
import { DefaultTemplate } from '../../app/components/templates/DefaultTheme';

export function RecuperarSenha() {
	return (
		<DefaultTemplate>
			<Header toGoBack title='Recuperar Senha' />
			<Box></Box>
		</DefaultTemplate>
	);
}
