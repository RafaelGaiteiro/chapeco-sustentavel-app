import { Box } from '@chakra-ui/react';
import { Header } from '../../../../app/components/shared/Header';
import { DefaultTemplate } from '../../../../app/components/templates/DefaultTheme';

export function ColetaSeletiva() {
	return (
		<DefaultTemplate defaultFooter>
			<Header toGoBack />
			<Box></Box>
		</DefaultTemplate>
	);
}
