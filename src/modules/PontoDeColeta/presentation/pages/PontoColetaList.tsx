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
											<Text fontWeight='bold'>Dias e horários para entrega: </Text>
											{ponto.periodoDeColeta}
										</Text>
										<Divider />
										{ponto.descricao && (
											<Text>
												<Text fontWeight='bold'>Descrição: </Text>
												{ponto.descricao}
											</Text>
										)}
										<Divider />
										<Text>
											<Text fontWeight='bold'>Tipo de Ponto: </Text>
											{ponto.tipo}
										</Text>
										<Divider />
										<Text>
											<Text fontWeight='bold'>Início do Projeto: </Text>
											{ponto.inicio}
										</Text>
										{ponto.final && (
											<>
												<Divider />
												<Text>
													<Text fontWeight='bold'>Final do Projeto: </Text>
													{ponto.final}
												</Text>
											</>
										)}
										<Divider />
										<Text>
											<Text fontWeight='bold'>Responsável: </Text>
											<Text>{ponto.responsavel.nome}</Text>
											<Text>{ponto.responsavel.contato}</Text>
											<Text>{ponto.responsavel.tipo}</Text>
											<Text>{ponto.responsavel.website}</Text>
										</Text>
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
