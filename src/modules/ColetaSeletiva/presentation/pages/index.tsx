import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react';
import { Header } from '../../../../app/components/shared/Header';
import { registeredAddress } from '../constants/registeredAddress';
import { CadastroEnderecoForm } from './CadastroEnderecoForm';
import { RegisteredAddressList } from './RegisteredAddressList';

export function ColetaSeletiva() {
	const existeAoMenosUmEndereco = true;

	return (
		<Box>
			<Header toGoBack title='Coleta Seletiva' />
			<Box>
				{!existeAoMenosUmEndereco ? (
					<Alert
						status='warning'
						variant='subtle'
						flexDirection='column'
						alignItems='center'
						justifyContent='center'
						textAlign='center'
						height='200px'
					>
						<AlertIcon boxSize='40px' mr={0} />
						<AlertTitle mt={4} mb={1} fontSize='lg'>
							Nenhum endereço cadastrado.
						</AlertTitle>
						<AlertDescription maxWidth='sm'>Registre um endereço utilizando o formulário abaixo.</AlertDescription>
					</Alert>
				) : (
					<RegisteredAddressList registeredAddress={registeredAddress} />
				)}
				<CadastroEnderecoForm />
			</Box>
		</Box>
	);
}
