import { motion, useScroll } from 'framer-motion';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';

const throttle = (callback, delay) => {
  let last;
  let timer;
  return function () {
    const context = this;
    const now = +new Date();
    const args = arguments;
    if (last && now < last + delay) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        callback.apply(context, args);
      }, delay);
    } else {
      last = now;
      callback.apply(context, args);
    }
  };
};

const VideoS = styled(motion.video)`
  width: 100%;
  position: fixed;
  left: 0;
`;

const IntroVideo = () => {
  const url = '/assets/video/tmp.mp4';
  const { scrollYProgress, scrollY } = useScroll();
  const ref = useRef();

  const updateAtScroll = () => {
    const video = ref.current;
    video.pause();
    const p = scrollYProgress.get();
    const currentFrame = Math.round(p * video.duration * 1000) / 1000;
    // if (isFinite(currentFrame)) {
    video.currentTime = currentFrame;
    // }
  };

  useEffect(() => scrollY.onChange(throttle(updateAtScroll, 80)), []);

  return (
    <VideoS ref={ref}>
      <source src={url} type="video/webm" />
    </VideoS>
  );
};
const History = () => {
  return (
    <div>
      <ul>
        <li className="history">
          2023.05 &lt;포스트모던 어린이 [2부] &gt;{' '}
          <span className="conferrer">부산현대미술관</span>
        </li>
        <li className="history">
          2021.01 &lt;Play on AI &gt;{' '}
          <span className="conferrer">아트센터나비</span>
        </li>
        <li className="history">
          2020.01 &lt;A.I. 632: Design Around Table&gt;{' '}
          <span className="conferrer">무등갤러리·토탈미술관</span>
        </li>
        <li className="history">
          2019.12 &lt;기억장치 - Virtual Memory&gt;{' '}
          <span className="conferrer">대안공간루프</span>
        </li>
        <li className="history">
          2019.06 &lt;A.I.632&gt; <span className="conferrer">토탈미술관</span>
        </li>
        <li className="history">
          2019.03 SXSW 2019 COREA IMPACT SHOWCASE 공연{' '}
          <span className="conferrer">한국콘텐츠진흥원</span>
        </li>
        <li className="history">
          2018.10 &lt;A.I.MAGINE Project&gt;{' '}
          <span className="conferrer">
            서울대학교 도시데이터사이언스연구소·아트센터나비·스페이스원
          </span>
        </li>
        <li className="history">
          2017.11 ICT 문화예술 융합 공모전 Art부문
          대상(과학기술정보통신부장관상) 수상{' '}
          <span className="conferrer">한국정보화진흥원</span>
        </li>
      </ul>
    </div>
  );
};

const Introduction = () => {
  return (
    <div className="mx-auto max-w-screen-md">
      <p className="history">
        뭐라도 재미있는 것을 만들어보자는 모토로 2017년에 결성된 미디어 프로젝트
        팀, midiDICE
      </p>
      <p className="history">
        게임, 인공지능, 웹 매체에서 생성 음악을 통해 창작자와 감상자 간의 벽을
        허무는 작업을 주로 합니다. 사람과 기술의 상호작용을 매개하는 음악
        인터페이스에 관심이 많습니다.
      </p>
      <p className="history">
        새로운 방식의 음악 인터페이스를 전시함으로써 사람이 기술을 어떤 방식으로
        규정하는지 살펴보고, 이를 통해 역으로 기술의 입장에서 사람의 역할을
        살펴보기도 합니다.{' '}
      </p>
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
      <div className="h-[1000px] bg-neutral-300 opacity-20">
        <h3 className="text-7xl font-semibold">{t('wmsf')}</h3>
      </div>
      <IntroVideo />
      <Introduction />
      <div className="h-[800px] bg-neutral-300 opacity-20">
        <img
          src={`${router.basePath}/assets/images/midiDICE.png`}
          alt="이미지"
        />
      </div>
      <History />
      <div className="h-[800px] bg-neutral-300 opacity-20">
        <h3 className="text-7xl font-semibold">미디다이스 프로젝트 소개</h3>
      </div>
      <div className="h-[800px] bg-neutral-300 opacity-20">영상</div>
      <div className="h-[800px]">
        <h3 className="text-lg font-semibold">{t('team')}</h3>
      </div>
    </Main>
  );
};

export default Index;
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
