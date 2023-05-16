import Head from 'next/head';
import CandidateProfiles from '@/components/CandidateProfiles';
import Navbar from '@/components/Nav';
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
      <div className='relative h-screen'>
        <Navbar />
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

        <div className='absolute bottom-5 left-0 right-0 flex justify-center'>
          <Link href='mailto:bilgi@aciksecim.org'>
            <span className='text-[#7C7C7C]'>bilgi@aciksecim.org</span>
          </Link>
        </div>
      </div>
    </>
  );
}
