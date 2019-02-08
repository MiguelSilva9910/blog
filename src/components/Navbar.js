import React, { Component } from 'react';
import '../App.css';
import Form from './Form';
import App from './App';
import { Router, Switch, Route, Link } from 'react-router-dom';

export default class Navbar extends App {
    render() {
        return (
            <div> 
            <Router>     
                    <header>
                        <Link to="/Form">Form</Link>
                        <Link to="/">App</Link>
                    </header>
                <nav>
                    <Switch>
                            <Route path="/Form" Component={Form} />
                            <Route exact path="/" Component={App} />
                    </Switch>
                </nav>
            </Router>
            </div>
        );
    }
}
