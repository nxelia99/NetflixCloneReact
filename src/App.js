import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './Components/screens/HomeScreen.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './Components/screens/LoginScreen.js';
import ProfileScreen from './Components/screens/ProfileScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if (userAuth){
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }else{
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch]);


  return (
    <div className="App">

      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path='/profile' element={<ProfileScreen />} />
            <Route exact path='/' element={<HomeScreen />} />
          </Routes>
        )}
          
      </Router>
    </div>
  );
}

export default App;
