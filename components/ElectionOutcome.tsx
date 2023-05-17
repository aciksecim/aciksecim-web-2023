'use client';
import React, { useState, ChangeEvent } from 'react';

function ElectionOutcome({ onCityChange }) {
  const [selectedCity, setSelectedCity] = useState("Türkiye Geneli");
  
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value;
    setSelectedCity(city);
    onCityChange(city);
  }

  const cities = ["Türkiye Geneli", "Adana","Adiyaman","Afyon","Agri","Aksaray","Amasya","Ankara","Antalya","Ardahan","Artvin","Aydin","Balikesir","Bartin","Batman","Bayburt","Bilecik","Bingol","Bitlis","Bolu","Burdur","Bursa","Canakkale","Cankiri","Corum","Denizli","Diyarbakir","Duzce","Edirne","Elazig","Erzincan","Erzurum","Eskisehir","Gaziantep","Giresun","Gumushane","Hakkari","Hatay","Igdir","Isparta","Istanbul","Izmir","Kahramanmaras","Karabuk","Karaman","Kars","Kastamonu","Kayseri","Kilis","Kirikkale","Kirklareli","Kirsehir","Kocaeli","Konya","Kutahya","Malatya","Manisa","Mardin","Mersin","Mugla","Mus","Nevsehir","Nigde","Ordu","Osmaniye","Rize","Sakarya","Samsun","Sanliurfa","Siirt","Sinop","Sirnak","Sivas","Tekirdag","Tokat","Trabzon","Tunceli","Usak","Van","Yalova","Yozgat","Zonguldak"]


  const cityOptions = cities.map((city) => (
    <option key={city} className='text-[#7C7C7C] font-bold'>{city}</option>
  ));



  return (
    <>
      <div className='bg-white flex flex-col gap-3 mt-5 items-center'>

        <div className='flex gap-3 -ml-10'>
          <p>Açılan Sandık : </p>
          <p>%0</p>
        </div>
        <div className='flex gap-3'>
          <p>Toplam Oy : </p>
          <p>50.000.000</p>
        </div>
        <div className='flex justify-center mt-5'>
        <select className='border-2 border-[#7C7C7C] w-[250px]' value={selectedCity} onChange={handleChange}>
            {cityOptions}
          </select>
        </div>
      </div>
    </>
  )
}

export default ElectionOutcome