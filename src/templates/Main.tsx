import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

import LanguageSwitchLink from '../../components/LanguageSwitchLink';
import Link from '../../components/Link';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <header className="border-b border-gray-300">
        <h1 className="text-3xl font-bold text-gray-900">
          <Link
            href="/"
            className="border-none text-gray-700 hover:text-gray-900"
          >
            {AppConfig.title}
          </Link>
        </h1>
        <nav className="grow items-center lg:flex">
          <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
            <li className="ml-20 mr-6">
              <Link
                href="/about/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
            </li>
            <li className="mr-6">
              <Link
                className="border-none text-gray-700 hover:text-gray-900"
                href="/project/"
              >
                Project
              </Link>
            </li>
            <li className="mr-6">
              <LanguageSwitchLink
                locale="ko"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                KO
              </LanguageSwitchLink>
              |
              <LanguageSwitchLink
                locale="en"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                EN
              </LanguageSwitchLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content py-5 text-xl">{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}
      </footer>
    </div>
  </div>
);

export { Main };
