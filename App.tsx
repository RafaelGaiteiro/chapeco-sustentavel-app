import { ChakraProvider } from "@chakra-ui/react";
import { HomePage } from "./src/modules/@Main/presentation/pages/HomePage";

export function App() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}
