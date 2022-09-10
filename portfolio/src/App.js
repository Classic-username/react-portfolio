import { Outlet, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      {/* TO DO: extract react logo header, this is also written in index.js */}
      {/* <Link to="/react-logo-header"> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> */}
            {/* I'm leaving this stuff in, I want to learn about the keyframes rotating the logo */}
            {/* so it turns out links don't render components like this, I need to pass them as element={} or some other way I haven't learned about yet */}
        {/* </header> */}
      {/* </Link> */}
      
    </div>
  );
}

export default App;
