import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import {
  FirstScene,
  History,
  Introduction,
  LastScene,
  People,
  RollingDice,
  WorkArchive,
} from './[locale]/index';

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
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'default', ['common'])),
  },
});
