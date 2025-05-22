import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';

// const throttle = (callback, delay) => {
//   let last;
//   let timer;
//   return function () {
//     const context = this;
//     const now = +new Date();
//     const args = arguments;
//     if (last && now < last + delay) {
//       clearTimeout(timer);
//       timer = setTimeout(function () {
//         last = now;
//         callback.apply(context, args);
//       }, delay);
//     } else {
//       last = now;
//       callback.apply(context, args);
//     }
//   };
// };

// const IntroVideo = () => {
//   const url = '/assets/video/tmp.mp4';
//   const { scrollYProgress, scrollY } = useScroll();
//   const ref = useRef();

//   const updateAtScroll = () => {
//     const video = ref.current;
//     video.pause();
//     const p = scrollYProgress.get();
//     const currentFrame = Math.round(p * video.duration * 1000) / 1000;
//     // if (isFinite(currentFrame)) {
//     video.currentTime = currentFrame;
//     // }
//   };

//   useEffect(() => scrollY.onChange(throttle(updateAtScroll, 80)), []);

//   return (
//     <VideoS className="w-full fixed left-0" ref={ref}>
//       <source src={url} type="video/webm" />
//     </VideoS>
//   );
// };
const FirstScene = () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center py-72 text-center text-white opacity-100 md:py-96">
      <h2 className="head-title w-11/12 text-5xl md:w-6/12 md:text-7xl">
        {t('start')}
      </h2>
    </div>
  );
};

const Introduction = () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="mx-auto flex min-h-[1260px] max-w-6xl items-center justify-center text-white">
      <div className="p-12">
        <p className="history text-5xl md:text-6xl">{t('introduce1')}</p>
        <p className="history text-5xl md:text-6xl">{t('introduce2')}</p>
        <p className="history text-5xl md:text-6xl">{t('introduce3')}</p>
      </div>
    </div>
  );
};

const History = () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center md:my-80">
      <div>
        <h2 className="footstep-title">
          Tracing
          <br /> the Footsteps
          <br /> of the Past
        </h2>
        <div className="mt-48 grid grid-cols-5">
          <div className="col-span-1">
            <span className="footstep-type">{t('exhibition')}</span>
          </div>
          <ul className="col-span-4">
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2024.07</span>
              <div className="flex-1">
                <span className="mr-1">{t('e-title-2024')}</span>
                <span className="conferrer">{t('e-place-2024')}</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2023.05</span>
              <div className="flex-1">
                <span className="mr-1">{t('e-title-2023')}</span>
                <span className="conferrer">{t('e-place-2023')}</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2020.12</span>
              <div className="flex-1">
                <span className="mr-1">{t('e-title-2021')}</span>
                <span className="conferrer">{t('e-place-2021')}</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2020.01</span>
              <div className="flex-1">
                <span className="mr-1">{t('e-title-2019-3')}</span>
                <span className="conferrer">{t('e-place-2019-3')}</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2019.12</span>
              <div className="flex-1">
                <span className="mr-1">{t('e-title-2019-2')}</span>
                <span className="conferrer">{t('e-place-2019-2')}</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2019.05</span>
              <div className="flex-1">
                <span className="mr-1">{t('e-title-2019-1')}</span>
                <span className="conferrer">{t('e-place-2019-1')}</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2018.10</span>
              <div className="flex-1">
                <span className="mr-1">{t('e-title-2018')}</span>
                <span className="conferrer">{t('e-place-2018')}</span>
              </div>
            </li>
          </ul>
          <div className="col-span-5 my-8" />
          <div className="col-span-1">
            <span className="footstep-type">{t('award')}</span>
          </div>
          <ul className="col-span-4">
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2020</span>
              <div className="flex-1">
                <span>{t('a-title-2020')}</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2017.11</span>
              <div className="flex-1">
                <span>{t('a-title-2017')}</span>
              </div>
            </li>
          </ul>
          <div className="col-span-5 my-8" />
          <div className="col-span-1">
            <span className="footstep-type">{t('etc')}</span>
          </div>
          <ul className="col-span-4">
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2021.10</span>
              <div className="flex-1">
                <span className="mr-1">{t('etc-title-2021')}</span>
                <span className="conferrer">{t('etc-place-2021')}</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2020.12</span>
              <div className="flex-1">
                <span className="mr-1">{t('etc-title-2020')}</span>
                <span className="conferrer">{t('etc-place-2020')}</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2019.03</span>
              <div className="flex-1">
                <span className="mr-1">{t('etc-title-2019')}</span>
                <span className="conferrer">{t('etc-place-2019')}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const RollingDice = () => {
  return (
    <div className="rolling-dice flex flex-col items-center justify-center py-80">
      <div className="scene mx-auto">
        <div className="cube">
          <Image
            className="face face1"
            src="http://d1q98opzn481en.cloudfront.net/PinkDice01.png"
            alt="pink dice 1"
            width={425}
            height={425}
          />
          <Image
            className="face face2"
            src="http://d1q98opzn481en.cloudfront.net/PinkDice02.png"
            alt="pink dice 2"
            width={425}
            height={425}
          />
          <Image
            className="face face3"
            src="http://d1q98opzn481en.cloudfront.net/PinkDice03.png"
            alt="pink dice 3"
            width={425}
            height={425}
          />
          <Image
            className="face face4"
            src="http://d1q98opzn481en.cloudfront.net/PinkDice04.png"
            alt="pink dice 4"
            width={425}
            height={425}
          />
          <Image
            className="face face5"
            src="http://d1q98opzn481en.cloudfront.net/PinkDice05.png"
            alt="pink dice 5"
            width={425}
            height={425}
          />
          <Image
            className="face face6"
            src="http://d1q98opzn481en.cloudfront.net/PinkDice06.png"
            alt="pink dice 6"
            width={425}
            height={425}
          />
        </div>
      </div>
    </div>
  );
};

