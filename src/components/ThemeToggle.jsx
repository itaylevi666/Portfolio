import { Moon, Sun } from 'lucide-react';
import React from 'react'
import { useState,useEffect } from 'react'

const ThemeToggle = () => {
    const [isDarkmode, setIsDarkmode] = useState(true)
 
    const handleThemeToggle = () => {
        if (isDarkmode) { document.documentElement.classList.remove('dark'); }
        else { document.documentElement.classList.add('dark'); }
        setIsDarkmode(!isDarkmode);



    }
        
    
useEffect(() => {
  document.documentElement.classList.add('dark');
}, []);


  return (
      <button onClick={handleThemeToggle}
      className='relative max-sm top-5 right-4 p-2 rounded-full bg-gray-400 dark:bg-gray-600 shadow-md animate-pulse-subtle glow hover:bg-teal-500 dark:hover:bg-teal-700 transition-colors duration-300 ease-in-out'>
      {/* <span className='sr-only'>Toggle theme</span> */}
       {isDarkmode ? (
          <Sun className='h-6 w-6 text-yellow-300' />
      ) : (
          <Moon  className='h-6 w-6 text-teal-100'/>
      )}
      </button>
  )
}

export default ThemeToggle;