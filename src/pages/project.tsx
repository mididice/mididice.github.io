import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Project = () => (
  <Main meta={<Meta title="midiDICE" description="midiDICE" />}>
    <p>
      introduce midiDICE
    </p>

    {Array.from(Array(10).keys()).map((elt) => (
      <div
        className="my-4 w-full rounded-md border-2 border-gray-400 px-2 py-1"
        key={elt}
      >
        <Link href={`/project/${elt}`}>{`Project - ${elt}`}</Link>
      </div>
    ))}
  </Main>
);

export default Project;
