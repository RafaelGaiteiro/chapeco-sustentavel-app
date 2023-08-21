import { styled } from 'styled-components';

export const MainGrid = styled.div`
	display: grid;
	grid-template-areas: 'Header' 'Welcome' 'Content' 'Footer';
	grid-template-rows: 80px auto auto auto;
	grid-row-gap: 16px;
	height: 100vh;
`;
