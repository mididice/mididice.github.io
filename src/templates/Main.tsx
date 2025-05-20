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
      className={`${myFont.className} mx-auto h-full w-full px-1 text-gray-100`}
      onWheel={handleScroll}
    >
      {props.meta}
      <header className="relative mx-auto h-24 max-w-6xl px-24">
        <nav className="flex h-full flex-wrap items-center justify-between">
          <div className="flex h-full shrink-0 items-center">
            <span className="text-4xl font-semibold text-white">
              <Link className="link" href="/">
                {AppConfig.title}
              </Link>
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
            <div className="mt-4 block text-teal-200 lg:mt-0 lg:inline-block">
              <LanguageSwitchLink
                locale="ko"
                className="block text-teal-200 lg:mt-0 lg:inline-block"
              />
              <span className="block px-1 text-teal-200 lg:mt-0 lg:inline-block">
                |
              </span>
              <LanguageSwitchLink
                locale="en"
                className="block text-teal-200 lg:mt-0 lg:inline-block"
              />
            </div>
          </div>
        </nav>
      </header>
      <div className="mx-auto">
        <main className="content text-xl">{props.children}</main>

        <footer className="mx-auto h-[350px] max-w-6xl">
          <div className="flex flex-col items-start justify-start">
            <span className="footer-team">
              <button
                type="button"
                className="link"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                midiDICE
              </button>
            </span>
            <span className="footer-contact">
              Feel free to contact us via email at&nbsp;
              <a className="footer-email link" href="mailto:mididice@gmail.com">
                mididice@gmail.com
              </a>
            </span>
            <span className="footer-contact">
              Explore our work on GitHub&nbsp;
              <a
                className="link inline-flex align-middle"
                href="https://github.com/mididice"
              >
                <img
                  className="w-5"
                  src="http://d1q98opzn481en.cloudfront.net/github-mark-white.svg"
                  alt="github link"
                />
              </a>
            </span>
            <span className="footer-copyright">
              Copyright © {new Date().getFullYear()} {AppConfig.title}.&nbsp;
              all rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export { Main };
