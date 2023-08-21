import { createBrowserRouter } from 'react-router-dom';
import { ColetaSeletiva } from '../../modules/ColetaSeletiva/presentation/pages';
import { Configuracoes } from '../../modules/Configuracoes/presentation/pages';
import { Educativo } from '../../modules/Educativo/presentation/pages';
import { Home } from '../../modules/Home/presentation/pages';
import { IdeiaDoUsuario } from '../../modules/IdeiaDoUsuario/presentation/pages';
import { Informacoes } from '../../modules/Informacoes/presentation/pages';
import { Login } from '../../modules/Login/presentation/pages';
import { PontoDeColeta } from '../../modules/PontoDeColeta/presentation/pages';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/home',
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
	{
		path: '/informacoes',
		element: <Informacoes />,
	},
	{
		path: '/configuracoes',
		element: <Configuracoes />,
	},
	{
		path: '/ideiausuario',
		element: <IdeiaDoUsuario />,
	},
]);
