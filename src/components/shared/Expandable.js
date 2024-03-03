import Image from 'next/image';
import { useState } from 'react';

function Expandable({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-full">
      <button onClick={() => setIsOpen(!isOpen)} className="z-20 flex justify-between w-full">
        <h2 className="font-bold text-xl uppercase text-white">{title}</h2>
        {isOpen ? (
          <Image className="mx-1" src={'/assets/up-w.svg'} alt="up" width={24} height={24} />
        ) : (
          <Image className="mx-1" src={'/assets/down-w.svg'} alt="down" width={24} height={24} />
        )}
      </button>
      <div
        className={`z-10 transition-all left-0 ${isOpen ? 'h-full opacity-1 top-0' : 'h-0 opacity-0'}`}
      >
        {children}
      </div>
    </div>
  );
}
export default Expandable;
