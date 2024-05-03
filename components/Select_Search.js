// components/CustomSelectSearch.js
import React, { useState } from 'react';

const options = [
  'All Services',
  'Service Experts',
  'Jobs',
  'Explore Travel',
  'News & Magazines',
  'Events',
  'Products',
  'Coupon & deals',
  'Blogs'
];

const CustomSelectSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowOptions(true);
  };

  const handleOptionClick = (option) => {
    setSearchTerm(option);
    setShowOptions(false);
  };

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="custom-select-search">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Select Services"
      />
      {showOptions && (
        <ul>
          {filteredOptions.map(option => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelectSearch;
