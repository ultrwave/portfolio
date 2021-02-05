import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

export function Main () {
    return (
        <div className={style.Main}>
            <div className={styleContainer.Container}>
                <div className={style.Greeting}>
                    <span>Hi There</span>
                    <h1>Dmitry Pokrepa</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={style.Photo}></div>
            </div>
        </div>
    );
}

