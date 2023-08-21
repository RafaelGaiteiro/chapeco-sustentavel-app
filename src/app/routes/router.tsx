import { createBrowserRouter } from 'react-router-dom';
import { ColetaSeletiva } from '../../modules/ColetaSeletiva/presentation/pages';
import { Educativo } from '../../modules/Educativo/presentation/pages';
import { PontoDeColeta } from '../../modules/PontoDeColeta/presentation/pages';
import { Configuracoes } from '../../pages/Configuracoes/presentation';
import { Home } from '../../pages/Home/presentation';
import { IdeiaDoUsuario } from '../../pages/IdeiaDoUsuario/presentation';
import { Informacoes } from '../../pages/Informacoes/presentation';
import { Login } from '../../pages/Login/presentation';
import { NovaConta } from '../../pages/NovaConta';
import { RecuperarSenha } from '../../pages/RecuperarSenha';

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
	{
		path: '/recuperarsenha',
		element: <RecuperarSenha />,
	},
	{
		path: '/novaconta',
		element: <NovaConta />,
	},
]);
