import React from 'react';
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function Display({ onNameSubmit, onGreetingSubmit }) {
  return (
    <figure>
      <div style={{
        'border': '10px solid red',
        'width': '350px',
        'height': '250px'
      }}>
        <div style={{
          'display': 'flex',
          'justifyContent': 'space-evenly',
          'flexDirection': 'column',
          'marginLeft': '50px'
        }}>
          <h1>{onGreetingSubmit}</h1>
          <h2>My name is: {onNameSubmit}</h2>
        </div>
      </div>
    </figure>
  );
}

Display.propTypes = {};

