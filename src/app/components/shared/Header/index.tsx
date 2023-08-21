import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineArrowBackIos } from 'react-icons/md';

interface HeaderProps {
	toGoBack?: boolean;
}

export function Header({ toGoBack }: HeaderProps) {
	const [currentTime, setCurrentTime] = useState('');

	useEffect(() => {
		function updateTime() {
			const date = new Date();
			const hora = String(date.getHours()).padStart(2, '0');
			const min = String(date.getMinutes()).padStart(2, '0');
			const seg = String(date.getSeconds()).padStart(2, '0');
			setCurrentTime(`${hora}:${min}:${seg}`);
		}

		const timer = setInterval(updateTime, 1000);
		updateTime();

		return () => clearInterval(timer);
	}, []);

	return (
		<HeaderStylized>
			{toGoBack && (
				<BoxBackButton>
					<MdOutlineArrowBackIos color='white' size={25} onClick={() => window.history?.back()} />
				</BoxBackButton>
			)}
			<TimeBox>
				<TimeTitle>Horário Atual</TimeTitle>
				<CurrentTime aria-live='polite'>{currentTime}</CurrentTime>
			</TimeBox>
		</HeaderStylized>
	);
}

const HeaderStylized = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.green};
	width: 100%;
	height: 100%;
	user-select: none;
`;

const TimeBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	line-height: 1;
`;

const TimeTitle = styled.div`
	font-family: 'Poppins', sans-serif;
	color: ${({ theme }) => theme.colors.white};
	font-size: 16px;
	font-weight: 500;
`;

const CurrentTime = styled.div`
	font-family: 'Poppins', sans-serif;
	color: ${({ theme }) => theme.colors.white};
	font-size: 32px;
	font-weight: 700;
`;

const BoxBackButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	transition: background-color 0.2s ease-in-out;

	&&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	&&:active {
		background-color: rgba(255, 255, 255, 0.2);
	}
`;
