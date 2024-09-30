import { useRouter } from 'next/router';
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
const History = () => {
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
            <span className="footstep-type">전시</span>
          </div>
          <ul className="col-span-4">
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2024.07</span>
              <div className="flex-1">
                <span>디지털 플래닛 </span>
                <span className="conferrer">국립부산과학관</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2023.05</span>
              <div className="flex-1">
                <span>
                  포스트모던 어린이 [2부] 까다로운 어린이를 위해 특별한 음식을
                  준비하지 마세요{' '}
                </span>
                <span className="conferrer">부산현대미술관</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2021.01</span>
              <div className="flex-1">
                <span>Cloud : Play on AI </span>
                <span className="conferrer">아트센터나비</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2020.01</span>
              <div className="flex-1">
                <span>A.I. 632: Design Around Table </span>
                <span className="conferrer">무등갤러리·토탈미술관</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2019.12</span>
              <div className="flex-1">
                <span>기억장치 - Virtual Memory </span>
                <span className="conferrer">대안공간루프</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2019.06</span>
              <div className="flex-1">
                <span>A.I.632 </span>
                <span className="conferrer">토탈미술관</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2018.10</span>
              <div className="flex-1">
                <span>A.I.MAGINE Project Exhibition </span>
                <span className="conferrer">
                  서울대학교 도시데이터사이언스연구소·아트센터나비·스페이스원
                </span>
              </div>
            </li>
          </ul>
          <div className="col-span-5 my-8" />
          <div className="col-span-1">
            <span className="footstep-type">수상</span>
          </div>
          <ul className="col-span-4">
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2020</span>
              <div className="flex-1">
                <span>
                  DNA Paris Design Awards Graphic/Interactive Design Winner{' '}
                </span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2017.11</span>
              <div className="flex-1">
                <span>
                  ICT 문화예술 융합 공모전 Art부문
                  대상(과학기술정보통신부장관상){' '}
                </span>
              </div>
            </li>
          </ul>
          <div className="col-span-5 my-8" />
          <div className="col-span-1">
            <span className="footstep-type">기타</span>
          </div>
          <ul className="col-span-4">
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2021.</span>
              <div className="flex-1">
                <span>
                  융복합 미술관 교육 &lt;미래 미술관:실험가들&gt; 온라인 토크{' '}
                </span>
                <span className="conferrer">국립현대미술관</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2020.</span>
              <div className="flex-1">
                <span>청소년 융복합 워크숍 &lt;주사위로 음악 만들기&gt; </span>
                <span className="conferrer">국립현대미술관</span>
              </div>
            </li>
            <li className="footsteps flex flex-col">
              <span className="exhibition flex-1">2019.03</span>
              <div className="flex-1">
                <span>SXSW 2019 COREA IMPACT SHOWCASE </span>
                <span className="conferrer">한국콘텐츠진흥원</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Introduction = () => {
  return (
    <div className="mx-auto flex h-[1260px] max-w-6xl items-center justify-center text-white">
      <div className="p-12">
        <p className="history">
          뭐라도 재미있는 것을 만들어보자는 모토로 2017년에 결성된 미디어
          프로젝트 팀, midiDICE
        </p>
        <p className="history">
          게임, 인공지능, 웹 매체에서 생성 음악을 통해 창작자와 감상자 간의 벽을
          허무는 작업을 주로 합니다. 사람과 기술의 상호작용을 매개하는 음악
          인터페이스에 관심이 많습니다.
        </p>
        <p className="history">
          새로운 방식의 음악 인터페이스를 전시함으로써 사람이 기술을 어떤
          방식으로 규정하는지 살펴보고, 이를 통해 역으로 기술의 입장에서 사람의
          역할을 살펴보기도 합니다.
        </p>
      </div>
    </div>
  );
};
const People = () => {
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
            <span className="text-3xl font-bold">현지윤</span>
            <span className="text-base font-semibold text-neutral-600">
              Interaction Designer
            </span>
            <span className="pr-6 text-xl font-semibold text-neutral-300">
              미디어아트 기반의 작업을 주로 해온 인터랙션 디자이너. 주로 게임
              디자인, 미디어 아트, 인터랙션 디자인 및 사운드 작업을 담당해왔다.
              생성음악을 통해 창작자 및 감상자간의 벽을 허물 수 있다고 믿으며
              Ableton Live, Max, p5.js를 이용해 미디어아트 관련 작업을
              진행해왔다.
            </span>
            <div className="justify-left align-left grid grid-cols-3 text-xs text-zinc-400">
              <span className="col-span-1"># UI/UX Design</span>
              <span className="col-span-2"># Sound Design</span>
              <span className="col-span-1"># Team Leader</span>
              <span className="col-span-2"># Project Manager</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">박주연</span>
            <span className="text-base font-semibold text-neutral-600">
              Interaction Designer
            </span>
            <span className="pr-6 text-xl font-semibold text-neutral-300">
              홍익대학교에서 디지털 미디어 디자인을 전공한 인터랙션 디자이너. 팀
              내에서 사용자 인터페이스의 비주얼 디렉션 전반을 담당하고 있다.
              최근에는 음악 데이터의 그래픽 비주얼라이제이션에 대한 연구를
              기반으로 작업을 진행하고 있다.
            </span>
            <div className="justify-left align-left grid grid-cols-3 text-xs text-zinc-400">
              <span className="col-span-1"># Graphic Design</span>
              <span className="col-span-2"># Motion Graphic</span>
              <span className="col-span-1"># UX/UI Design</span>
              <span className="col-span-2"># Visual Art Director</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">민현기</span>
            <span className="text-base font-semibold text-neutral-600">
              Software Engineer
            </span>
            <span className="pr-6 text-xl font-semibold text-neutral-300">
              데이터로 더 나은 세상을 만들고 싶은 엔지니어. 최근에는 AI 모델
              활용 및 응용에 관심을 두고 활동하고 있다. 프로젝트 설계, 시각화
              작업 및 딥러닝을 사용한 음악 생성 작업을 진행했다. 최근에는 AI
              인터랙션에 관심을 두고 연구를 진행하고 있다.
            </span>
            <div className="justify-left align-left grid grid-cols-3 text-xs text-zinc-400">
              <span className="col-span-1"># Researcher</span>
              <span className="col-span-2"># BE/FE Engineer</span>
              <span className="col-span-1"># AI/ML</span>
              <span className="col-span-2"># Project Leader</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">김창민</span>
            <span className="text-base font-semibold text-neutral-600">
              Software Engineer
            </span>
            <span className="pr-6 text-xl font-semibold text-neutral-300">
              작곡가를 꿈꾸는 프로그래머. 학부시절 작곡과 컴퓨터공학을
              전공하였으며, 음악과 IT의 융합에 관심이 많다. 클라우드 서비스를
              활용하여 IT 인프라를 구축하고, 음악 데이터의 분석, 변조를
              맡아왔다. 미니멀리즘 음악에 관심이 많으며 최근에는 미디 파일
              구조분석을 연구하고 있다.
            </span>
            <div className="justify-left align-left grid grid-cols-3 text-xs text-zinc-400">
              <span className="col-span-1"># Researcher</span>
              <span className="col-span-2"># BE/FE Engineer</span>
              <span className="col-span-1"># AI/ML</span>
              <span className="col-span-2"># Creative Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Index = () => {
  const router = useRouter();
  const { t } = useTranslation(['common']);

  return (
    <Main
      meta={
        <Meta title="midiDICE" description="midiDICE is media art work team" />
      }
    >
      <div className="mx-auto flex h-[1000px] max-w-6xl items-center justify-center text-center text-white opacity-100">
        <h2 className="head-title">{t('wmsf')}</h2>
      </div>
      <Introduction />
      <div className="rolling-dice flex h-[800px] items-center justify-center">
        <div className="scene mx-auto">
          <div className="cube">
            <img
              className="face face1"
              src={`${router.basePath}/assets/images/PinkDice01.png`}
              alt="이미지"
            />
            <img
              className="face face2"
              src={`${router.basePath}/assets/images/PinkDice02.png`}
              alt="이미지"
            />
            <img
              className="face face3"
              src={`${router.basePath}/assets/images/PinkDice03.png`}
              alt="이미지"
            />
            <img
              className="face face4"
              src={`${router.basePath}/assets/images/PinkDice04.png`}
              alt="이미지"
            />
            <img
              className="face face5"
              src={`${router.basePath}/assets/images/PinkDice05.png`}
              alt="이미지"
            />
            <img
              className="face face6"
              src={`${router.basePath}/assets/images/PinkDice06.png`}
              alt="이미지"
            />
          </div>
        </div>
      </div>
      <History />
      <div className="flex flex-col">
        <div className="my-40 h-[800px] flex-1">
          <div className="mx-auto max-w-6xl text-center text-white opacity-100">
            <img
              src={`${router.basePath}/assets/images/mididice2023.jpg`}
              alt="이미지"
            />
          </div>
          <div className="flex h-[300px] items-center justify-center bg-black">
            <div className="text-2xl font-bold">
              랜덤 음악과 패턴을 연결해서 만들어보는 나만의 음악
            </div>
          </div>
        </div>
        <div className="my-40 h-[800px] flex-1">
          <div className="mx-auto max-w-6xl text-center text-white opacity-100">
            <img
              src={`${router.basePath}/assets/images/mididice2020.jpg`}
              alt="이미지"
            />
          </div>
          <div className="flex h-[300px] items-center justify-center bg-black">
            <div className="text-2xl font-bold">
              A storybook generator made of incomplete sentences that lets you
              complete stories by drawing your own pictures
            </div>
          </div>
        </div>
        <div className="my-40 h-[800px] flex-1">
          <div className="mx-auto max-w-6xl text-center text-white opacity-100">
            <img
              src={`${router.basePath}/assets/images/mididice2019.avif`}
              alt="이미지"
            />
          </div>
          <div className="flex h-[300px] items-center justify-center bg-black">
            <div className="text-2xl font-bold">
              Workshop project about how people think about AI generated
              artworks. Sound design aided by Magenta Studio's interpolate
              plugin.
            </div>
          </div>
        </div>
        <div className="my-40 h-[800px] flex-1">
          <div className="mx-auto max-w-6xl text-center text-white opacity-100">
            <img
              src={`${router.basePath}/assets/images/mididice2018.jpg`}
              alt="이미지"
            />
          </div>
          <div className="flex h-[300px] items-center justify-center bg-black">
            <div className="text-2xl font-bold">
              An arcade puzzle game that composes music every turn by
              interacting with artificial intelligence. We used magenta(open
              source) to generate AI music in real-time.
            </div>
          </div>
        </div>
        <div className="my-40 h-[800px] flex-1">
          <div className="mx-auto max-w-6xl text-center text-white opacity-100">
            <img
              src={`${router.basePath}/assets/images/mididice2017.jpg`}
              alt="이미지"
            />
          </div>
          <div className="flex h-[300px] items-center justify-center bg-black">
            <div className="text-2xl font-bold">
              Website that makes music by connecting random music and patterns
            </div>
          </div>
        </div>
      </div>
      <People />
      <div className="mx-auto flex h-[1080px] max-w-6xl items-center justify-center text-center text-white opacity-100">
        <h2 className="last-title">{t('last')}</h2>
      </div>
    </Main>
  );
};

export default Index;
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
