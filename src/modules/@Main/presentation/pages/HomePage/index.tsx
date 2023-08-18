import { Container } from '../../components/atoms/Container';
import { ModuleButton } from '../../components/atoms/ModuleButton';
import { BoxModuleButton } from './../../components/atoms/BoxModuleButton/index';

export function HomePage() {
	return (
		<Container>
			<BoxModuleButton>
				<ModuleButton>Coleta Seletiva</ModuleButton>
				<ModuleButton>Estações de Reciclagem Parceiras</ModuleButton>
				<ModuleButton>Criar Ponto de Coleta</ModuleButton>
				<ModuleButton>Reciclagem em Casa</ModuleButton>
				<ModuleButton>Educacional</ModuleButton>
				<ModuleButton>Configurações</ModuleButton>
			</BoxModuleButton>
		</Container>
	);
}
