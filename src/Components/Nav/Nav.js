import React from 'react';
import { Link } from 'react-router-dom';
import('./Nav.css')

const Nav = () => {
    return (
        <div className='p-5 bg-yellow-500  shadow navbar'>
            <ul className='flex subpixel-antialiased'>
             <li><Link to={'/'}>Home</Link></li>
             <li><Link to={''}>Review</Link></li>
             <li><Link to={''}>Dashboard</Link></li>
             <li><Link to={'/blog'}>Blog</Link></li>
             <li><Link to={''}>about</Link></li>
            </ul>
        </div>
    );
};

export default Nav;