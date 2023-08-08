import React from 'react';

const Input = ({ id, label, setValue, value, ...props }) => {
  return (
    <>
      <label htmlFor='{id}'>{label}</label>
      <input
        type='text'
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
      />
    </>
  );
};

export default Input;
