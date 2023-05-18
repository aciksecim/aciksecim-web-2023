"use client";

import Image from "next/image";
import React from "react";
import Logo from "../public/logo.png";
import { useState, useEffect } from "react";
import Link from "next/link";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <header className="w-full h-16 bg-white drop-shadow-lg">
        <div className="container px-4 md:px-0 h-full mx-auto flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={Logo}
              width={160}
              height={26}
              priority
              alt="logo"
              className="z-50"
            />
          </Link>
          <ul
            id="menu"
            className={`fixed top-0 h-screen right-0 px-10 text-gray-500 py-16 text-right bg-white z-50
            md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6 ${
              toggleMenu ? "w-full h-screen" : "hidden"
            } `}
          >
            <li className="flex justify-between w-full md:hidden z-90 fixed top-4 right-6">
              <Link href={"/"}>
                <Image
                  src={Logo}
                  width={160}
                  height={26}
                  priority
                  alt="logo"
                  className="ml-10 z-50"
                />
              </Link>
              <button
                className="text-right text-gray-300 text-4xl"
                onClick={handleToggleMenu}
              >
                &times;
              </button>
            </li>
            <li>
              <Link
                className=" opacity-70 hover:opacity-100 duration-300"
                href="/hakkinda"
                onClick={handleToggleMenu}
              >
                Proje Hakkında
              </Link>
            </li>
            <li>
              <Link
                href="/uyeol"
                className=" opacity-70 hover:opacity-100 duration-300"
                onClick={handleToggleMenu}
              >
                Üye Ol
              </Link>
            </li>

            <li>
              <Link
                className=" opacity-70 hover:opacity-100 duration-300"
                href="/iletisim"
                onClick={handleToggleMenu}
              >
                İletişim
              </Link>
            </li>
          </ul>
          <div className="flex items-center md:hidden">
            <button
              className="text-gray-500 text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
              onClick={handleToggleMenu}
            >
              &#9776;
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
