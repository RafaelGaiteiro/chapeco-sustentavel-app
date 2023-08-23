import { styled } from 'styled-components';

type RegisteredAddressProps = {
	adressName: string;
	fullAddress: string;
	collectionPeriod: string;
};

export function RegisteredAddress({ adressName, collectionPeriod, fullAddress }: RegisteredAddressProps) {
	return (
		<AddressContainer>
			<RegisteredAddressBox>
				<AddressBox>
					<AddressName>{adressName}</AddressName>
					<FullAddress>{collectionPeriod}</FullAddress>
				</AddressBox>
				<CollectionTime>{fullAddress}</CollectionTime>
			</RegisteredAddressBox>
		</AddressContainer>
	);
}

const AddressContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 8px;
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
