import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { AppConfig } from '@/utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="icon"
          href="https://d1q98opzn481en.cloudfront.net/favicon.ico"
          key="favicon"
        />
      </Head>
      <GoogleTagManager gtmId="G-V7TWYW0PH9" />
      <GoogleAnalytics gaId="G-V7TWYW0PH9" />
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          images: [
            {
              url: 'http://d1q98opzn481en.cloudfront.net/midipurple.png',
              width: 180,
              height: 180,
              alt: '미디다이스',
              type: 'image/png',
            },
          ],
        }}
      />
    </>
  );
};

export { Meta };
