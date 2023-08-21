import { useNavigate } from 'react-router-dom';
import { Footer } from '../../../../app/components/shared/Footer';
import { Header } from '../../../../app/components/shared/Header';
import { DefaultTemplate } from '../../../../app/components/templates/DefaultTheme';
import { ModuleBox } from '../components/ModuleComponents/ModuleBox';
import { ModuleButton } from '../components/ModuleComponents/ModuleButton';
import { Welcome } from '../components/Welcome';
import { Box } from '@chakra-ui/react';

export function Home() {
	const navigate = useNavigate();

	return (
		<DefaultTemplate>
			<Header configurations exit information />
			<Box display='flex' flexDirection='column' rowGap='16px'>
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
			</Box>

			<Footer />
		</DefaultTemplate>
	);
}
