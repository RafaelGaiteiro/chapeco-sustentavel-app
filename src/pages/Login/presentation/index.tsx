import { Box, Button, FormControl, FormLabel, Input, Link, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { Header } from '../../../app/components/shared/Header';
import { DefaultTemplate } from '../../../app/components/templates/DefaultTheme';

const schema = object({
	usuario: string().required('O usuário é obrigatório.'),
	senha: string().required('A senha é obrigatória.'),
});

export function Login() {
	const navigate = useNavigate();

	const { register, handleSubmit, watch } = useForm({
		resolver: yupResolver(schema),
	});

	const usuario = watch('usuario');
	const senha = watch('senha');

	const acesso = usuario === 'dev' && senha === 'dev';

	function onSubmit() {}

	return (
		<DefaultTemplate>
			<Header title='Login' />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' padding='16px'>
					<Stack border='1px' borderColor='gray.200' padding='20px' w='100%' maxW='600px' rounded='8px'>
						<FormControl>
							<FormLabel>Usuário</FormLabel>
							<Input placeholder='Digite o seu usuário' {...register('usuario')} />
						</FormControl>
						<FormControl>
							<FormLabel>Senha</FormLabel>
							<Input placeholder='Digite a sua senha' {...register('senha')} />
						</FormControl>
						<Link fontWeight={400} onClick={() => navigate('/recuperarsenha')}>
							Esqueceu a senha?
						</Link>
						<Button colorScheme='green' onClick={() => acesso && navigate('/home')}>
							Entrar
						</Button>
						<Button colorScheme='blue' onClick={() => navigate('/novaconta')}>
							Criar uma Conta
						</Button>
					</Stack>
				</Box>
			</form>
		</DefaultTemplate>
	);
}
