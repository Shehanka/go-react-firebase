import React from 'react';

const Student = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} I'm studying {props.degree}.
      </p>
    </div>
  );
};

export default Student;
