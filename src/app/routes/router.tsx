import { createBrowserRouter } from 'react-router-dom';
import { ColetaSeletiva } from '../../modules/ColetaSeletiva/presentation/pages';
import { Educativo } from '../../modules/Educativo/presentation/pages';
import { Home } from '../../modules/Home/presentation/pages';
import { PontoDeColeta } from '../../modules/PontoDeColeta/presentation/pages';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/coletaseletiva',
		element: <ColetaSeletiva />,
	},
	{
		path: '/pontodecoleta',
		element: <PontoDeColeta />,
	},
	{
		path: '/educativo',
		element: <Educativo />,
	},
]);
