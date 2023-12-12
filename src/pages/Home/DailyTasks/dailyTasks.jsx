import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import css from './dailyTasks.module.scss';
import img_cloud from '../../../assets/images/cloud.svg';
import mascot_tasks from '../../../assets/images/mascotForTasks.svg';
import awards from '../../../assets/images/caps awards.svg';
export const DailyTasks = () => {

    // const Tasks = (n) => {
    //     for (let n=1; n<=4; n++){
    //
    //     }
    // }

    return (
        <Fragment>
            <div className={css.daily_tasks}>
                <div className={css.tasks_background}>
                    <div className={css.texts_links}>
                        <h5 className={css.tasks_h5} style={{marginTop: 62}}>
                            <div style={{marginLeft: 63}}>Daily</div>
                            <div style={{marginLeft: 213}}>Tasks</div>
                        </h5>
                        <div className={css.tasks_cloud} style={{marginLeft: 10}}>
                            <div style={{marginLeft: 82, marginTop: 8}}>

                                <div style={{ position: 'relative' }}>
                                    <img src={img_cloud} alt={'cloud'} style={{ width: '100%' }}/>
                                    <div className={css.cloud_links} style={{ position: 'absolute', top: 24, left: 84}}>
                                        <Link className={css.cloud_link} to={'/'}>Authorization on site</Link>
                                        <Link className={css.cloud_link} to={'/'}>Complete the daily task</Link>
                                        <Link className={css.cloud_link} to={'/'}>Get the unique NFT cap in your collection</Link>
                                        <Link className={css.cloud_link} to={'/'}>Use this nft caps in our app</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.mascot_tasks}>
                        <img src={mascot_tasks} alt={'mascot'} style={{ position: 'relative', marginLeft: 1456, marginTop: -180}}/>
                    </div>
                    <div className={css.tasks_components}>
                        <div>TASKS</div>
                        <div> COMING SOON</div>
                    </div>
                    <div className={css.tasks_awards}>
                            <h6 className={css.text_awards}>Awards:</h6>
                            <img src={awards} alt={'awards'}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}