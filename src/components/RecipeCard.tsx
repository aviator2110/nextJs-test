'use client'
import { ReactNode, useState } from 'react'

const RecipeCard = ({children, title} : {children: ReactNode, title: string}) => {
    const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='flex-col bg-emerald-500 m-5 p-5 rounded-lg'>
        <h1 className='p-4 text-black dark:text-white text-2xl'>{title}</h1>
        {isOpen && children}
        <button className='bg-gray-400 p-2 rounded-lg' onClick={() => setIsOpen(prev => !prev)}>{isOpen ? "Скрыть" : "Раскрыть"}</button>
    </div>
  )
}

export default RecipeCard