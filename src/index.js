// REACT js
import React from 'react';

// REACT DOM
import ReactDOM from 'react-dom/client';

// EXTERNAL CSS
import './index.css';

// reportWebVitals
import reportWebVitals from './reportWebVitals';


// COMPONENT
import _1_Style from './components/_1_Style/Style';
import JsxTutorials from "./components/_2_Jsx/JsxTutorials"

// ROOT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <_1_Style />  */}
    <JsxTutorials></JsxTutorials>
  </React.StrictMode>
);

reportWebVitals();
