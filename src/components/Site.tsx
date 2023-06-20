import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {dataState,AddRating} from "./dataState/dataState";
import { Page} from './pages/Page';
import { Error404 } from './pages/Error404';

export const Site = () => {
    const activeClass = (isActive:boolean) => isActive? styles.active:styles.navLink
    console.log(dataState.pages[0].photo)
    return (
        <div className={styles.site}>
            <div className={styles.header}><h1>Кроссовки</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>

                    <div><NavLink className={({isActive})=>activeClass(isActive)} to={'/page/0'}>Nike</NavLink></div>
                    <div><NavLink className={({isActive})=>activeClass(isActive)} to={'/page/1'}>Puma</NavLink></div>
                    <div><NavLink className={({isActive})=>activeClass(isActive)} to={'/page/2'}>Adidas</NavLink></div>
                    {/*<div><NavLink className={({isActive})=>activeClass(isActive)} to={'/page/0'}>Error</NavLink></div>*/}


                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={'/page1'}/>}/>
                        <Route path={'/page/:id'} element={<Page AddRating={AddRating} pages={dataState.pages}/>}/>
                        <Route path={'/error*'} element={<Error404/>}/>


                    </Routes>
                </div>
            </div>
        </div>
    );
};
