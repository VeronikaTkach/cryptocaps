import React, {Fragment} from "react";
import css from './footer.module.scss';
import {Link} from "react-router-dom";


export const Footer = () => {

    return(
        <Fragment>
            <div className={css.footer}>
                <div className={css.contacts}>
                    <div>Cripto caps</div>
                    <div className={css.social_media}>
                        <Link to={'/'}>1</Link>
                        <Link to={'/'}>1</Link>
                        <Link to={'/'}>1</Link>
                        <Link to={'/'}>1</Link>
                    </div>
                </div>
                <div className={css.map}>
                    <div className={css.map_column}>
                        <div>Explore</div>
                        <div><Link to={'/'}>About</Link></div>
                        <div><Link to={'/'}>Legal&Policity</Link></div>
                    </div>
                    <div className={css.map_column}>
                        <div>Company</div>
                        <div><Link to={'/'}>Careers</Link></div>
                        <div><Link to={'/'}>News</Link></div>
                    </div>
                    <div className={css.map_column}>
                        <div>Resources</div>
                        <div><Link to={'/'}>Wallet</Link></div>
                        <div><Link to={'/'}>Forum</Link></div>
                        <div><Link to={'/'}>FAQ</Link></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}