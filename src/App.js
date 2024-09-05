import Switch;
import Route;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import workflowbuilder from './workflowbuilder';
import workflowexecuter from './workflowexecuter';
import logo from './logo.svg';
import './App.css';

function App() {
    return ( <
        Router >
        <
        Switch >
        <
        Route path = "/builder"
        component = { workflowbuilder }
        /> <
        Route path = "/executor"
        component = { workflowexecutor }
        /> < /
        Switch > <
        /Router>

    );
}