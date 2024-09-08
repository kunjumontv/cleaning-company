'use client';
import Link from 'next/link';
import { MdDryCleaning } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseLargeFill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [toggleMenuButton, setToggleMenuButton] = useState(true);

  const showMenu = () => {
    setToggleMenuButton(!toggleMenuButton);
  };

  return (
    <>
      {/* Desktop View Navbar */}
      <nav className="md:z-30 lg:mx-28 md:mt-10 md:grid md:grid-cols-[250px,1fr] flex justify-between bg-subtle-yellow p-6 md:absolute left-0 right-0">
        <div className="flex gap-2 items-center">
          <MdDryCleaning className="md:text-2xl transition hover:scale-x-[-1] " />
          <p className="md:text-xl">
            <Link href="/">The cleanic</Link>
          </p>
        </div>
        <div className="text-end md:hidden">
          {toggleMenuButton && (
            <RxHamburgerMenu onClick={showMenu} className="transition-all" />
          )}
        </div>
        <ul className="hidden md:flex justify-between items-center md:text-base">
          <li class="relative group tracking-widest">
            <Link href="/plans" class="inline-block relative">
              Plans
              <span class="absolute left-0 bottom-0 w-full h-0.5 bg-black transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li class="relative group tracking-widest">
            <Link href="/services" class="inline-block relative ">
              Services
              <span class="absolute left-0 bottom-0 w-full h-0.5 bg-black transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li class="relative group tracking-widest">
            <Link href="/about" class="inline-block relative">
              About
              <span class="absolute left-0 bottom-0 w-full h-0.5 bg-black transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="flex items-center gap-2 text-lg hover:text-gray-400 transition-all"
            >
              Login
              <FaUserCircle className="text-2xl text-desaturated-teal" />
            </Link>
          </li>
          <li className="bg-desaturated-teal text-subtle-yellow whitespace-nowrap px-10 py-2 rounded-full transition-all hover:bg-subtle-yellow hover:text-desaturated-teal hover:border hover:border-desaturated-teal">
            <Link href="/book-now">Book Now</Link>
          </li>
        </ul>
      </nav>
      {/* Mobile View Navbar */}
      {!toggleMenuButton && (
        <motion.nav
          className={`md:hidden absolute inset-0 bg-subtle-yellow text-2xl transition-all w-full z-50 h-screen`}
          initial={{ y: '-100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.2 }}
        >
          <div className=" flex justify-between items-center pt-4 px-4">
            <Link
              href="/login"
              className="flex items-center gap-2 hover:text-gray-400 transition-all"
            >
              <FaUserCircle className="text-2xl text-desaturated-teal" />
              Login
            </Link>
            {!toggleMenuButton && (
              <RiCloseLargeFill onClick={showMenu} className="transition-all" />
            )}
          </div>
          <ul className="text-center space-y-8">
            <li>
              <Link href="/plans">Plans</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>

            <li className="bg-desaturated-teal w-2/4 text-subtle-yellow whitespace-nowrap px-10 py-2 rounded-full transition-all hover:bg-subtle-yellow hover:text-desaturated-teal hover:border hover:border-desaturated-teal mx-auto">
              <Link href="/book-now">Book Now</Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
