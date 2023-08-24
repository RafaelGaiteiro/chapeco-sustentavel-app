import { Box, Text } from '@chakra-ui/react';
import { FcIdea } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export function Footer() {
	const navigate = useNavigate();
	return (
		<FooterStylized>
			<UserIdea onClick={() => navigate('/ideiausuario')}>
				<Box display='flex' justifyContent='center' alignItems='center' gap='8px'>
					<Text fontSize='18px'>Gostaria de ver sua ideia aqui?</Text>
					<FcIdea size={25} />
				</Box>
				<Text fontSize='16px'>Conte para nós!</Text>
			</UserIdea>
		</FooterStylized>
	);
}

const FooterStylized = styled.div`
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 16px;
	text-align: center;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.Green500};
	border-radius: 24px 24px 0 0;
	user-select: none;
`;

const UserIdea = styled.div`
	font-family: 'Poppins';
	color: ${({ theme }) => theme.colors.white};
	border: ${({ theme }) => theme.colors.white} solid;
	border-radius: 8px;
	border-width: 2px;
	padding: 8px 16px;
	cursor: pointer;
	transition: 0.2s ease-in-out;
	user-select: none;

	&&:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}

	&&:active {
		background-color: rgba(255, 255, 255, 0.3);
		scale: 1.02;
	}
`;
