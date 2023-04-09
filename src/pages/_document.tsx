import { Html, Head, Main, NextScript } from 'next/document';
import { assetPaths } from '@utils/assets';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={assetPaths.favicon} />
        <link rel="apple-touch-icon" href={assetPaths.appleTouchIcon} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
