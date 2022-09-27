// import { useState } from 'react';
import './Button.css';

function Button(props) {
  const Name = props.name
  const className = "Button " + props.className
  // The purpose of this classname is before I passed it here I had
  // set the classname here, as well as on the component I passed 
  // button to. This resulted in the classname on the component not
  // taking, and my stylings for the other class just did not exist.

  return (
    <div className={`${className}`}>
      {`${Name}`}
    </div>
  );
}

export default Button;