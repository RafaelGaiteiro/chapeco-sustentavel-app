import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { MainGrid } from '../components/MainGrid';
import { ModuleBox } from '../components/ModuleComponents/ModuleBox';
import { ModuleButton } from '../components/ModuleComponents/ModuleButton';
import { Welcome } from '../components/Welcome';

export function Home() {
	const navigate = useNavigate();

	return (
		<MainGrid>
			<Header />
			<Welcome />
			<ModuleBox>
				<ModuleButton
					data={{ title: 'Coleta Seletiva', texts: ['Horários', 'Aviso Prévio'] }}
					src=''
					onClick={() => navigate('/coletaseletiva')}
				/>
				<ModuleButton
					data={{ title: 'Ponto de Coleta', texts: ['Ver pontos', 'Criar Ponto'] }}
					src=''
					onClick={() => navigate('/pontodecoleta')}
				/>
				<ModuleButton
					data={{ title: 'Educativo', texts: ['Materiais', 'Separação correta'] }}
					src=''
					onClick={() => navigate('/educativo')}
				/>
			</ModuleBox>
			<Footer />
		</MainGrid>
	);
}
