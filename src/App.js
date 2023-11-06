import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Registration } from './pages/Registration';
import { Header } from './components/Header/header';
import { Authorization } from './pages/Authorization/authorization'

import './App.css';

const App = () => {

  const [authActive, setAuthActive] = useState(false);

  return (
    <div className="App">
        <Header setAuthActive={setAuthActive} />
        <Authorization isAuthActive={authActive} setAuthActive={setAuthActive} />
      <Routes>
        {/*<Route exact path={"/"} element={Main}/>*/}
        <Route path={"/registration"} element={Registration}/>
        {/*<Route path={"/user_page"} element={UserPage}/>*/}
      </Routes>
      {/*<Footer/>   */}
    </div>
  );
}

export default App;
