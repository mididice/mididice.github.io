import Head from 'next/head';
import Script from 'next/script';
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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-V7TWYW0PH9"
      />
      <Script
        id="apply-ga"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V7TWYW0PH9', {
          page_path: window.location.pathname + window.location.search,
          });`,
        }}
      />
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
