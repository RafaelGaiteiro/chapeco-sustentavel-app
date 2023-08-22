import { Box } from '@chakra-ui/react';
import { Header } from '../../../../app/components/shared/Header';
import { DefaultTemplate } from '../../../../app/components/templates/DefaultTheme';

export function Educativo() {
	return (
		<DefaultTemplate defaultFooter>
			<Header toGoBack title='Educativo' />
			<Box></Box>
		</DefaultTemplate>
	);
}
