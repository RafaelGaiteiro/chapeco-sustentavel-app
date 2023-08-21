import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { Header } from '../../../../app/components/shared/Header';
import { Grid } from '../components/Grid';

export function Login() {
	return (
		<Grid>
			<Header />
			<Box display='flex' flexDirection='column' justifyContent='center' alignContent='center' padding='16px'>
				<Stack>
					<FormControl>
						<FormLabel>Usuário</FormLabel>
						<Input />
					</FormControl>
					<FormControl>
						<FormLabel>Senha</FormLabel>
						<Input />
					</FormControl>
					<Button colorScheme='green'>Entrar</Button>
				</Stack>
			</Box>
		</Grid>
	);
}
