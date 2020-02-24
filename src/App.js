import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRoute from './Routes';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRoute/>
      </div>
    </BrowserRouter>

  );
}

export default App;
