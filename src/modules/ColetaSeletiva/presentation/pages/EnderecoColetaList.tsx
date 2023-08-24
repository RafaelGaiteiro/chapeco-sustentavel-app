import { Button, Center, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { RiEditFill } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { BoxBorder } from '../../../../app/components/shared/BoxBorder';
import { EnderecosCadastradosProps } from '../constants/enderecosCadastrados';

type RegisteredAddressComponentProps = {
	enderecosCadastradosProps: EnderecosCadastradosProps[];
};

export function EnderecoColetaList({ enderecosCadastradosProps }: RegisteredAddressComponentProps) {
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
							{enderecosCadastradosProps.map(({ adressName, collectionPeriod }) => (
								<Tr
									key={uuidv4()}
									_hover={{ backgroundColor: colors.lightGray, borderRadius: '0.2s', transition: '0.5s' }}
								>
									<Td>{adressName}</Td>
									<Td>{collectionPeriod}</Td>
									<Td>
										<Button>
											<RiEditFill />
										</Button>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>
			</BoxBorder>
		</Center>
	);
}
