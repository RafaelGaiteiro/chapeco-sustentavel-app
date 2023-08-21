import { ReactNode } from 'react';
import styled from 'styled-components';

type ModuleBoxProps = {
	children: ReactNode;
};

export function ModuleBox({ children }: ModuleBoxProps) {
	return <ModuleBoxStylized>{children}</ModuleBoxStylized>;
}

const ModuleBoxStylized = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	align-items: center;
	gap: 16px;
`;
