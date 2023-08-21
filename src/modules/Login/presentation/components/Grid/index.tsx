import { styled } from 'styled-components';

export const Grid = styled.div`
	display: grid;
	grid-template-areas: 'Header' 'Login';
	grid-template-rows: 80px auto;
	grid-row-gap: 16px;
	height: 100vh;
`;
