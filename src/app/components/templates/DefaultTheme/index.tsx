import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface DefaultThemeProps {
	children: ReactNode;
}

export function DefaultTemplate({ children }: DefaultThemeProps) {
	return <DefaultTemplateStylized>{children}</DefaultTemplateStylized>;
}

const DefaultTemplateStylized = styled.div`
	display: grid;
	grid-template-areas: 'Header' 'Content' 'Footer';
	grid-template-rows: 80px auto 120px;
	grid-row-gap: 16px;
	height: 100vh;
`;
