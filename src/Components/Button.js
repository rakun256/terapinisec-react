import React from 'react';
import { motion } from "framer-motion";

const CustomButton = ({label, onclick}) => {
  return (
    <motion.button className='md:px-4 md:py-2 md:text-lg font-light text-textDark rounded-full border-[1px] border-textDark hover:bg-textDark hover:text-backgroundLight transition-colors duration-150 ease-in px-2 py-1 text-md' onClick={onclick} whileTap={{scale: 0.85}}>
        {label}
    </motion.button>
  )
}

export default CustomButton;