import { useEffect, useState } from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import { MdExitToApp, MdOutlineArrowBackIos } from 'react-icons/md';
import { HiInformationCircle } from 'react-icons/hi';
import styled from 'styled-components';
import { ButtonAnimation } from '../ButtonAnimation';
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
				<ButtonAnimation>
					<MdOutlineArrowBackIos color='white' size={25} onClick={() => window.history?.back()} />
				</ButtonAnimation>
			)}
			<TimeBox>
				<TimeTitle>Horário Atual</TimeTitle>
				<CurrentTime aria-live='polite'>{currentTime}</CurrentTime>
			</TimeBox>
			<TopButtons>
				<ButtonAnimation>
					<HiInformationCircle color='white' size='48px' />
				</ButtonAnimation>
				<ButtonAnimation>
					<BsFillGearFill color='white' size='40px' />
				</ButtonAnimation>
				<ButtonAnimation>
					<MdExitToApp color='white' size='48px' />
				</ButtonAnimation>
			</TopButtons>
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
	transition: 0.2s ease-in-out;
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

const TopButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	column-gap: 16px;
`;
