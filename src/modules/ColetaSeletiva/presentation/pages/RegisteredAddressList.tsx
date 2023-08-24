import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { BoxBorder } from '../../../../app/components/shared/BoxBorder';
import { RegisteredAddressProps } from '../constants/registeredAddress';
import { useTheme } from 'styled-components';

type RegisteredAddressComponentProps = {
	registeredAddress: RegisteredAddressProps[];
};

export function RegisteredAddressList({ registeredAddress }: RegisteredAddressComponentProps) {
	const { colors } = useTheme();

	return (
		<BoxBorder>
			<TableContainer>
				<Table size='sm'>
					<Thead>
						<Tr>
							<Th>Local</Th>
							<Th>Coleta Prevista</Th>
						</Tr>
					</Thead>
					<Tbody>
						{registeredAddress.map(({ adressName, collectionPeriod }) => (
							<Tr
								key={uuidv4()}
								_hover={{ backgroundColor: colors.lightGray, borderRadius: '0.2s', transition: '0.5s' }}
							>
								<Td>{adressName}</Td>
								<Td>{collectionPeriod}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</BoxBorder>
	);
}
