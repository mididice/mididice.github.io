import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LinkComponent = ({ children, ...rest }) => {
  const router = useRouter();
  const locale = rest.locale || router.query.locale || '';
  let href = rest.href || router.asPath;
  if (locale) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace('[locale]', locale);
  }

  return (
    <>
      <Link href={href} legacyBehavior>
        <a {...rest}>{children}</a>
      </Link>
    </>
  );
};

export default LinkComponent;
