import React from 'react';

const CustomButton = ({label, onclick}) => {
  return (
    <button className='px-4 py-2 text-lg font-light text-textDark rounded-full border-[1px] border-textDark hover:bg-textDark hover:text-backgroundLight transition-all duration-200 ease-in' onClick={onclick}>
        {label}
    </button>
  )
}

export default CustomButton;