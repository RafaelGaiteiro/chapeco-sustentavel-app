import { Header } from '../../../../app/components/shared/Header';
import { Footer } from '../../../../app/components/shared/Footer';
import { MainGrid } from '../components/MainGrid';

export function ColetaSeletiva() {
	return (
		<MainGrid>
			<Header toGoBack />
			<Footer />
		</MainGrid>
	);
}
