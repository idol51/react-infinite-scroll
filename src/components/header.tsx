import React, { useState } from 'react'
import { useTitleContext } from '../contexts/TitleContext'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useSearchContext } from '../contexts/SearchContext';

export default function Header() {
    const { title } = useTitleContext();
    const { searchVal, setSearchVal } = useSearchContext();

    const [ searchToggle, setSearchToggle ] = useState<boolean>(false);
  return (
    <div className={`flex w-screen sticky top-0`}>
        <img className='absolute left-0 right-0 top-0 bottom-0' src={`${process.env.REACT_APP_BASE_URL}/images/nav_bar.png`} alt='bgimage' width='100%' /> 
        {searchToggle ? 
            <div className='flex w-full h-full z-[1] items-center p-3 gap-2'>
                <div>
                    <AiFillCloseCircle className='text-2xl' onClick={() => {setSearchToggle(false); setSearchVal('')}} />
                </div>
                <input className='flex-1 bg-transparent border px-2' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} placeholder='Search here..' type='text' />
            </div> :
            <div className='flex p-3 w-full h-full z-[1] items-center'> 
                <img src={`${process.env.REACT_APP_BASE_URL}/images/Back.png`} alt='back' width={20} />
                <div className='flex-1 px-4 text-lg'>
                    {title}
                </div>
                <img src={`${process.env.REACT_APP_BASE_URL}/images/search.png`} alt='back' width={20} onClick={() => setSearchToggle(true)} />
            </div>
            
        }
    </div>
  )
}
