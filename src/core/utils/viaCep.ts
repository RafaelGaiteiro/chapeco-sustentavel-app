import axios from 'axios';

const BASE_URL = 'https://viacep.com.br/ws';

export function viaCep(cep: string) {
	return axios
		.get(`${BASE_URL}/${cep}/json`)
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}
