import React from 'react';
import './style.css';

function Header() {
    return (
        <div>
            <header>
                <h1 className='jumbotron text-center'>Employee Directory</h1>
                <p>Input name into search field to search a specific employee</p>
            </header>
        </div>
    )
}

export default Header;