import React from 'react';
import './Header.css';
import logo from './images/send.png';

export default function Header() {
    return (
        <>
        <div className="header">
            <img className="header-logo" src={logo} alt="логотип my chat app"></img>
            <h1 className="header-title">My Chat App</h1>
            
        </div>
        </>
    );
}
