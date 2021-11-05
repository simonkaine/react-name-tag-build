import React from 'react';
// import PropTypes from 'prop-types';

// eslint-disable-next-line max-len
// eslint-disable-next-line react/prop-types
export default function Controls({ onNameChange, onGreetingChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label >Greeting
        <input 
          type="text" 
          onChange={onGreetingChange}
          aria-label="greeting"></input>
      </label>

      <label >name
        <input 
          type="text" 
          onChange={onNameChange}
          aria-label="name"></input>
      </label>
      <button aria-label="button">SUBMIT</button>
    </form>
  );
}

// Controls.propTypes = {};

