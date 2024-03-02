'use client'
import { LINKS1, LINKS2 } from '@/constant'
import Image from 'next/image'
import React from 'react'
import Expandable from './shared/Expandable'

const Footer = () => {
  return (
    <footer className='bg-black p-9'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <SubscribeForm />
        <ContactCurrency />
      </div>
      <hr className='bg-white' />
      <div className='my-8'>
        <FooterLinks />
      </div>
      <div className='text-white text-center flex justify-center pt-5'>Copyright &#169; 2023 mettamuse. All rights reserved.</div>
    </footer>
  )
}
const SubscribeForm = () => {
  return (
    <div className='text-white'>
      <h4 className='font-bold text-2xl'>Be the first to know</h4>
      <p className='text-[16px] py-4'>Sign up for updates from mettā muse.</p>
      <form className='flex gap-4'>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-blue-500 block w-full ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Enter your e-mail..." required />
        <button className="relative border border-[#ccc] border-1 outline-none inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-400 rounded-lg group hover:text-white dark:text-white focus:ring-4 focus:outline-none">
          <span className="relative uppercase px-6 py-2.5 transition-all ease-in duration-7 rounded-md group-hover:bg-opacity-0">
            subscribe
          </span>
        </button>
      </form>
    </div>
  )
}
const ContactCurrency = () => {
  return (
    <div className='text-white'>
      <div className='flex flex-col gap-2'>
        <h4 className='font-bold text-2xl uppercase'>CONTACT US</h4>
        <a className='text-[19px]' href={'telephone'}>+44 221 133 5360</a>
        <a className='text-[19px]' href='mail:customercare@mettamuse.com'>customercare@mettamuse.com</a>
      </div>
      <div className='my-4'>
        <h4 className='font-bold text-2xl uppercase'>Currency</h4>
        <div className='flex mx-1 items-center'>
          <Image className='w-5 mr-1 my-4' src={'/assets/payment/us.svg'} alt='logo' width={24} height={18} />
          <span className='font-bold'>. USD</span></div>
        <p className='text-sm'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
      </div>
    </div>
  )
}
const FooterLinks = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <Links links={LINKS1} title="mettā muse" />
      <hr className='md:hidden block bg-[#E5E5E5] my-4'/>
      <Links links={LINKS2} title="Quick Links" />
      <hr className='md:hidden block bg-[#E5E5E5] my-4'/>
      <FollowUsLinks />
      <hr className='md:hidden block bg-[#E5E5E5] my-4'/>
    </div>
  )
}
const Links = ({ links, title }) => {
  return (
    <div className='text-white'>
      <div className='hidden md:block'>
      <h2 className='font-bold text-xl uppercase'>{title}</h2>
      <ul>
        {links.map((link,i) => <li key={i} className='my-2 text-lg'><a href='#'>{link.text}</a></li>)}
      </ul>
      </div>
      <div className='block md:hidden'>
        <Expandable title={title}>
        <ul>
        {links.map((link,i) => <li key={i} className='my-2 text-lg'><a href='#'>{link.text}</a></li>)}
      </ul>
        </Expandable>
      </div>
    </div>
  )
}
const FollowUsLinks = () => {
  return (
    <div className='text-white'>
      <div className='hidden md:block'>
        <h2 className='font-bold text-xl uppercase'>Follow us</h2>
        <div className='flex gap-2 my-2'>
          <Image className='w-6 h-6 md:w-9 md:h-9' src={'/assets/insta.svg'} alt='logo' width={32} height={32} />
          <Image className='w-6 h-6 md:w-9 md:h-9' src={'/assets/linkedin.svg'} alt='logo' width={32} height={32} />
        </div>
        <PaymentAccept />
      </div>
      <div className='block md:hidden'>
        <Expandable title={'Follow us'}>
          <div className='flex gap-2 my-2'>
            <Image className='w-6 h-6 md:w-9 md:h-9' src={'/assets/insta.svg'} alt='logo' width={32} height={32} />
            <Image className='w-6 h-6 md:w-9 md:h-9' src={'/assets/linkedin.svg'} alt='logo' width={32} height={32} />
          </div>
          <PaymentAccept />
        </Expandable>
      </div>
    </div>
  )
}
const PaymentAccept = () => {
  return (
    <div className='my-12'>
      <h2 className='font-bold text-xl'> mettā muse Accepts</h2>
      <div className='text-white flex'>
        <Image className='w-6 mx-1 h-6 md:w-9 md:h-9' src={'/assets/payment/gpay.svg'} alt='logo' width={32} height={32} />
        <Image className='w-6 mx-1 h-6 md:w-9 md:h-9' src={'/assets/payment/mastercard.svg'} alt='logo' width={32} height={32} />
        <Image className='w-6 mx-1 h-6 md:w-9 md:h-9' src={'/assets/payment/paypal.svg'} alt='logo' width={32} height={32} />
        <Image className='w-6 mx-1 h-6 md:w-9 md:h-9' src={'/assets/payment/amex.svg'} alt='logo' width={32} height={32} />
        <Image className='w-6 mx-1 h-6 md:w-9 md:h-9' src={'/assets/payment/applepay.svg'} alt='logo' width={32} height={32} />
        <Image className='w-6 mx-1 h-6 md:w-9 md:h-9' src={'/assets/payment/opay.svg'} alt='logo' width={32} height={32} />
      </div>
    </div>
  )
}

export default Footer;