import React from 'react';
import { Header } from '../components/Header';
import { Main } from '../pages/Home/Main'
import { Contacts } from '../pages/Home/Contacts';
import { Footer } from "../components/Footer";
import {Element} from 'react-scroll';
import css from './app.module.scss';
import {DailyTasks} from "../pages/Home/DailyTasks";
import {NewsCollection} from "../pages/Home/NewsCollection";
import {UserPage} from "../pages/UserPage";
import {Begginers} from '../pages/Beginners';
import {Routes, Route} from "react-router-dom";

const App = () => {

  return (
    <div className={css.app}>
            <div className={css.app__header}>
                <Header/>
                <Routes>
                    <Route path="/userpage" element={<UserPage/>} />
                    <Route path="/begginers" element={<Begginers/>} />
                </Routes>
            </div>
            <Element name={'main'} className={css.app__main}>
                <Main/>
            </Element>
            <div className={css.app__dailyTasks}>
                <DailyTasks/>
            </div>
            <Element name={'news'} className={css.app__newsCollection}>
                <NewsCollection/>
            </Element>
            <div className={css.app__contacts}>
                <Contacts/>
            </div>
            <div className={css.app__footer}>
                <Footer/>
            </div>
    </div>
  );
}

export default App;
