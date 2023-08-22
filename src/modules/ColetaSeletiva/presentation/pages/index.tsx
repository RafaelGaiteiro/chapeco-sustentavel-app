import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { number, object, string } from 'yup';
import { Header } from '../../../../app/components/shared/Header';
import { DefaultTemplate } from '../../../../app/components/templates/DefaultTheme';

const schema = object({
	nomeDoEndereco: string().required('O nome do endereço é obrigatório.'),
	numeroResidencial: number()
		.positive()
		.integer()
		.required('O número residencial é obrigatório.')
		.typeError('O número residencial deve ser apenas números e é obrigatório.'),
	rua: string().required('O nome da rua é obrigatório.'),
	bairro: string().required('O nome do bairro é obrigatório.'),
});

export function ColetaSeletiva() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit() {}

	return (
		<DefaultTemplate>
			<Header toGoBack title='Coleta Seletiva' />
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<Box display='flex' justifyContent='center' padding='16px'>
					<Stack maxW='600px' width='100%'>
						<FormControl isRequired isInvalid={!!errors.nomeDoEndereco}>
							<FormLabel htmlFor='nomeDoEndereco'>Nome do endereço</FormLabel>
							<Input placeholder='Digite o nome do endereço' {...register('nomeDoEndereco')} />
							{errors.nomeDoEndereco ? (
								<FormErrorMessage>{errors.nomeDoEndereco.message}</FormErrorMessage>
							) : (
								<FormHelperText>Exemplo: Casa da Vó, Apartamento.</FormHelperText>
							)}
						</FormControl>
						<FormControl isRequired isInvalid={!!errors.numeroResidencial}>
							<FormLabel>Número Residencial</FormLabel>
							<Input placeholder='Digite o seu número residencial' {...register('numeroResidencial')} />
							{errors.numeroResidencial && <FormErrorMessage>{errors.numeroResidencial.message}</FormErrorMessage>}
						</FormControl>
						<FormControl isRequired isInvalid={!!errors.rua}>
							<FormLabel>Rua</FormLabel>
							<Input placeholder='Digite a sua rua' {...register('rua')} />
							{errors.rua && <FormErrorMessage>{errors.rua.message}</FormErrorMessage>}
						</FormControl>
						<FormControl isRequired isInvalid={!!errors.bairro}>
							<FormLabel>Bairro</FormLabel>
							<Input placeholder='Digite o seu bairro' {...register('bairro')} />
							{errors.bairro && <FormErrorMessage>{errors.bairro.message}</FormErrorMessage>}
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Cidade</FormLabel>
							<Input placeholder='Digite a sua cidade' value='Chapecó' disabled />
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Estado</FormLabel>
							<Input placeholder='Digite o seu estado' value='Santa Catarina' disabled />
						</FormControl>
						<FormControl isRequired>
							<FormLabel>País</FormLabel>
							<Input placeholder='Digite o seu país' value='Brasil' disabled />
						</FormControl>
						<Button colorScheme='green' isLoading={isSubmitting} type='submit'>
							Cadastrar Endereço
						</Button>
					</Stack>
				</Box>
			</form>
		</DefaultTemplate>
	);
}
