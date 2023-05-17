import CandidateProfiles from '@/components/CandidateProfiles';
import CandidateResults from '@/components/CandidateResults';
import ElectionOutcome from '@/components/ElectionOutcome';
import Link from 'next/link';
import Rte from '../public/erdogan.png';
import Kk from '../public/kk.png';

type CandidateProps = {
  candidate: {
    name: string;
    image: string;
  };
};

export default function Home() {
  return (
    <>
      <div className='flex bg-[#F0F0F0] gap-10 py-10 justify-center'>
        <div className='flex flex-col gap-5 text-center'>
          <CandidateProfiles candidate={{ name: "Recep Tayyip Erdoğan", image: Rte.src }} />
          <CandidateResults />
        </div>
        <div className='flex flex-col gap-5 text-center'>
          <CandidateProfiles candidate={{ name: "Kemal Kılıçdaroğlu", image: Kk.src }} />
          <CandidateResults />
        </div>
      </div>
      <ElectionOutcome />
      <div className='flex justify-center mt-10'>
        <Link href="login">
          <span className='hover:underline'>Üye Ol</span>
        </Link>
      </div>
    </>
  );
}
