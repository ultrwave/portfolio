import React from 'react';
import style from './Skill.module.css';

type SkillPropsType = {
    title: string
    description: string
}

export function Skill(props: SkillPropsType) {
    return (
        <div className={style.Skill}>
            <div className={style.Icon}>

            </div>
            <h3>{props.title}</h3>
            <span className={style.Description}>
                {props.description}
            </span>
        </div>
    );
}

