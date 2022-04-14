import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center m-3'>
            <p><small>copyright &copy; {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;