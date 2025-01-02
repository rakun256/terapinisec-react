import React from 'react';

const CustomButton = ({label, onclick}) => {
  return (
    <button className='md:px-4 md:py-2 md:text-lg font-light text-textDark rounded-full border-[1px] border-textDark hover:bg-textDark hover:text-backgroundLight transition-all duration-150 ease-in px-2 py-1 text-md' onClick={onclick}>
        {label}
    </button>
  )
}

export default CustomButton;