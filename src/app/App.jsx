import React from 'react';
import { Header } from '../components/Header';
import { Main } from '../pages/Home/Main'
import { Contacts } from '../pages/Home/Contacts';
import { Footer } from "../components/Footer";

import css from './app.module.scss';
import {DailyTasks} from "../pages/Home/DailyTasks";
import {NewsCollection} from "../pages/Home/NewsCollection";
import {UserPage} from "../pages/UserPage";
import {Routes, Route} from "react-router-dom";

const App = () => {

  return (
    <div className={css.main}>
            <div className={css.app_header}>
                <Header/>
                <Routes>
                    <Route path="/news" element={<NewsCollection />} />
                    <Route path="/userpage" element={<UserPage/>} />
                </Routes>
            </div>
            <div className={css.app_main}>
                <Main/>
            </div>
            <div className={css.app_daily_tasks}>
                <DailyTasks/>
            </div>
            <div className={css.app_news_collection}>
                <NewsCollection/>
            </div>
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
