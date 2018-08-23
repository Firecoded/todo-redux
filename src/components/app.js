import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';
import List from './list';

const App = () => (
    <div className = 'container'>
        <h1 className ='center'>Redux Todo</h1>
        <Route exact path = "/" component = {List}/>
    </div>
);

export default App;
