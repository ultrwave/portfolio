import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {SkillsBlock} from './skills/SkillsBlock';
import {ProjectsBlock} from './projects/ProjectsBlock';
import {Relocate} from './relocate/Relocate';
import {Contacts} from './contacts/Contacts';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <SkillsBlock/>
            <ProjectsBlock/>
            <Relocate/>
            <Contacts/>
        </div>
    );
}

export default App;
