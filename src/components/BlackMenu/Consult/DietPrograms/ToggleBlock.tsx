import React, { useState } from 'react';


interface Block{
    heading : String,
    details : String
}

const ToggleBlock = ({ heading, details } : Block) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBlock = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full text-left rounded border border-grey-500 text-sm">
      <div className="border  rounded-md p-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={toggleBlock}>
          <span className=" w-full text-gray-600 relative text-xl  hover:text-blue-600"> 
            {heading} <span className='absolute right-0 '> {isOpen ? '-' : '+'}</span>
          </span>
        </div>
        {isOpen && (
          <div className="mt-4  pt-4 text-lg">
            {/* Content to display when block is open */}
               {details}
          </div>
        )}
      </div>
    </div>
  )
};

export default ToggleBlock;