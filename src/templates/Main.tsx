import { type ReactNode, useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

import LanguageSwitchLink from '../../components/LanguageSwitchLink';
import Link from '../../components/Link';

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
      className="w-full px-1 text-gray-700 antialiased"
      onWheel={handleScroll}
    >
      {props.meta}
      <div className="mx-auto max-w-screen-md">
        <header className="border-b border-gray-300">
          <nav className="flex flex-wrap items-center justify-between bg-black">
            <div className="mr-6 flex shrink-0 items-center text-white">
              <span className="text-xl font-semibold tracking-tight">
                {AppConfig.title}
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
              block w-full grow lg:flex lg:w-auto lg:items-center`}
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

        <main className="content py-5 text-xl">{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}
        </footer>
      </div>
    </div>
  );
};

export { Main };
