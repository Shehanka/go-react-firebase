import React from 'react';
import './Person.css';

const Person = props => {
  return (
    <div className='Person'>
      <p onClick={props.click}>
        I'm {props.name} I'm studying {props.degree}.
      </p>
      <button className='btn btn-danger' onClick={props.delete}>
        Remove
      </button>
      {/* Two way binding */}
      <input
        className='form-control'
        type='text'
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

export default Person;