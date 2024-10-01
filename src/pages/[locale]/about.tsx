import { useTranslation } from 'next-i18next';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';

const About = () => {
  const { t } = useTranslation(['common']);
  return (
    <Main meta={<Meta title="midiDICE" description="midiDICE" />}>
      <p>{t('title')}</p>
    </Main>
  );
};

export default About;
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
