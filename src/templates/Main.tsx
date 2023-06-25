import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

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
        <nav className="lg:flex flex-grow items-center">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="ml-20 mr-6">
              <Link
                href="/about/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="border-none text-gray-700 hover:text-gray-900"
                href="/project/"
              >
                Project
              </a>
            </li>
            <li className="mr-6">
              <Link
                href="/language/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                KO|EN
              </Link>
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
