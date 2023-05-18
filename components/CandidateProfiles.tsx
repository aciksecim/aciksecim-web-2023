import React from "react";
import Rte from "../public/erdogan.png";
import Kk from "../public/kk.png";
import Image from "next/image";

type CandidateProps = {
  candidate: {
    name: string;
    image: string;
    percentage: string;
    votes: string;
  };
};

function CandidateProfiles({ candidate }: CandidateProps) {
  return (
    <>
      <div className="flex flex-wrap w-30 items-center  text-center justify-center">
        <Image
          className="rounded-full block"
          src={candidate.image}
          height={137}
          width={137}
          alt={candidate.name}
        />
        <div className="mt-3 w-full">{candidate.name}</div>

        <div className="bg-[#FF0000] w-20 my-4 py-3 px-3 text-white font-bold rounded-2xl text-l inline">
          {candidate.percentage}
        </div>
        <div className="text-[#6B6B6B] w-full">{candidate.votes} oy</div>
      </div>
    </>
  );
}

export default CandidateProfiles;
