import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { Header } from '../../../../app/components/shared/Header';
import { Grid } from '../components/Grid';
import { useTheme } from 'styled-components';

export function Login() {
	const { colors } = useTheme();

	return (
		<Grid>
			<Header />
			<Box display='flex' flexDirection='column' justifyContent='center' alignContent='center' padding='16px'>
				<Stack>
					<FormControl>
						<FormLabel>Usuário</FormLabel>
						<Input focusBorderColor={colors.darkGreen} />
					</FormControl>
					<FormControl>
						<FormLabel>Senha</FormLabel>
						<Input focusBorderColor={colors.darkGreen} />
					</FormControl>
					<Button backgroundColor={colors.darkGreen} color={colors.white}>
						Entrar
					</Button>
				</Stack>
			</Box>
		</Grid>
	);
}
