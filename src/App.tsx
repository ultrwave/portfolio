import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {SkillsBlock} from './skills/SkillsBlock';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <SkillsBlock/>
        </div>
    );
}

export default App;
