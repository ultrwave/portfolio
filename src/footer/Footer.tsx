import React from 'react';
import style from './Footer.module.css';

export function Footer() {
    return (
        <div className={style.FooterContainer}>
            <div className={style.Footer}>
                <h2 className={style.Name}>Dmitry Pokrepa</h2>
                <div className={style.Social}>
                    <div className={style.Thumbnail}></div>
                    <div className={style.Thumbnail}></div>
                    <div className={style.Thumbnail}></div>
                    <div className={style.Thumbnail}></div>
                </div>
                <span className={style.Copyright}>© 2021 Copyright </span>
            </div>
        </div>
    );
}

