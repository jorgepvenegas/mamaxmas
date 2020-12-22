import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";

const globalTheme = {
  "html, body": {
    bg: "green.800",
  },
  "li": {
    listStyle: "none"
  }
};

const customTheme = extendTheme({ styles: {
  global: globalTheme,
} });

const App = ({Component, pageProps}: AppProps) => {
  return (
    <ChakraProvider resetCSS={true} theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;