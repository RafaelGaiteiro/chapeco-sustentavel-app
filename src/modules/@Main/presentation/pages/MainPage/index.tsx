import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MainGrid } from '../../components/MainGrid';
import { ModuleBox } from '../../components/ModuleComponents/ModuleBox';
import { ModuleButton } from '../../components/ModuleComponents/ModuleButton';
import { Welcome } from '../../components/Welcome';

export function MainPage() {
	return (
		<MainGrid>
			<Header />
			<Welcome />
			<ModuleBox>
				<ModuleButton data={{ title: 'Coleta Seletiva', texts: ['Horários', 'Aviso Prévio'] }} src='' />
				<ModuleButton data={{ title: 'Ponto de Coleta', texts: ['Ver pontos', 'Criar Ponto'] }} src='' />
				<ModuleButton data={{ title: 'Educativo', texts: ['Materiais', 'Separação correta'] }} src='' />
			</ModuleBox>
			<Footer />
		</MainGrid>
	);
}
