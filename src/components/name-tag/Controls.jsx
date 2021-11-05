import React from 'react';
// import PropTypes from 'prop-types';

// eslint-disable-next-line max-len
// eslint-disable-next-line react/prop-types
export default function Controls({ onNameChange, onGreetingChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
          Greeting
        <input 
          aria-label="greeting" 
          type="text" 
          onChange={onGreetingChange}
        />
      </label>

      <label>
          name
        <input 
          aria-label="name" 
          type="text" 
          onChange={onNameChange}
        />
      </label>

      <button aria-label="button">SUBMIT</button>
    </form>
  );
}

// Controls.propTypes = {};

