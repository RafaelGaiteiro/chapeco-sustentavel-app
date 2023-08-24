import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Center,
	Divider,
	Heading,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';
import { BoxBorder } from '../../../../app/components/shared/BoxBorder';
import { Header } from '../../../../app/components/shared/Header';
import { pontosCadastrados } from '../constants/pontosCadastrados';

export function PontoColetaList() {
	return (
		<Box>
			<Header title='Ponto de Coleta' toGoBack />
			<Center>
				<BoxBorder>
					<Box display='flex' gap='4px' flexDir='column'>
						{pontosCadastrados.map((ponto) => (
							<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
								<Card>
									<CardHeader>
										<Heading size='md'>{ponto.nomeDoPonto}</Heading>
									</CardHeader>
									<CardBody>
										<Text>
											<Text fontWeight='bold'>Endereço Completo: </Text>
											{ponto.enderecoCompleto}
										</Text>
										<Divider />
										<Text>
											<Text fontWeight='bold'>Materiais Aceitos: </Text>
											{ponto.materiaisAceitos.join(', ')}
										</Text>
										<Divider />
										<Text>
											<Text fontWeight='bold'>Horários para entrega: </Text>
											{ponto.periodoDeColeta}
										</Text>
										<Divider />
										<Text>
											<Text fontWeight='bold'>Horários para entrega: </Text>
											{ponto.descricao}
										</Text>
										<Divider />
										<Text>
											<Text fontWeight='bold'>Horários para entrega: </Text>
											{ponto.periodoDeColeta}
										</Text>
										<Divider />
										<Text>
											<Text fontWeight='bold'>Horários para entrega: </Text>
											{ponto.responsavel.contato}
										</Text>{' '}
										<Divider />
										<Text>
											<Text fontWeight='bold'>Horários para entrega: </Text>
											{ponto.responsavel.nome}
										</Text>{' '}
										<Divider />
										<Text>
											<Text fontWeight='bold'>Horários para entrega: </Text>
											{ponto.responsavel.tipo}
										</Text>{' '}
										<Divider />
										<Text fontWeight='bold'>
											Horários para entrega:
											{ponto.responsavel.website}
										</Text>{' '}
										<Divider />
										<Text>
											<Text fontWeight='bold'>Horários para entrega: </Text>
											{ponto.tipo}
										</Text>{' '}
									</CardBody>
									<CardFooter>
										<Button>Mains informações</Button>
									</CardFooter>
								</Card>
							</SimpleGrid>
						))}
					</Box>
				</BoxBorder>
			</Center>
		</Box>
	);
}
