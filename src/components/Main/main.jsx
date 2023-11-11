import React, { Fragment, useContext } from "react"
import { Link } from "react-router-dom"
import { StoreContext } from "../../data/store"
import './main.module.scss'

export const Main = () => {
    const {isLoggedIn} = useContext(StoreContext)

    return (
        <Fragment>
            <div className='company_title'>
                <span className="main_span">CRYPTOCAPS</span>
            </div>
        </Fragment>
    )
}