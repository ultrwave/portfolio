import React from 'react';
import style from './Main.module.css';

export function Main () {
    return (
        <div className={style.Main}>
            <div className={style.MainContainer}>
                <div className={style.Greeting}>
                    <span>Hi There</span>
                    <h1>Dmitry Reactov</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={style.Photo}></div>
            </div>
        </div>
    );
}
