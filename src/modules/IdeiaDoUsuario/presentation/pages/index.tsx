import { Footer } from '../../../../app/components/shared/Footer';
import { Header } from '../../../../app/components/shared/Header';
import { MainGrid } from '../components/MainGrid';

export function IdeiaDoUsuario() {
	return (
		<MainGrid>
			<Header toGoBack />
			<Footer />
		</MainGrid>
	);
}
