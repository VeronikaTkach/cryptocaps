import React from 'react';
import { Header } from '../components/Header';
import { Main } from '../components/Main'
import { Contacts } from '../components/Contacts';
import { Footer } from "../components/Footer";

import css from './app.module.scss';
import {DailyTasks} from "../components/DailyTasks";
import {NewsCollection} from "../components/NewsCollection";

const App = () => {

  return (
    <div className={css.main}>
            <div className={css.app_header}>
                <Header/>
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
