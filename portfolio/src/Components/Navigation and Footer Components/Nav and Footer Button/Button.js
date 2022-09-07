import { useState } from 'react';
import './Button.css';

function Button(props) {
  const Name = props.name
  // useState() gonna need to do something here with an onclick and some routing

  return (
    <div className="Button">
      {`${Name}`}
    </div>
  );
}

export default Button;