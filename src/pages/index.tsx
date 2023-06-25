import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="midiDICE"
          description="midiDICE is media art work team"
        />
      }
    >
      <a href="https://github.com/midicie/mididice-homepage">
        <img
          src={`${router.basePath}/assets/images/midiDICE.png`}
          alt="영상"
        />
      </a>
      <h3 className="text-lg font-semibold">미디다이스 연혁</h3>
      <a href="https://github.com/midicie/mididice-homepage">
        <img
          src={`${router.basePath}/assets/images/midiDICE.png`}
          alt="이미지"
        />
      </a>
      <h3 className="text-lg font-semibold">프로젝트소개</h3>
      <a href="https://github.com/midicie/mididice-homepage">
        <img
          src={`${router.basePath}/assets/images/midiDICE.png`}
          alt="영상2"
        />
      </a>
      <h3 className="text-lg font-semibold">MMWD프로젝트소개</h3>
      <a href="https://github.com/midicie/mididice-homepage">
        <img
          src={`${router.basePath}/assets/images/midiDICE.png`}
          alt="영상3"
        />
      </a>
      <h3 className="text-lg font-semibold">인터플레이션스 소개</h3>
      <a href="https://github.com/midicie/mididice-homepage">
        <img
          src={`${router.basePath}/assets/images/midiDICE.png`}
          alt="영상4"
        />
      </a>
      <h3 className="text-lg font-semibold">두들러링 소개</h3>
      <a href="https://github.com/midicie/mididice-homepage">
        <img
          src={`${router.basePath}/assets/images/midiDICE.png`}
          alt="영상5"
        />
      </a>
      <h3 className="text-lg font-semibold">팀원소개</h3>
      <h3 className="text-lg font-semibold">footer</h3>
    </Main>
  );
};

export default Index;
