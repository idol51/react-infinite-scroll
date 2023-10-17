import React from 'react'

export default function MovieBox({ name, image }: { name: string, image: string }) {
  return (
    <div>
        <img 
            className='aspect-[2/3] mb-2' 
            src={`${process.env.REACT_APP_BASE_URL}/images/${image}`} 
            alt='thumbnail' 
            width='100%' 
            onError={(e) => {
                e.currentTarget.onerror = null; // prevents looping
                e.currentTarget.src=`${process.env.REACT_APP_BASE_URL}/images/placeholder_for_missing_posters.png`;
            }}      
        />
        <span>{name}</span>
    </div>
  )
}
