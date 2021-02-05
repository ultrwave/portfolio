import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';

export function Contacts() {
    return (
        <div className={styleContainer.Container}>
            <div className={style.Contacts}>
                <h2 className={style.Title}>Contacts</h2>
                <form className={style.Form} action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <button className={style.SendButton}>Send</button>
            </div>
        </div>
    );
}

