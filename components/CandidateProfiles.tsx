import React from 'react'
import Rte from '../public/erdogan.png'
import Kk from '../public/kk.png'
import Image from 'next/image'


type CandidateProps = {
    candidate: {
        name: string;
        image: string;
    };
};


function CandidateProfiles({ candidate }: CandidateProps) {
    return (
        <>
            <div className='flex flex-col'>
                <div>
                    <Image
                        className='rounded-full'
                        src={candidate.image}
                        height={137}
                        width={137}
                        alt={candidate.name}
                    />
                </div>
                <div className='mt-3'>
                    {candidate.name}
                </div>
            </div>
        </>
    )
}

export default CandidateProfiles