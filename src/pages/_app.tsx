import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@components/common/Layout';
import GoogleAnalytics from '@components/common/GoogleAnalytics';
import KakaoScript from '@components/common/Script/kakao';
import { theme } from '@theme';
import useGoogleAnalytics from '@hooks/useGoogleAnalytics';

function App({ Component, pageProps }: AppProps) {
  useGoogleAnalytics();

  return (
    <>
      <GoogleAnalytics />
      <KakaoScript />
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;
