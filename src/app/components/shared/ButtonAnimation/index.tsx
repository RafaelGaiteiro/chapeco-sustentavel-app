import { styled } from 'styled-components';

export const ButtonAnimation = styled.button`
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
