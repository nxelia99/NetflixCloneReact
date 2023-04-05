import React from 'react';
import './App.css';
import HomeScreen from './Components/screens/HomeScreen.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './Components/screens/LoginScreen.js';


function App() {

  const user = null;


  return (
    <div className="App">

      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
          </Routes>
        )}
          
      </Router>
    </div>
  );
}

export default App;
