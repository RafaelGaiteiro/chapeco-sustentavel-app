import { ReactNode } from 'react';
import { styled } from 'styled-components';

type ContainerProps = {
	children: ReactNode;
};

export function Container({ children }: ContainerProps) {
	return <ContainerSylized>{children}</ContainerSylized>;
}

const ContainerSylized = styled.div``;