const WorkArchive = () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="flex flex-col p-1">
      <div className="my-40 flex-1">
        <div className="mx-auto max-w-6xl text-center text-white opacity-100">
          <Image
            src="http://d1q98opzn481en.cloudfront.net/mididice2023.jpg"
            alt="interplaytions2023"
            width={1024}
            height={768}
          />
        </div>
        <div className="flex h-[300px] items-center justify-center bg-black">
          <div className="text-2xl font-bold">{t('interplaytions2023')}</div>
        </div>
      </div>
      <div className="my-40 flex-1">
        <div className="mx-auto max-w-6xl text-center text-white opacity-100">
          <Image
            src="http://d1q98opzn481en.cloudfront.net/mididice2020.jpg"
            alt="doodlering"
            width={1024}
            height={768}
          />
        </div>
        <div className="flex h-[300px] items-center justify-center bg-black">
          <div className="text-2xl font-bold">{t('doodlering')}</div>
        </div>
      </div>
      <div className="my-40 flex-1">
        <div className="mx-auto max-w-6xl text-center text-white opacity-100">
          <Image
            src="http://d1q98opzn481en.cloudfront.net/mididice2019.avif"
            alt="mmwd"
            width={1152}
            height={560}
          />
        </div>
        <div className="flex h-[300px] items-center justify-center bg-black">
          <div className="text-2xl font-bold">{t('mmwd')}</div>
        </div>
      </div>
      <div className="my-40 flex-1">
        <div className="mx-auto max-w-6xl text-center text-white opacity-100">
          <Image
            src="http://d1q98opzn481en.cloudfront.net/mididice2018.jpg"
            alt="interplaytions"
            width={1152}
            height={864}
          />
        </div>
        <div className="flex h-[300px] items-center justify-center bg-black">
          <div className="text-2xl font-bold">{t('interplaytions')}</div>
        </div>
      </div>
      <div className="my-40 flex-1">
        <div className="mx-auto max-w-6xl text-center text-white opacity-100">
          <Image
            src="http://d1q98opzn481en.cloudfront.net/mididice2017.jpg"
            alt="mididice"
            width={1152}
            height={710}
          />
        </div>
        <div className="flex h-[300px] items-center justify-center bg-black">
          <div className="text-2xl font-bold">{t('mididice2017')}</div>
        </div>
      </div>
    </div>
  );
};

