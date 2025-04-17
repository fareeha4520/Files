import logo from './logo.svg';


import React from 'react';
import ReactDOM from 'react-dom/client';
 const root= ReactDOM.createRoot(document.getElementById('root'));
 root.render(<>
      <p>this is a div tag. </p>
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>

       </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react
        </a>
      </header>
    </div></>
 );
