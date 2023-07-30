import localFont from 'next/font/local';
import { type ReactNode, useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

import LanguageSwitchLink from '../../components/LanguageSwitchLink';
import Link from '../../components/Link';

const myFont = localFont({ src: '../fonts/Pretendard-Regular.woff' });

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const handleScroll = () => {
    document
      .querySelector('.history-active')
      ?.classList.remove('history-active');
    const element = document.elementFromPoint(
      window.innerWidth / 2,
      window.innerHeight / 2
    );
    if (element?.classList.contains('history')) {
      element?.classList.add('history-active');
    }
  };
  const [navbar, setNavbar] = useState<boolean>(false);
  const handleHamburger = () => {
    setNavbar(!navbar);
  };
  return (
    <div
      className={`${myFont.className} w-full bg-black px-1 text-gray-100`}
      onWheel={handleScroll}
    >
      {props.meta}
      <header className="px-22 z-2 relative mx-auto h-14 max-w-4xl">
        <nav className="flex h-full flex-wrap items-center justify-between">
          <div className="grow-1 flex h-full shrink-0 items-center">
            <span className="text-4xl font-semibold text-white">
              <Link href="/">{AppConfig.title}</Link>
            </span>
          </div>
          <div
            className="block lg:hidden"
            onClick={handleHamburger}
            role="presentation"
          >
            <button
              className="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white"
              type="button"
            >
              <svg
                className="h-3 w-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`${navbar ? '' : 'hidden'}
              block w-full lg:flex lg:w-auto lg:items-center`}
          >
            <div className="text-sm lg:grow">
              <Link
                href="/about/"
                className="mr-4 mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
              >
                About
              </Link>
              <Link
                href="/project/"
                className="mr-4 mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
              >
                Proejct
              </Link>
            </div>
            <div className="mt-4 block text-teal-200 lg:mt-0 lg:inline-block">
              <LanguageSwitchLink
                locale="ko"
                className="block text-teal-200 lg:mt-0 lg:inline-block"
              >
                KO
              </LanguageSwitchLink>
              <span className="block text-teal-200 lg:mt-0 lg:inline-block">
                |
              </span>
              <LanguageSwitchLink
                locale="en"
                className="block text-teal-200 lg:mt-0 lg:inline-block"
              >
                EN
              </LanguageSwitchLink>
            </div>
          </div>
        </nav>
      </header>
      <div className="mx-auto">
        <main className="content py-5 text-xl">{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}
        </footer>
      </div>
    </div>
  );
};

export { Main };
