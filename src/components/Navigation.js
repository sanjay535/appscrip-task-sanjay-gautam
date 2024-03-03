'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './Navigation.module.css';

const Navigation = () => {
  const responsiveNavHandler = (e) => {
    e.preventDefault();
    const humberger = document.getElementById('humberger');
    const responsiveNav = document.getElementById('responsiveNav');
    if (
      humberger.classList.contains(classes.open) &&
      responsiveNav.classList.contains(classes.open)
    ) {
      humberger.classList.remove(classes.open);
      responsiveNav.classList.remove(classes.open);
    } else {
      humberger.classList.add(classes.open);
      responsiveNav.classList.add(classes.open);
    }
  };
  return (
    <nav className={`pl-11 py-0 my-0 md:py-9 md:px-24`}>
      <div id="humberger" onClick={responsiveNavHandler} className={classes.humberger}>
        <span></span>
      </div>

      <div>
        <div className="flex my-4 md:my-6 justify-between">
          <Image
            className="w-6 h-6 md:w-9 md:h-9"
            src={'/assets/logo.svg'}
            alt="logo"
            width={36}
            height={36}
          />
          <h1 className="font-extrabold md:text-4xl text-xl justify-self-center ">LOGO</h1>
          <div className="flex justify-self-end">
            <Image
              className="mx-1 md:w-5"
              src={'/assets/search.svg'}
              alt="search"
              width={24}
              height={24}
            />
            <Image className="mx-1" src={'/assets/heart.svg'} alt="heart" width={24} height={24} />
            <Image className="mx-1" src={'/assets/bag.svg'} alt="bag" width={24} height={24} />
            <div className="md:flex hidden">
              <Image className="mx-1" src={'/assets/user.svg'} alt="user" width={24} height={24} />
              <select className="outline-none border-none">
                <option>EN</option>
                <option>FR</option>
                <option>NL</option>
              </select>
            </div>
          </div>
        </div>
        <div id="responsiveNav" className={classes.responsiveNav}>
          <div className="absolute md:hidden top-[48px] right-12 flex">
            <Image className="mx-1" src={'/assets/user.svg'} alt="user" width={24} height={24} />
            <select className="outline-none border-none">
              <option>EN</option>
              <option>FR</option>
              <option>NL</option>
            </select>
          </div>
          <ul className="flex flex-col md:flex-row md:justify-center md:w-full md:my-4">
            <li className="mx-2 uppercase">
              <Link href={'/shop'}>Shop</Link>
            </li>
            <li className="mx-2 uppercase">
              <Link href={'/skills'}>SKILLS</Link>
            </li>
            <li className="mx-2 uppercase">
              <Link href={'/stories'}>STORIES</Link>
            </li>
            <li className="mx-2 uppercase">
              <Link href={'/contact'}>contact us</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[1px] bg-[#E5E5E5]" />
    </nav>
  );
};

export default Navigation;
