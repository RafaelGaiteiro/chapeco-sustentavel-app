import { Box, Button } from '@chakra-ui/react';
import { ImTruck } from 'react-icons/im';
import { FaHandshake } from 'react-icons/fa';

export function HomePage() {
	return (
		<Box display='flex' h='100vh' w='100%'>
			<Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' p={8} gap={2} w='100%'>
				<Button w='100%' maxW={500} colorScheme='blue' h={90} position='relative' justifyContent='center'>
					<Box position='absolute' left={5}>
						<ImTruck size={50} />
					</Box>
					<Box w='calc(100% - 50)'>Coleta Seletiva</Box>
				</Button>

				<Button w='100%' maxW={500} colorScheme='blue' h={100} position='relative' justifyContent='center'>
					<Box position='absolute' left={5} top='50%' transform='translateY(-50%)' w={50}>
						<FaHandshake size={50} />
					</Box>
					<Box boxSizing='border-box' w='50%' word-break='break-all' overflowWrap='break-word'>
						Estações de Reciclagem Parceiras
					</Box>
				</Button>

				<Button w='100%' maxW={500} colorScheme='blue' h={100}>
					Criar Ponto de Coleta
				</Button>

				<Button w='100%' maxW={500} colorScheme='blue' h={100}>
					Reciclagem em Casa
				</Button>

				<Button w='100%' maxW={500} colorScheme='blue' h={100}>
					Educacional
				</Button>

				<Button w='100%' maxW={500} colorScheme='blue' h={100}>
					Configurações
				</Button>
			</Box>
		</Box>
	);
}
