import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/* I'm leaving this stuff in, I want to learn about the keyframes rotating the logo */}
          {/* adding a comment so I have something to commit and push to github */}
      </header>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
