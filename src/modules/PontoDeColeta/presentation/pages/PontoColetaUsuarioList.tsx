import { Center, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useTheme } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { BoxBorder } from '../../../../app/components/shared/BoxBorder';
import { pontosCadastrados } from '../constants/pontosCadastrados';

export function PontoColetaUsuarioList() {
	const { colors } = useTheme();

	return (
		<Center>
			<BoxBorder>
				<TableContainer>
					<Table size='sm'>
						<Thead>
							<Tr>
								<Th>Local</Th>
								<Th>Coleta Prevista</Th>
								<Th />
							</Tr>
						</Thead>
						<Tbody>
							{pontosCadastrados.map((ponto) => (
								<Tr
									key={uuidv4()}
									_hover={{ backgroundColor: colors.lightGray, borderRadius: '0.2s', transition: '0.5s' }}
								>
									<Td>{ponto.descricao}</Td>
									<Td>{ponto.enderecoCompleto}</Td>
									<Td>{ponto.materiaisAceitos}</Td>
									<Td>{ponto.nomeDoPonto}</Td>
									<Td>{ponto.periodoDeColeta}</Td>
									<Td>{ponto.tipo}</Td>
									<Td>{ponto.responsavel.contato}</Td>
									<Td>{ponto.responsavel.nome}</Td>
									<Td>{ponto.responsavel.tipo}</Td>
									<Td>{ponto.responsavel.website}</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>
			</BoxBorder>
		</Center>
	);
}
