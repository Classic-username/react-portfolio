import { useState } from 'react';
import './Button.css';

function Button(props) {
  const Name = props.name
  // useState() gonna need to do something here with an onclick and some routing
  // I might actually not have to do any useState here, it looks like React-router-dom is handling the clicking of components and making them go places.

  return (
    <div className="Button">
      {`${Name}`}
    </div>
  );
}

export default Button;