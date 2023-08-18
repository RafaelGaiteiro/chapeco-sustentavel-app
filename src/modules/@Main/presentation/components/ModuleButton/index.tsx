import { ReactNode } from 'react';
import { styled } from 'styled-components';

type ModuleButtonProps = {
	children: ReactNode;
};

export function ModuleButton({ children }: ModuleButtonProps) {
	return <ModuleButtonSylized>{children}</ModuleButtonSylized>;
}

const ModuleButtonSylized = styled.button`
	height: 100px;
	width: 100px;
	border-color: rgba(0, 0, 0, 0.1);
	border-width: 2px;
	border-radius: 8px;
`;
