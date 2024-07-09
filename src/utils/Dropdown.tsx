import React, { useState } from 'react';

interface DropdownItem {
  label: string;
  link: string;
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center"
      >
        {title}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {isOpen && (
        <div className="z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-48 absolute mt-2">
          <ul className="py-2 z-20 text-lg text-black ">
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="block z-20 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
