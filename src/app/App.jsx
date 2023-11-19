// import React, { useState } from 'react';
import { Routes } from 'react-router-dom';
// import { Registration } from '../pages/Registration/registration';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import css from './App.scss';

const App = () => {

  return (
    <div className={css.main}>
        <Header/>
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
