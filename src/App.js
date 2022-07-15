import React, { useEffect } from 'react';
import { setUserLogged } from "./store/slices/user";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {

  const dispatch = useDispatch();
  const { isLogged } = useSelector(state => state.user.data);

  useEffect(() => {
    dispatch(setUserLogged());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={isLogged ? <Main /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
