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

// using tutorial at https://reactrouter.com/en/main/getting-started/tutorial for react router dom, I don't necessarily agree with the architecture but I don't know enough to do better myself so I'm just going along with it.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* TO DO: Set the elements once I create the project, language, and about components 
        I'm not sure what I'm gonna do about the react logo header. it's currently set up in app.js but I don't feel like extracting it right now
        TO DO: Extract react logo header out of app.js and put it in its own component  */}
        <Route path="/" element={<App />} />
        {/* <Route path="/react-logo-header" element={} /> */}
        <Route path="/projects" />
        <Route path="/languages" />
        <Route path="/about" />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
