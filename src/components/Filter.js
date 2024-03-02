'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import SidebarFilter from './SidebarFilter';
import ProductListing from './ProductListing';
import DropDown from './shared/DropDown';
import { FILTER_VALUES } from '@/constant';

const Filters = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    return (
        <div className='mx-7'>
            <hr className='w-full h-[1px] bg-[#E5E5E5]' />
            <div className='flex justify-between p-4'>

                <div>
                    <div className='hidden md:flex uppercase'>
                        <div className='font-bold mr-9'>3425 Items</div>
                        <button onClick={() => { setIsFilterOpen(!isFilterOpen) }} className='z-30 transition-all flex uppercase text-[#888792]'>
                            {isFilterOpen ? <><Image className='mx-1' src={'/assets/left.svg'} alt='left' width={24} height={24} />
                                <span>Hide Filter</span>
                            </> :
                                <>
                                    <Image className='mx-1' src={'/assets/right.svg'} alt='left' width={24} height={24} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                                    <span>Show Filter</span>
                                </>
                            }
                        </button>
                    </div>
                      
                    <div>

                        <button onClick={() => { setIsFilterOpen(!isFilterOpen) }} className='z-90  md:hidden transition-all flex uppercase font-bold'>
                            filters
                        </button>
                    </div>
                </div>
                <div className='md:hidden block'>|</div>
                {/* <select className='outline-none border-none uppercase font-bold'>
                    <option>recommended</option>
                    <option>Newest first</option>
                    <option>popular</option>
                    <option>Price : high to low</option>
                    <option>recommended</option>
                    <option>Price : low to high</option>
                </select> */}
                <DropDown values={FILTER_VALUES}/>
            </div>
            <hr className='w-full h-[1px] bg-[#E5E5E5]' />
            <div className={`grid ${isFilterOpen ? 'lg:grid-cols-[300px_minmax(900px,_1fr)]' : ''}`}>
                <SidebarFilter isFilterOpen={isFilterOpen} />
                <div className={`grid grid-cols-2 md:grid-cols-3 gap-2 ${isFilterOpen ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
                    <ProductListing />
                </div>
            </div>
        </div>
    )
}

export default Filters