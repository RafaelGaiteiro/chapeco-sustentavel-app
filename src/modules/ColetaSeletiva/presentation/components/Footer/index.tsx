import styled from 'styled-components';

export function Footer() {
	return (
		<FooterStylized>
			<TextFooter>Em breve novas funcionalidades!</TextFooter>
		</FooterStylized>
	);
}

const FooterStylized = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 16px;
	text-align: center;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.green};
	border-radius: 24px 24px 0 0;
	user-select: none;
	height: 100%;
`;

const TextFooter = styled.h1`
	font-family: 'Poppins', sans-serif;
	font-size: 24px;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.white};
`;
