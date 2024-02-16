import React from 'react';
import { Element } from 'react-scroll';
import { Main } from "./Main";
import { DailyTasks } from "./DailyTasks";
import { NewsCollection } from "./NewsCollection";
import { Contacts } from "./Contacts";
import css from './home.module.scss';


export const Home = () => {

    return (
        <>
            <Element name={'main'} className={css.home__main}>
                <Main/>
            </Element>
            <div className={css.home__dailyTasks}>
                <DailyTasks/>
            </div>
            <Element name={'news'} className={css.home__newsCollection}>
                <NewsCollection/>
            </Element>
            <div className={css.home__contacts}>
                <Contacts/>
            </div>
        </>
    )
}