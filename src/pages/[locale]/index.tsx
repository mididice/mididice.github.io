import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';

const History = () => {
  return (
    <div>
      <ul>
        <li className="history">
          2023. 05 &lt;포스트모던 어린이 [2부]: 까다로운 어린이를 위해 특별한
          음식을 준비하지 마세요&gt;, 부산현대미술관
        </li>
        <li className="history">2021. 01 &lt;Play on AI &gt;, 아트센터나비</li>
        <li className="history">
          2020. 01 &lt;A.I. 632: Design Around Table&gt;, 무등갤러리·토탈미술관
        </li>
        <li className="history">
          2019. 12 &lt;기억장치 - Virtual Memory&gt;, 대안공간루프
        </li>
        <li className="history">2019.06 &lt;A.I.632&gt;, 토탈미술관</li>
        <li className="history">
          2019. 03 SXSW 2019 COREA IMPACT SHOWCASE 공연, 한국콘텐츠진흥원
        </li>
        <li className="history">
          2018. 10 &lt;A.I.MAGINE Project&gt;, 서울대학교
          도시데이터사이언스연구소·아트센터나비·스페이스원
        </li>
        <li className="history">
          2017. 11 ICT 문화예술 융합 공모전 Art부문
          대상(과학기술정보통신부장관상) 수상, 한국정보화진흥원
        </li>
      </ul>
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
      <img src={`${router.basePath}/assets/images/midiDICE.png`} alt="영상" />
      <h3 className="text-lg font-semibold">{t('history')}</h3>
      <History />
      <img src={`${router.basePath}/assets/images/midiDICE.png`} alt="이미지" />
      <h3 className="text-lg font-semibold">{t('introduce')}</h3>
      <img src={`${router.basePath}/assets/images/midiDICE.png`} alt="영상2" />
      <h3 className="text-lg font-semibold">{t('mmwd')}</h3>
      <img src={`${router.basePath}/assets/images/midiDICE.png`} alt="영상3" />
      <h3 className="text-lg font-semibold">{t('interplaytions')}</h3>
      <img src={`${router.basePath}/assets/images/midiDICE.png`} alt="영상4" />
      <h3 className="text-lg font-semibold">{t('doodlering')}</h3>
      <img src={`${router.basePath}/assets/images/midiDICE.png`} alt="영상5" />
      <h3 className="text-lg font-semibold">{t('team')}</h3>
      <h3 className="text-lg font-semibold">{t('footer')}</h3>
    </Main>
  );
};

export default Index;
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
