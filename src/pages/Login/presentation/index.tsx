import { Box, Button, FormControl, FormLabel, Input, Link, Stack } from '@chakra-ui/react';
import { Header } from '../../../app/components/shared/Header';
import { DefaultTemplate } from '../../../app/components/templates/DefaultTheme';
import { useNavigate } from 'react-router-dom';

export function Login() {
	const navigate = useNavigate();

	return (
		<DefaultTemplate>
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
					<Link fontWeight={400} onClick={() => navigate('/recuperarsenha')}>
						Esqueceu a senha?
					</Link>
					<Button colorScheme='green'>Entrar</Button>
					<Button colorScheme='blue' onClick={() => navigate('/novaconta')}>
						Criar uma Conta
					</Button>
				</Stack>
			</Box>
		</DefaultTemplate>
	);
}
