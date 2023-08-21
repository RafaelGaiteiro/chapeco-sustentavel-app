import { Img } from '@chakra-ui/react';
import styled from 'styled-components';
import smile from '../../../../../assets/svgs/smile.svg';

function getGreeting() {
	const currentHour = new Date().getHours();

	if (currentHour < 12) {
		return 'Bom dia';
	} else if (currentHour < 18) {
		return 'Boa tarde';
	} else {
		return 'Boa noite';
	}
}

export function Welcome() {
	const greeting = getGreeting();
	return (
		<WelcomeStylized>
			<TitleWecolme>
				{greeting}, <span>Rafael</span>
				<Img src={smile} alt='smile' w={6} />
			</TitleWecolme>
			<EarlyWarning>
				A próxima Coleta Seletiva em sua residência ocorrerá aproximadamente ás <span>9:30h</span>
			</EarlyWarning>
		</WelcomeStylized>
	);
}

const WelcomeStylized = styled.div`
	background-color: ${({ theme }) => theme.colors.green};
	padding: 16px;
	width: 90%;
	border-radius: 0 8px 8px 0;
`;

const TitleWecolme = styled.div`
	display: flex;
	column-gap: 8px;
	font-family: 'Poppins', sans-serif;
	font-size: 24px;
	font-weight: 300;
	color: ${({ theme }) => theme.colors.white};

	span {
		font-weight: 700;
	}
`;

const EarlyWarning = styled.div`
	font-family: 'Poppins', sans-serif;
	font-size: 16px;
	font-weight: 300;
	color: ${({ theme }) => theme.colors.white};

	span {
		font-weight: 700;
	}
`;
