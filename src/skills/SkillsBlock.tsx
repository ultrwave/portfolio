import React from 'react';
import style from './SkillsBlock.module.css';
import {Skill} from './Skill';
import styleContainer from '../common/styles/Container.module.css';


export function SkillsBlock() {
    return (
        <div className={style.SkillsBlock}>
            <h2 className={style.Title}>Skills</h2>
            <div className={`${styleContainer.Container} ${style.SkillsContainer}`}>
                <div className={style.Skills}>
                    <Skill title={'JavaScript'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut molestie dui, vel pretium magna.'}
                    />
                    <Skill title={'HTML + CSS'}
                           description={'Suspendisse augue elit, euismod id mattis ut, ultrices vitae ex.'}
                    />
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut molestie dui.'}
                    />
                    <Skill title={'Redux'}
                           description={'Suspendisse augue elit, euismod id mattis ut, ultrices vitae ex.'}
                    />
                    <Skill title={'TypeScript'}
                           description={'Ut maximus enim eu quam placerat, non viverra justo consectetur.'}
                    />
                </div>
            </div>
        </div>
    );
}

