import React from 'react';
import Router from './Router'
import axios from 'axios'
import { AuthContextProvider } from './context/AuthContext';

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router/>
      </AuthContextProvider>
      <div className="virus">
        <img src="images/corona.png" alt="faulty"/>
        <img src="images/corona.png" alt="faulty"/>
        <img src="images/corona.png" alt="faulty"/>
        <img src="images/corona.png" alt="faulty"/>
        <img src="images/corona.png" alt="faulty"/>
        <img src="images/corona.png" alt="faulty"/>
        <img src="images/corona.png" alt="faulty"/>
      </div>

    </div>
  );
}

export default App;
