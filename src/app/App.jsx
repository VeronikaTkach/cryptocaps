import React from 'react';
import { Header } from '../components/Header';
import { Main } from '../components/Main'
// import { Footer } from '../components/Footer';

import css from './app.module.scss';

const App = () => {

  return (
    <div className={css.main}>
            <div className={css.app_header}>
                <Header/>
            </div>
            <div className={css.app_main}>
                <Main/>
            </div>

        {/*<Routes>*/}
        {/*    <Route exact path={"/"} element={<Main />}/>*/}
        {/*    /!*<Route path={"/registration"} element={<Registration />}/>*!/*/}
        {/*    /!*<Route path={"/user_page"} element={UserPage}/>*!/*/}
        {/*</Routes>*/}


        {/*<div className={css.app_footer}>*/}
        {/*    <Footer/>*/}
        {/*</div>*/}
    </div>
  );
}

export default App;
