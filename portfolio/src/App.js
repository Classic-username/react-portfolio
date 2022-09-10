import { Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      {/* TO DO: extract react logo header, this is also written in index.js */}
      {/* <Link to="/react-logo-header"> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {/* I'm leaving this stuff in, I want to learn about the keyframes rotating the logo */}
            {/* adding a comment so I have something to commit and push to github */}
        </header>
      {/* </Link> */}
      
    </div>
  );
}

export default App;
