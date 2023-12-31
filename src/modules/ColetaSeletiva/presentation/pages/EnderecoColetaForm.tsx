import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { viaCep } from '../../../../core/utils/viaCep';

const schema = object({
	nomeDoEndereco: string().required('O nome do endereço é obrigatório.'),
	cep: string()
		.required('O nome do CEP é obrigatório.')
		.matches(/^\d{5}-?\d{3}$/, 'O CEP deve estar no formato XXXXX-XXX ou XXXXXXXX'),
	rua: string().required('O nome da rua é obrigatório.'),
	bairro: string().required('O nome do bairro é obrigatório.'),
	numeroResidencial: string(),
});

export function EnderecoColetaForm() {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const cep = watch('cep');

	useEffect(() => {
		if (cep && (cep.length === 8 || cep.length === 9)) {
			const cepWithoutHyphen = cep.replace('-', '');
			viaCep(cepWithoutHyphen)
				.then((response) => {
					setValue('rua', response.logradouro);
					setValue('bairro', response.bairro);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [cep]);
	function onSubmit() {}

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Box display='flex' justifyContent='center' margin='16px'>
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
					<FormControl isRequired isInvalid={!!errors.rua}>
						<FormLabel>CEP</FormLabel>
						<Input placeholder='Digite o seu CEP' {...register('cep')} />
						{errors.cep && <FormErrorMessage>{errors.cep.message}</FormErrorMessage>}
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
					<FormControl isInvalid={!!errors.numeroResidencial}>
						<FormLabel>Número Residencial</FormLabel>
						<Input placeholder='Digite o seu número residencial' {...register('numeroResidencial')} />
						{errors.numeroResidencial && <FormErrorMessage>{errors.numeroResidencial.message}</FormErrorMessage>}
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
	);
}
