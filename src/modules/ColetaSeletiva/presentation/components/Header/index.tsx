import { useEffect, useState } from 'react';
import styled from 'styled-components';

export function Header() {
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
