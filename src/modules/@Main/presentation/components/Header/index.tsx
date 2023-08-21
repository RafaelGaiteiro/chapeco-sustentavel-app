import { useEffect, useState } from 'react';
import styled from 'styled-components';

export function Header() {
	const [currentTime, setCurrentTime] = useState('');

	useEffect(() => {
		const timer = setInterval(() => {
			const date = new Date();
			const hora = String(date.getHours()).padStart(2, '0'); // 0-23
			const min = String(date.getMinutes()).padStart(2, '0'); // 0-59
			const seg = String(date.getSeconds()).padStart(2, '0'); // 0-59
			setCurrentTime(`${hora}:${min}:${seg}`);
		}, 1000);

		// Limpa o intervalo quando o componente é desmontado
		return () => clearInterval(timer);
	}, []);

	return (
		<HeaderStylized>
			<TimeBox>
				<TimeTitle>Horário Atual</TimeTitle>
				<CurrentTime>{currentTime}</CurrentTime>
			</TimeBox>
		</HeaderStylized>
	);
}

const HeaderStylized = styled.div`
	padding: 16px;
	background-color: #03c988;
	width: 100%;
`;

const TimeBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	line-height: 1;
`;

const TimeTitle = styled.div`
	font-family: 'Poppins', sans-serif;
	color: white;
	font-size: 16px;
	font-weight: 500;
`;

const CurrentTime = styled.div`
	font-family: 'Poppins', sans-serif;
	color: white;
	font-size: 32px;
	font-weight: 700;
`;
