import React from 'react';
import style from './Relocate.module.css';
import styleContainer from '../common/styles/Container.module.css';

export function Relocate () {
    return (
        <div className={styleContainer.Container}>
            <div className={style.Relocate}>
            <h2 className={style.Title}>Relocate</h2>
                <button className={style.RelocateButton}>Hire me</button>
            </div>
        </div>
    );
}

