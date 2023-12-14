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
    <div className={css.main}>
            <div className={css.app_header}>
                <Header/>
                <Routes>
                    <Route path="/userpage" element={<UserPage/>} />
                    <Route path="/begginers" element={<Begginers/>} />
                </Routes>
            </div>
            <Element name={'main'} className={css.app_main}>
                <Main/>
            </Element>
            <div className={css.app_daily_tasks}>
                <DailyTasks/>
            </div>
            <Element name={'news'} className={css.app_news_collection}>
                <NewsCollection/>
            </Element>
            <div className={css.app_contacts}>
                <Contacts/>
            </div>
            <div className={css.app_footer}>
                <Footer/>
            </div>
    </div>
  );
}

export default App;
