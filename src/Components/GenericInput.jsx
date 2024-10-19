import React from 'react';
import { Popover } from 'antd';
function GenericInput({ name, type, placeholder, value, onChange, error ,icon}) {
  return (
    <div className="field accent-">
        {icon}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-field"
        value={value}
        onChange={onChange}
      />
      {
       error && <p className="error text-[10px] rounded opacity-80 text-red-400"> <Popover placement="right" title="Title" content="Content">{error}</Popover></p>} 
    </div>
  );
}

export default GenericInput;
