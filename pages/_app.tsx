import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import ContextWrapper from "../components/ContextWrapper";

const globalTheme = {
  "html, body": {
    bg: "green.800",
  },
  "li": {
    listStyle: "none"
  }
};

const customTheme = extendTheme({
  styles: {
    global: globalTheme,
  }
});

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider resetCSS={true} theme={customTheme}>
      <ContextWrapper>
        <Component {...pageProps} />
      </ContextWrapper>
    </ChakraProvider>
  )
}

export default App;