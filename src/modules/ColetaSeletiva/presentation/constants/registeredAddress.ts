type RegisteredAddressProps = {
	adressName: string;
	fullAddress: string;
	collectionPeriod: string;
};

export const registeredAddress: RegisteredAddressProps[] = [
	{
		adressName: 'Minha casa',
		collectionPeriod: 'Hoje a tarde',
		fullAddress: 'Rua São Geronimo, Bairro esplanada, 610D, Chapecó',
	},
	{
		adressName: 'Casa da vó',
		collectionPeriod: 'Amanhã pela manhã',
		fullAddress: 'Rua dos Lírios, Bairro Jardim, 123A, Chapecó',
	},
	{
		adressName: 'Casa da tia',
		collectionPeriod: 'Sábado',
		fullAddress: 'Rua das Orquídeas, Bairro Centro, 456B, Chapecó',
	},
	{
		adressName: 'Casa da Duda',
		collectionPeriod: 'Domingo pela tarde',
		fullAddress: 'Avenida Principal, Bairro Estação, 789C, Chapecó',
	},
	{
		adressName: 'Ap. do pai',
		collectionPeriod: 'Segunda-feira',
		fullAddress: 'Rua Secundária, Bairro Alto, 012D, Chapecó',
	},
	{
		adressName: 'Chácara do João',
		collectionPeriod: 'Terça-feira',
		fullAddress: 'Estrada do Campo, Zona Rural, S/N, Chapecó',
	},
];
