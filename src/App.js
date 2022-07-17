import React, { useEffect } from 'react';
import { setUserLogged } from "./store/slices/user";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Description from './pages/Description';

function App() {

  const dispatch = useDispatch();
  const { isLogged } = useSelector(state => state.user);

  useEffect(() => {

    const userIsLogged = localStorage.getItem('user')

    if(userIsLogged) dispatch(setUserLogged(JSON.parse(userIsLogged).email, JSON.parse(userIsLogged).token));

  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={isLogged ? <Main /> : <Login />} />
        <Route path='/:namePokemon' element={isLogged ? <Description /> : <Login /> } />
      </Routes>
    </Router>
  );
}

export default App;
