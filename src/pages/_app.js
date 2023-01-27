import { ChakraProvider, theme } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const colors = {
   brand: {
      100: 'grey',
      200: 'rebeccapurple',
      300: 'red',
   },
};

export default function App({ Component, pageProps }) {
   const theme = extendTheme({ colors });

   return (
      <ChakraProvider theme={theme}>
         <Component {...pageProps} />
      </ChakraProvider>
   );
}
