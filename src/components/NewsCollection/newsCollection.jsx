import React, {Fragment} from "react";
import css from "./newsCollection.module.scss";
import img_cloud from "../../assets/images/cloud.svg";
import {BigButton} from "../ui/Buttons";



export const NewsCollection = () => {

    const clickHandler = () => {
        return
    }

    return (
        <Fragment>
            <div className={css.news_collection}>
                <div className={css.news_background}>
                    <div>
                        <h5 className={css.text_news}>NEWS NEWS NEWS</h5>
                    </div>
                    <div className={css.news_tasks}></div>
                    <h5 className={css.text_news}>Nft Collection</h5>
                    <div className={css.collection_components}></div>
                </div>
                <div className={css.btn_tasks}>
                    <BigButton btnCaption={'MORE NFT'} onClickHandler={clickHandler}/>
                </div>
                <div className={css.news_trust}>
                        <h5 className={css.news_trust_big}>They trust us</h5>
                        <h5 className={css.news_trust_big}>1 M + 2 M + 1 M +</h5>
                        <div className={css.news_trust_row}>
                            <h5  className={css.news_trust_small}>Wallet instals </h5>
                            <h5 className={css.news_trust_small}>Created assets</h5>
                            <h5 className={css.news_trust_small}>Marketplace volume  </h5>
                        </div>
                </div>
            </div>
            <div className={css.news_footer}></div>
        </Fragment>
    )
}