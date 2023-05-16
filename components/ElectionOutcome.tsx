'use client';
import React, { useState, ChangeEvent } from 'react';

function ElectionOutcome() {
  const [selecter, setSelecter] = useState("Türkiye Geneli");
  
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelecter(e.target.value);
  };

  return (
    <>
      <div className='bg-white flex flex-col gap-3 mt-5 items-center'>
        <div>
          <p>{selecter}</p>
        </div>
        <div className='flex gap-3 -ml-10'>
          <p>Açılan Sandık : </p>
          <p>%0</p>
        </div>
        <div className='flex gap-3'>
          <p>Toplam Oy : </p>
          <p>50.000.000</p>
        </div>
        <div className='flex justify-center mt-5'>
          <select className='border-2 border-[#7C7C7C] w-[250px]' value={selecter} onChange={handleChange}>
            <option className='text-[#7C7C7C] font-bold'>Türkiye Geneli</option>
            <option className='text-[#7C7C7C] font-bold'>İller</option>
            <option className='text-[#7C7C7C] font-bold'>İlçeler</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default ElectionOutcome