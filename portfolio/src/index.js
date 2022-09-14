import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Projects from './Components/Projects/Projects';
import Languages from './Components/Languages/Languages';
import About from './Components/About/About';

// using tutorial at https://reactrouter.com/en/main/getting-started/tutorial for react router dom, 
// I don't necessarily agree with the architecture but I don't know enough to do better myself so 
// I'm just going along with it.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* TO DO: Extract react logo header out of app.js and put it in its own component  */}
        <Route path="/" element={<App />}>
          {/* <Route path="/react-logo-header" element={} /> */}
          <Route path="/projects" element={<Projects />}/>
          <Route path="/languages" element={<Languages />}/>
          <Route path="/about" element={<About />}/>
        </Route>
        
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
