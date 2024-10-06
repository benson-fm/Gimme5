import { ChakraProvider } from "@chakra-ui/react";
import Panels from "./panels"
export default function App() {
  return (
    <ChakraProvider>
      <Panels />
    </ChakraProvider>
  );
}
