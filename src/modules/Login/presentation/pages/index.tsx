import { Box, Button, FormControl, FormLabel, Input, Link, Stack } from '@chakra-ui/react';
import { Header } from '../../../../app/components/shared/Header';

export function Login() {
	return (
		<Box>
			<Header />
			<Box display='flex' flexDirection='column' justifyContent='center' alignContent='center' padding='16px'>
				<Stack>
					<FormControl>
						<FormLabel>Usuário</FormLabel>
						<Input placeholder='Digite o seu usuário' />
					</FormControl>
					<FormControl>
						<FormLabel>Senha</FormLabel>
						<Input placeholder='Digite a sua senha' />
					</FormControl>
					<Link fontWeight={400}>Esqueceu a senha?</Link>
					<Button colorScheme='green'>Entrar</Button>
					<Button colorScheme='blue'>Criar uma Conta</Button>
				</Stack>
			</Box>
		</Box>
	);
}
