import React, { Component } from 'react';
import '../App.css';
import App from './App';

class Navbar extends Component { 
    render () { 
        return (
            <header className="toolbar">
                <nav className="toolbar_navigation">
                    <div></div>
                    <div className="toolbar_logo"><a href="/">BLOG</a></div>
                    <div className="spacer" />
                    <div className="toolbar_navigation_items">
                        <ul>
                            <li><a href="/">Admin</a></li>
                            <li><a href="/">test</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;
