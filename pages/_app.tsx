import {ChakraProvider} from "@chakra-ui/react";
import { AppProps } from "next/app";

const App = ({Component, pageProps}: AppProps) => {
  return (
    <ChakraProvider resetCSS={true}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;