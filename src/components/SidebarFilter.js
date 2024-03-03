import { SIDEBAR_FILTER_ITEMS } from '@/constant';
import Image from 'next/image';
import React, { useState } from 'react';

const SidebarFilter = ({ isFilterOpen }) => {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg shadow z-10 px-2 lg:max-w-[300px] absolute transition-all lg:relative ${isFilterOpen ? 'block md:left-0 left-7' : 'left-[-350px] hidden'}`}
    >
      <div className="my-4 flex">
        <input className="w-6 h-6 mr-2" type="checkbox" />
        <label className="font-bold uppercase">Customizble</label>
      </div>
      <hr className="w-full h-[1px] bg-[#E5E5E5]" />
      {SIDEBAR_FILTER_ITEMS.map((sidebarItem) => (
        <SideBarItem
          key={sidebarItem.id}
          title={sidebarItem.title}
          categories={sidebarItem.categories}
        />
      ))}
    </div>
  );
};

const SideBarItem = ({ title, categories }) => {
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  return (
    <div className="my-4">
      <button
        onClick={() => setIsFilterExpanded(!isFilterExpanded)}
        className="flex justify-between w-full"
      >
        <span className="font-bold uppercase">{title}</span>
        {isFilterExpanded ? (
          <Image className="mx-1" src={'/assets/up.svg'} alt="up" width={24} height={24} />
        ) : (
          <Image className="mx-1" src={'/assets/down.svg'} alt="down" width={24} height={24} />
        )}
      </button>
      <div
        className={`z-20 transition-all relative ${isFilterExpanded ? ' opacity-1 top-0 block h-full' : ' opacity-0 top-[-1200px] h-0'}`}
      >
        <button className="underline text-[#BFC8CD] my-3">Unselect all</button>
        <div>
          {categories.map((category, index) => (
            <div key={index} className="my-2 flex">
              <input className="w-6 h-6 mr-2" type="checkbox" />
              <label>{category}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
