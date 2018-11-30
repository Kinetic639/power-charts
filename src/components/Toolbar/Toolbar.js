import React from 'react';

import './Toolbar.css';


const Toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar__navigation'>
            <div></div>
            <div><img className='logo-img' src={window.location.origin + '/img/logo.png'} /></div>
            <div className='toolbar__logo'><a href='/'>POWER CHARTS</a></div>
            <div className='spacer'></div>
            <div className='toolbar__navigation-items'>
                <ul>
                    <li><a href='/'>FAQ</a></li>
                    <li><a href='/'>Forums</a></li>
                    <li><a href='/'>Account</a></li>
                    <li><a href='/'>Log out</a></li>
                </ul>
            </div>

        </nav>
    </header>
);

export default Toolbar;