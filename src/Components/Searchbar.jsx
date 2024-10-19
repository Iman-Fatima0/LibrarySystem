import React from 'react';

function Searchbar({ onChange }) {
  return (
    <div className="flex w-9/12 h-12 items-center justify-between gap-2 bg-[#2f3640] rounded-full relative">
      <input 
        className="border-none bg-transparent outline-none text-white text-sm py-[24px] pl-4 pr-12" 
        type="text" 
        placeholder="Search something" 
        onChange={onChange} 
      />
    </div>
  );
}

export default Searchbar;
