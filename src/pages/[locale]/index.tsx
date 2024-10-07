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
    <div className="mx-auto flex h-[1000px] max-w-6xl items-center justify-center text-center text-white opacity-100">
      <h2 className="head-title">{t('start')}</h2>
    </div>
  );
};

const Introduction = () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="mx-auto flex min-h-[1260px] max-w-6xl items-center justify-center text-white">
      <div className="p-12">
        <p className="history">{t('introduce1')}</p>
        <p className="history">{t('introduce2')}</p>
        <p className="history">{t('introduce3')}</p>
      </div>
    </div>
  );
};

const History = () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="mx-auto flex h-[1970px] max-w-6xl items-center justify-center">
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
    <div className="rolling-dice flex h-[800px] items-center justify-center">
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
    <div className="flex flex-col">
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
    <div className="mx-auto flex h-[1120px] max-w-6xl items-center justify-center">
      <div>
        <h2 className="footstep-title">
          The People
          <br />
          Sharing This Journey
        </h2>
        <div className="mt-48 grid grid-cols-4">
          <div className="flex flex-col">
            <div className="flex flex-1 flex-col">
              <span className="text-3xl font-bold">{t('hyun-name')}</span>
              <span className="text-base font-semibold text-neutral-600">
                Interaction Designer
              </span>
              <span className="pr-6 text-xl font-semibold text-neutral-300">
                {t('hyun-description')}
              </span>
              <div className="grid grid-cols-3 text-xs text-zinc-400">
                <span className="col-span-1"># UI/UX Design</span>
                <span className="col-span-2"># Sound Design</span>
                <span className="col-span-1"># Team Leader</span>
                <span className="col-span-2"># Project Manager</span>
              </div>
            </div>
            <div className="w-11/12">
              <a
                href="http://jeeyoonhyun.com"
                className="more-button block w-full rounded-lg py-2.5 text-center"
              >
                더 알아보기
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-1 flex-col">
              <span className="text-3xl font-bold">{t('park-name')}</span>
              <span className="text-base font-semibold text-neutral-600">
                Interaction Designer
              </span>
              <span className="pr-6 text-xl font-semibold text-neutral-300">
                {t('park-description')}
              </span>
              <div className="grid grid-cols-3 text-xs text-zinc-400">
                <span className="col-span-1"># Graphic Design</span>
                <span className="col-span-2"># Motion Graphic</span>
                <span className="col-span-1"># UX/UI Design</span>
                <span className="col-span-2"># Visual Art Director</span>
              </div>
            </div>
            <div className="w-11/12">
              <a
                href="http://linkedin.com/in/designerjyp"
                className="more-button block w-full rounded-lg py-2.5 text-center"
              >
                더 알아보기
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-1 flex-col">
              <span className="text-3xl font-bold">{t('min-name')}</span>
              <span className="text-base font-semibold text-neutral-600">
                Software Engineer
              </span>
              <span className="pr-6 text-xl font-semibold text-neutral-300">
                {t('min-description')}
              </span>
              <div className="grid grid-cols-3 text-xs text-zinc-400">
                <span className="col-span-1"># Researcher</span>
                <span className="col-span-2"># BE/FE Engineer</span>
                <span className="col-span-1"># AI/ML</span>
                <span className="col-span-2"># Project Leader</span>
              </div>
            </div>
            <div className="w-11/12">
              <a
                href="https://github.com/ho9science"
                className="more-button block w-full rounded-lg py-2.5 text-center"
              >
                더 알아보기
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-1 flex-col">
              <span className="text-3xl font-bold">{t('kim-name')}</span>
              <span className="text-base font-semibold text-neutral-600">
                Software Engineer
              </span>
              <span className="pr-6 text-xl font-semibold text-neutral-300">
                {t('kim-description')}
              </span>
              <div className="grid grid-cols-3 text-xs text-zinc-400">
                <span className="col-span-1"># Researcher</span>
                <span className="col-span-2"># BE/FE Engineer</span>
                <span className="col-span-1"># AI/ML</span>
                <span className="col-span-2"># Creative Developer</span>
              </div>
            </div>
            <div className="w-11/12">
              <a
                href="https://github.com/nine-hundred"
                className="more-button block w-full rounded-lg py-2.5 text-center"
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
export { getStaticPaths, getStaticProps };
