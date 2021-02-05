import React from 'react';
import style from './ProjectsBlock.module.css';
import {Project} from './Project';
import styleContainer from '../common/styles/Container.module.css';


export function ProjectsBlock() {
    return (
        <div className={style.ProjectsBlock}>
            <h2 className={style.Title}>Projects</h2>
            <div className={`${styleContainer.Container} ${style.ProjectsContainer}`}>
                <div className={style.Projects}>
                    <Project title={'Project A'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    />
                    <Project title={'Project B'}
                             description={'Suspendisse augue elit, euismod id mattis ut.'}
                    />
                    <Project title={'Project C'}
                             description={'Ut maximus enim eu quam placerat, non viverra.'}
                    />
                </div>
            </div>
        </div>
    );
}

