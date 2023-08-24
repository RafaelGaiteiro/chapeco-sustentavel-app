import { Box, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { styled } from 'styled-components';
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

		// <AddressContainer>
		// 	<Text>Endereços Cadastrados</Text>
		// 	{registeredAddress.map(({ adressName, fullAddress, collectionPeriod }) => (
		// 		<RegisteredAddressBox key={uuidv4()}>
		// 			<AddressBox>
		// 				<AddressName>{adressName}</AddressName>
		// 				<FullAddress>{collectionPeriod}</FullAddress>
		// 			</AddressBox>
		// 			<CollectionTime>{fullAddress}</CollectionTime>
		// 		</RegisteredAddressBox>
		// 	))}
		// </AddressContainer>
	);
}

const AddressContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 4px;
	padding: 16px;
`;

const RegisteredAddressBox = styled.div`
	display: grid;
	grid-template-areas: 'Address CollectionTime';
	grid-template-columns: 1fr 1fr;
	padding: 16px;
	border-width: 1px;
	border-style: solid;
	border-radius: 8px;
	width: 100%;
	max-width: 600px;
`;

const AddressBox = styled.div`
	/* display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start; */
`;

const AddressName = styled.h1`
	font-weight: 600;
`;

const FullAddress = styled.div`
	user-select: none;
`;

const CollectionTime = styled.div`
	user-select: none;
`;
