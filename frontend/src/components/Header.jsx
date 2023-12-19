import React from 'react';
import '../css/header.css';

const Header = () => {

    function handleClick() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='header'>
            <div className='side'>
                <p onClick={handleClick}>CarlPics</p>
            </div>
            <div className='side'>
                <p onClick={() => console.log('About Us clicked')}>About Us</p>
                <p onClick={() => console.log('Contacts clicked')}>Contact</p>
            </div>
        </div>
    );
};

export default Header;
