'use client'
import { useState, FormEvent } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const Form = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

     const toggleConfirmPasswordVisible = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="flex justify-center mt-6">
                <form className="flex flex-col gap-3 items-end text-sm" onSubmit={handleSubmit}>
                    <label>
                        Ad:
                        <input
                            className="border border-black rounded-xl ml-5 placeholder:pl-3"
                            type="text"
                            name='firstName'
                            placeholder='Adınızı Giriniz.'
                        />
                    </label>
                    <label>
                        Soyad:
                        <input
                            className="border border-black rounded-xl ml-5 placeholder:pl-3"
                            type="text"
                            name='lastName'
                            placeholder='Soyadınızı Giriniz.'
                        />
                    </label>
                    <label>
                        TC Kimlik Numarası:
                        <input
                            className="border border-black rounded-xl ml-5 placeholder:pl-3"
                            type="text"
                            name="idNumber"
                            placeholder='Tc Kimlik Numaranızı Giriniz.'
                        />
                    </label>
                    <label>
                        Telefon Numarası:
                        <input
                            className="border border-black rounded-xl ml-5 placeholder:pl-3"
                            type="text"
                            name="phoneNumber"
                            placeholder='Telefon Numarınızı Giriniz.'
                        />
                    </label>
                    <label className=''>
                        Şifre:
                        <input
                            className="border border-black rounded-xl ml-5 placeholder:pl-3"
                            type={passwordVisible ? 'text' : 'password'}
                            name="password"
                        />
                        <button className=' top-1 right-3' onClick={togglePasswordVisibility}>
                            {passwordVisible
                                ?
                                <AiFillEye />
                                :
                                <AiFillEyeInvisible />
                            }
                        </button>
                    </label>
                    <label className=''>
                        Şifre(tekrar):
                        <input
                            className="border border-black rounded-xl ml-5 placeholder:pl-3"
                            type={confirmPasswordVisible ? 'text' : 'password'}
                            name="confirmPassword"
                        />
                        <button className='top-1 right-3' onClick={toggleConfirmPasswordVisible}>
                            {confirmPasswordVisible
                                ?
                                <AiFillEye />
                                :
                                <AiFillEyeInvisible />
                            }
                        </button>

                    </label>
                    <div className='w-full flex justify-center mt-5 '>
                        <button
                            className='bg-[#51BFC1] hover:bg-[#088891] inline-flex py-3 px-6 text-black hover:text-white rounded-3xl'
                            type="submit"
                        >
                            Kaydol
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Form