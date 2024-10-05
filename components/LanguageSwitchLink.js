import { useRouter } from 'next/router';
import Link from 'next/link';
import languageDetector from '../lib/languageDetector';

const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  const currentLocale = router.query.locale;
  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k]);
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  return (
    <Link href={href}>
      <button
        style={{
          fontSize: 'small',
          color: currentLocale === locale ? '#fff' : '#606060',
        }}
        onClick={() => languageDetector.cache(locale)}
      >
        {locale === 'ko' ? '한국어' : 'English'}
      </button>
    </Link>
  );
};

export default LanguageSwitchLink;
