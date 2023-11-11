import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Registration } from '../pages/Registration/registration';
import { Header } from '../components/Header/header';
import { Footer } from '../components/Footer/footer';
import {Authorization} from "../pages/Authorization";

import css from './App.scss';

const App = () => {

  const [authActive, setAuthActive] = useState(false);

  return (
    <div className='wrapper'>
        <Header authActive={authActive} setAuthActive={setAuthActive} />
        {/*<Authorization isAuthActive={authActive} setAuthActive={setAuthActive} />*/}
        <Routes>
            {/*<Route exact path={"/"} element={<Main />}/>*/}
            {/*<Route path={"/registration"} element={<Registration />}/>*/}
            {/*<Route path={"/user_page"} element={UserPage}/>*/}
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
