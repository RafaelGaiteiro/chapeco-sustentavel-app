import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { Footer } from '../../shared/Footer';

interface DefaultThemeProps {
	children: ReactNode;
	defaultFooter?: boolean;
}

export function DefaultTemplate({ children, defaultFooter }: DefaultThemeProps) {
	return (
		<DefaultTemplateStylized>
			{children}
			{defaultFooter && <Footer />}
		</DefaultTemplateStylized>
	);
}

const DefaultTemplateStylized = styled.div`
	display: grid;
	grid-template-areas: 'Header' 'Content' 'Footer';
	grid-template-rows: 80px auto auto;
	height: 100%;
`;
