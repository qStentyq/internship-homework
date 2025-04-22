import React from 'react';
import Select from 'react-select';

function CurrencySelector({ value, options, onChange, placeholder, name }) {
  return (
    <Select
      onChange={onChange}
      classNamePrefix='select'
      value={options.find((option) => option.value === value)}
      isSearchable={true}
      name={name}
      options={options}
      className='basic-single'
      placeholder={placeholder}
    />
  );
}

export default CurrencySelector;
