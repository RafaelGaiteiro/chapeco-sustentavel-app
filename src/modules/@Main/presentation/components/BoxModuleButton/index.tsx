import { ReactNode } from 'react';
import { styled } from 'styled-components';

type BoxModuleButtonProps = {
	children: ReactNode;
};

export function BoxModuleButton({ children }: BoxModuleButtonProps) {
	return <BoxModuleButtonSylized>{children}</BoxModuleButtonSylized>;
}

const BoxModuleButtonSylized = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	flex-wrap: wrap;
	gap: 8px;
	height: 100vh;
`;
