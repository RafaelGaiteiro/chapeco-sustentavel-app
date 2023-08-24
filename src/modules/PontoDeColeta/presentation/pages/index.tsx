import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Highlight, Text } from '@chakra-ui/react';
import { Header } from '../../../../app/components/shared/Header';
import { EnderecoColetaForm } from '../../../ColetaSeletiva/presentation/pages/EnderecoColetaForm';
import { registeredAddress } from '../constants/registeredAddress';
import { PontoColetaList } from './PontoColetaList';
export function PontoDeColeta() {
	const existeAoMenosUmEndereco = true;

	return (
		<Box>
			<Header toGoBack title='Pontos De Coleta' />
			<Box margin='16px'>
				<Box marginBottom='16px'>
					<Box>
						<Box display='flex' flexDir='column' alignItems='center'>
							<Text textAlign='center'>
								Explore os pontos de coleta disponíveis em Chapecó - SC. Esses pontos, que podem ser permanentes ou
								temporários, são geralmente parte de projetos dedicados à causa.
							</Text>
							<Highlight
								query='Veja os pontos de coleta cadastrados.'
								styles={{ px: '2', py: '1', rounded: 'full', bg: 'green.200' }}
							>
								Veja os pontos de coleta cadastrados.
							</Highlight>
						</Box>
						<Button w='100%' colorScheme='blue' marginTop='8px'>
							Ver Pontos
						</Button>
					</Box>
					<Box marginTop='16px'>
						<Box display='flex' flexDir='column' alignItems='center'>
							<Text textAlign='center'>
								Quer fazer a diferença no meio ambiente e tem um espaço disponível, seja em sua empresa, escola,
								instituição ou qualquer outro local que possua? Estamos aqui para ajudar!
							</Text>
							<Highlight
								query='Cadastre seu ponto de coleta conosco.'
								styles={{ px: '2', py: '1', rounded: 'full', bg: 'green.200' }}
							>
								Cadastre seu ponto de coleta conosco.
							</Highlight>
						</Box>
						<Button w='100%' colorScheme='blue' marginTop='8px'>
							Cadastrar Ponto
						</Button>
					</Box>
				</Box>
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
							Nenhum ponto de coleta cadastrado.
						</AlertTitle>
						<AlertDescription maxWidth='sm'>
							Registre um ponto de coleta utilizando o formulário abaixo.
						</AlertDescription>
					</Alert>
				) : (
					<PontoColetaList registeredAddress={registeredAddress} />
				)}
				<EnderecoColetaForm />
			</Box>
		</Box>
	);
}
