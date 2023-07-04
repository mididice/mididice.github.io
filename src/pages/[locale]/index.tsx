import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';

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