const People = () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center md:flex-row">
      <div>
        <h2 className="footstep-title">
          The People
          <br />
          Sharing This Journey
        </h2>
        <div className="mt-48 grid grid-cols-1 items-stretch gap-10 md:grid-cols-4">
          <div className="flex flex-col p-1">
            <div className="flex flex-1 flex-col">
              <span className="text-3xl font-bold">{t('hyun-name')}</span>
              <span className="text-base font-semibold text-neutral-600">
                Interaction Designer
              </span>
              <span className="text-xl font-semibold text-neutral-300">
                {t('hyun-description')}
              </span>
              <div className="flex flex-col pt-1 text-xs text-zinc-400">
                <div className="flex">
                  <span className="mr-2 w-auto"># UI/UX Design</span>
                  <span className="flex-1"># Sound Design</span>
                </div>
                <div className="flex">
                  <span className="mr-2 w-auto"># Team Leader</span>
                  <span className="flex-1"># Project Manager</span>
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 shadow md:w-11/12">
              <a
                href="http://jeeyoonhyun.com"
                className="more-button w-full rounded-lg px-4 py-2 text-center transition hover:bg-neutral-800"
              >
                더 알아보기
              </a>
            </div>
          </div>
          <div className="flex flex-col p-1">
            <div className="flex flex-1 flex-col">
              <span className="text-3xl font-bold">{t('park-name')}</span>
              <span className="text-base font-semibold text-neutral-600">
                Interaction Designer
              </span>
              <span className="text-xl font-semibold text-neutral-300">
                {t('park-description')}
              </span>
              <div className="flex flex-col pt-1 text-xs text-zinc-400">
                <div className="flex">
                  <span className="mr-2 w-auto"># Graphic Design</span>
                  <span className="flex-1"># Motion Graphic</span>
                </div>
                <div className="flex">
                  <span className="mr-2 w-auto"># UX/UI Design</span>
                  <span className="flex-1"># Visual Art Director</span>
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 shadow md:w-11/12">
              <a
                href="http://linkedin.com/in/designerjyp"
                className="more-button w-full rounded-lg px-4 py-2 text-center transition hover:bg-neutral-800"
              >
                더 알아보기
              </a>
            </div>
          </div>
          <div className="flex flex-col p-1">
            <div className="flex flex-1 flex-col">
              <span className="text-3xl font-bold">{t('min-name')}</span>
              <span className="text-base font-semibold text-neutral-600">
                Software Engineer
              </span>
              <span className="text-xl font-semibold text-neutral-300">
                {t('min-description')}
              </span>
              <div className="flex flex-col pt-1 text-xs text-zinc-400">
                <div className="flex">
                  <span className="mr-2 w-auto"># Researcher</span>
                  <span className="flex-1"># BE/FE Engineer</span>
                </div>
                <div className="flex">
                  <span className="mr-2 w-auto"># AI/ML</span>
                  <span className="flex-1"># Project Leader</span>
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 shadow md:w-11/12">
              <a
                href="https://hyeonki-min.com"
                className="more-button w-full rounded-lg px-4 py-2 text-center transition hover:bg-neutral-800"
              >
                더 알아보기
              </a>
            </div>
          </div>
          <div className="flex flex-col p-1">
            <div className="flex flex-1 flex-col">
              <span className="text-3xl font-bold">{t('kim-name')}</span>
              <span className="text-base font-semibold text-neutral-600">
                Software Engineer
              </span>
              <span className="text-xl font-semibold text-neutral-300">
                {t('kim-description')}
              </span>
              <div className="flex flex-col pt-1 text-xs text-zinc-400">
                <div className="flex">
                  <span className="mr-2 w-auto"># Researcher</span>
                  <span className="flex-1"># BE/FE Engineer</span>
                </div>
                <div className="flex">
                  <span className="mr-2 w-auto"># AI/ML</span>
                  <span className="flex-1"># Creative Developer</span>
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 shadow md:w-11/12">
              <a
                href="https://github.com/nine-hundred"
                className="more-button w-full rounded-lg px-4 py-2 text-center transition hover:bg-neutral-800"
              >
                더 알아보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LastScene = () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="mx-auto flex h-[1080px] max-w-6xl items-center justify-center text-center text-white opacity-100">
      <h2 className="last-title">{t('last')}</h2>
    </div>
  );
};

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="midiDICE 미디다이스"
          description="The midiDICE is a team working on media art projects. 미디다이스는 미디어 아트를 하는 팀입니다."
        />
      }
    >
      <FirstScene />
      <Introduction />
      <RollingDice />
      <History />
      <WorkArchive />
      <People />
      <LastScene />
    </Main>
  );
};

export default Index;
const getStaticProps = makeStaticProps(['common']);
export {
  FirstScene,
  getStaticPaths,
  getStaticProps,
  History,
  Introduction,
  LastScene,
  People,
  RollingDice,
  WorkArchive,
};
