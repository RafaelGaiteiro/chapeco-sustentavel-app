import { Box, Button, FormControl, FormLabel, Input, Link, Stack } from '@chakra-ui/react';
import { useTheme } from 'styled-components';
import { Header } from '../../../../app/components/shared/Header';
import { Footer } from '../components/Footer';
import { Grid } from '../components/Grid';

export function Login() {
	const { colors } = useTheme();

	return (
		<Grid>
			<Header />
			<Box display='flex' flexDirection='column' justifyContent='center' alignContent='center' padding='16px'>
				<Stack>
					<FormControl>
						<FormLabel>Usuário</FormLabel>
						<Input focusBorderColor={colors.darkGreen} value={'dev'} />
					</FormControl>
					<FormControl>
						<FormLabel>Senha</FormLabel>
						<Input focusBorderColor={colors.darkGreen} value={'dev'} />
					</FormControl>
					<Button colorScheme='green'>Entrar</Button>
					<Link fontWeight={400}>Esqueceu a senha? Clique aqui para recuperá-la.</Link>
				</Stack>
			</Box>
			<Footer>
				<Button colorScheme='blue'>Criar uma Conta</Button>
			</Footer>
		</Grid>
	);
}
