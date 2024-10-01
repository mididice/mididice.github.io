import Document, { Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '../../next-i18next.config';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const currentLocale: string = i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
