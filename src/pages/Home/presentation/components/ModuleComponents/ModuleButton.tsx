import styled from 'styled-components';

type ModuleButtonProps = {
	data: {
		title: string;
		texts: string[];
	};
	src: string;
	onClick?: () => void;
};

export function ModuleButton({ data, src, onClick }: ModuleButtonProps) {
	return (
		<BoxButton onClick={onClick}>
			<BoxGreen>
				<TitleButton>{data.title}</TitleButton>
				{data.texts.map((text, index) => (
					<TextButton key={index}>{text}</TextButton>
				))}
			</BoxGreen>
			<BoxGray>
				<Logo src={src} />
			</BoxGray>
		</BoxButton>
	);
}

const BoxButton = styled.div`
	display: grid;
	grid-template-columns: 60% auto;
	width: 90%;
	border-radius: 16px;
	overflow: hidden;
	user-select: none;
	transition: all 0.2s ease-in-out;
	max-width: 600px;

	&:active {
		cursor: pointer;
		scale: 1.02;
	}
`;

const BoxGreen = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.green};
`;

const BoxGray = styled.div`
	background-color: ${({ theme }) => theme.colors.lightGray};
`;

const Logo = styled.img``;

const TitleButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	font-family: 'Poppins', sans-serif;
	color: ${({ theme }) => theme.colors.white};
	font-size: 20px;
	font-weight: 700;
`;

const TextButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	font-family: 'Poppins', sans-serif;
	color: ${({ theme }) => theme.colors.white};
	font-size: 16px;
	font-weight: 500;
`;
