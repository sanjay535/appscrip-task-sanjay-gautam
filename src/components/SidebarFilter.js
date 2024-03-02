import Image from 'next/image'
import React, { useState } from 'react'

const SidebarFilter = ({isFilterOpen}) => {
    return (
        <div className={`bg-white z-10 px-2 h-screen shadow-md lg:max-w-[300px] absolute transition-all lg:relative ${isFilterOpen? 'block left-0':'left-[-350px] hidden'}`}>
            <div className='my-4 flex'>
                <input className='w-6 h-6 mr-2' type='checkbox' />
                <label className='font-bold uppercase'>Customizble</label>
            </div>
            <hr className='w-full h-[1px] bg-[#E5E5E5]' />
            <SideBarItem />
            <SideBarItem />
            <SideBarItem />
        </div>
    )
}

const SideBarItem = () => {
    const [isFilterExpanded,setIsFilterExpanded]=useState(false);
    return <div className='my-4'>
        <button onClick={()=>setIsFilterExpanded(!isFilterExpanded)} className='flex justify-between w-full'>
            <span className='font-bold'>IDEAL FOR</span>
            {isFilterExpanded?<Image className='mx-1' src={'/assets/up.svg'} alt='up' width={24} height={24} />:
            <Image className='mx-1' src={'/assets/down.svg'} alt='down' width={24} height={24} />}
        </button>
        <div className={`-z-20 transition-all relative ${isFilterExpanded?' opacity-1 top-0 block h-full':' opacity-0 top-[-2200px] h-0'}`}>
        <button className='underline text-[#BFC8CD] my-3'>Unselect all</button>
        <div>
            <div className='my-2 flex'>
                <input className='w-6 h-6 mr-2' type='checkbox' />
                <label>Men</label>
            </div>
            <div className='my-2 flex'>
                <input className='w-6 h-6 mr-2' type='checkbox' />
                <label>Women</label>
            </div>
            <div className='my-2 flex'>
                <input className='w-6 h-6 mr-2' type='checkbox' />
                <label>Baby & Kids</label>
            </div>
        </div>
        </div>
    </div>
}

export default SidebarFilter