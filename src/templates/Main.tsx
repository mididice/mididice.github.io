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
    const active = document.querySelector('.history-active');
    const element = document.elementFromPoint(
      window.innerWidth / 2,
      window.innerHeight / 2
    );
    if (active) {
      active.classList.remove('history-active');
    }

    if (element?.closest('.history')) {
      element.closest('.history')?.classList.add('history-active');
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
        <nav className="flex h-full flex-wrap items-center justify-center lg:justify-between">
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
            <button className="rounded-full p-2 text-xl" type="button">
              🌐
            </button>
          </div>
          <div
            className={`${navbar ? '' : 'hidden'}
              block w-full lg:flex lg:w-auto lg:items-center`}
          >
            <div className="flex h-10 items-center justify-center gap-4">
              <LanguageSwitchLink
                locale="ko"
                className="rounded-md bg-zinc-800 px-3 py-1 text-white transition duration-200 hover:bg-teal-600"
              />
              <span className="block px-1 text-teal-200 lg:mt-0 lg:inline-block">
                |
              </span>
              <LanguageSwitchLink
                locale="en"
                className="rounded-md bg-zinc-800 px-3 py-1 text-white transition duration-200 hover:bg-teal-600"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-5"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
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
