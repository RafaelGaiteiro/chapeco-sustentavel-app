import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { RegisteredAddressProps } from '../../constants/registeredAddress';

type RegisteredAddressComponentProps = {
	registeredAddress: RegisteredAddressProps[];
};

export function RegisteredAddress({ registeredAddress }: RegisteredAddressComponentProps) {
	return (
		<Box margin='16px' borderWidth='1px' borderRadius='12px' padding='12px'>
			<TableContainer>
				<Table size='md'>
					<Thead>
						<Tr>
							<Th>Local</Th>
							<Th>Coleta Prevista</Th>
						</Tr>
					</Thead>
					<Tbody>
						{registeredAddress.map(({ adressName, collectionPeriod }) => (
							<Tr key={uuidv4()}>
								<Td>{adressName}</Td>
								<Td>{collectionPeriod}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
}
