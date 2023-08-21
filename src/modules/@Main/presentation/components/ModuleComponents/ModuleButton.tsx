import styled from 'styled-components';

type ModuleButtonProps = {
	data: {
		title: string;
		texts: string[];
	};
	src: string;
};

export function ModuleButton({ data, src }: ModuleButtonProps) {
	return (
		<BoxButton>
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
`;

const BoxGreen = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 16px;
	background-color: #03c988;
`;

const BoxGray = styled.div`
	background-color: #f5f5f5;
`;

const Logo = styled.img``;

const TitleButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	font-family: 'Poppins', sans-serif;
	color: white;
	font-size: 20px;
	font-weight: 700;
`;

const TextButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	font-family: 'Poppins', sans-serif;
	color: white;
	font-size: 16px;
	font-weight: 500;
`;
