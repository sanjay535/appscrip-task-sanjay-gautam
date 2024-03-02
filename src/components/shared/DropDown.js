import Image from "next/image";
import { useState } from "react";


function DropDown({ values }) {
    const [isOpen, setIsOpen] = useState(false);
    const [choosenVal, setChoosenVal] = useState(values[0])
    return <div className='relative'>
        <button onClick={() => setIsOpen(!isOpen)} className='z-20 flex justify-between w-full'>
            <span className='font-bold uppercase'>{choosenVal.text}</span>
            {isOpen ? <Image className='mx-1' src={'/assets/up.svg'} alt='up' width={24} height={24} /> :
                <Image className='mx-1' src={'/assets/down.svg'} alt='down' width={24} height={24} />}
        </button>
        <div className={`z-10 p-4 w-[300px] bg-slate-50 shadow-md transition-all absolute right-3 ${isOpen ? ' opacity-1 top-10' : ' opacity-0 top-[-200px]'}`}>
            {values.map(value => <div onClick={() => { setChoosenVal(value); setIsOpen(!isOpen) }} key={value.id} className="flex justify-between">
                {(value.id === choosenVal.id) ? <Image className='mx-1' src={'/assets/check.svg'} alt='heart' width={16} height={16} /> : <div></div>}
                <div className={`uppercase ${(value.id === choosenVal.id) ? 'font-bold' : ''}`}>{value.text}</div>
            </div>)}
        </div>

    </div>
}

export default DropDown;