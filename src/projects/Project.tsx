import React from 'react';
import style from './Project.module.css';

type ProjectPropsType = {
    title: string
    description: string
}

export function Project(props: ProjectPropsType) {
    return (
        <div className={style.Project}>
            <div className={style.Preview}>
                <button className={style.PreviewButton}>
                    <span>Preview</span>
                </button>
            </div>
            <h3>{props.title}</h3>
            <span className={style.Description}>
                {props.description}
            </span>
        </div>
    );
}

