"use client";
import Head from "next/head";
import CandidateProfiles from "@/components/CandidateProfiles";
import Navbar from "@/components/Nav";
import ElectionOutcome from "@/components/ElectionOutcome";
import Link from "next/link";
import Rte from "../public/erdogan.png";
import Kk from "../public/kk.png";
import { useState } from "react";


export default function Home() {
  const [selectedCity, setSelectedCity] = useState("Türkiye Geneli");

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };
  return (
    <>
      <div className="relative h-screen">
        <Navbar />
        <div className="flex flex-col w-full flex-nowrap bg-[#F0F0F0] py-5">
          <div className="flex flex-nowrap justify-center w-full">
            <div className="flex gap-">
                <CandidateProfiles
                  candidate={{ name: "Recep Tayyip Erdoğan", image: Rte.src, percentage: "0%", votes: "0" }}
                />
                <CandidateProfiles
                  candidate={{ name: "Kemal Kılıçdaroğlu", image: Kk.src, percentage: "0%", votes: "0" }}
                />
            </div>
          </div>

          <div className="flex w-full justify-center mt-4">{selectedCity}</div>
        </div>

        <ElectionOutcome onCityChange={handleCityChange} />

        <div className="flex justify-center">
          <Link href="mailto:bilgi@aciksecim.org">
            <span className="text-[#7C7C7C]">bilgi@aciksecim.org</span>
          </Link>
        </div>
      </div>
      <ElectionOutcome />
      <div className='flex justify-center mt-10'>
        <Link href="/login">
          <span className='hover:underline'>Üye Ol</span>
        </Link>
      </div>
    </>
  );
}
