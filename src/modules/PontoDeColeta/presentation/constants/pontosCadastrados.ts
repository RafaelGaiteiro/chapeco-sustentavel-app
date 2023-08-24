type PontoDeColeta = {
	nomeDoPonto: string;
	tipo: 'Fixo' | 'Temporário';
	periodoDeColeta: string;
	enderecoCompleto: string;
	materiaisAceitos: string[];
	descricao?: string;
	responsavel: {
		nome: string;
		contato: string;
		tipo: 'Individual' | 'Empresa' | 'ONG' | 'Escola' | string;
		website?: string;
	};
};

export const pontosCadastrados: PontoDeColeta[] = [
	{
		nomeDoPonto: ' ',
		tipo: 'Fixo',
		periodoDeColeta: 'Hoje à tarde',
		enderecoCompleto: 'Rua São Geronimo, Bairro Esplanada, 610D, Chapecó',
		materiaisAceitos: ['Plástico', 'Papel'],
		responsavel: {
			nome: 'João Silva',
			contato: 'joaosilva@gmail.com',
			tipo: 'Individual',
		},
	},
	{
		nomeDoPonto: 'Casa da Vó',
		tipo: 'Temporário',
		periodoDeColeta: 'Amanhã pela manhã',
		enderecoCompleto: 'Rua dos Lírios, Bairro Jardim, 123A, Chapecó',
		materiaisAceitos: ['Eletrônicos'],
		responsavel: {
			nome: 'Maria Pereira',
			contato: 'maria@exemplo.com',
			tipo: 'Individual',
		},
	},
	{
		nomeDoPonto: 'ReciclaTech',
		tipo: 'Fixo',
		periodoDeColeta: 'Todos os dias',
		enderecoCompleto: 'Rua das Tecnologias, Bairro Inovação, 888E, Chapecó',
		materiaisAceitos: ['Eletrônicos', 'Baterias'],
		descricao: 'Ponto especializado em coleta de eletrônicos.',
		responsavel: {
			nome: 'ReciclaTech Ltda.',
			contato: 'contato@reciclatech.com',
			tipo: 'Empresa',
			website: 'www.reciclatech.com',
		},
	},
	{
		nomeDoPonto: 'Escola Ambiental',
		tipo: 'Fixo',
		periodoDeColeta: 'Segunda a Sexta',
		enderecoCompleto: 'Avenida Educação, Bairro Estudante, 777F, Chapecó',
		materiaisAceitos: ['Papel', 'Papelão', 'Plástico'],
		responsavel: {
			nome: 'Escola Ambiental de Chapecó',
			contato: 'secretaria@escolaambiental.edu.br',
			tipo: 'Escola',
			website: 'www.escolaambiental.edu.br',
		},
	},
	{
		nomeDoPonto: 'ONG Salve o Planeta',
		tipo: 'Temporário',
		periodoDeColeta: 'Eventos mensais',
		enderecoCompleto: 'Praça Central, Bairro Cidade, 999G, Chapecó',
		materiaisAceitos: ['Plástico', 'Vidro', 'Metal'],
		responsavel: {
			nome: 'ONG Salve o Planeta',
			contato: 'contato@salveoplaneta.org',
			tipo: 'ONG',
			website: 'www.salveoplaneta.org',
		},
	},
];
