import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Panels from "./panels";
import Answers from "./answers"; // Example additional component

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Panels />} />
          <Route path="/answers" element={<Answers />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}