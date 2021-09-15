import React from 'react'
import TENLOGO2 from '../Images/TENLOGO2.png';
import './Header.css';
import {Link} from 'react-router-dom'

export default function Header() {
return (
    <div>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@500&display=swap');
        </style>
        <div className="Header">
            <img className="Header-logo" src={TENLOGO2}></img>
            <p className="Header-title"> The Entrepreneurship Network </p> 
        </div>

        <div>
        <ul>
            <li><div><Link to="/" className="newy">Home </Link></div></li>
            <li><div><Link to="/onlinecourses" className="newy">Online Courses </Link></div></li>
            <li><div><Link to="/testimonials" className="newy">Testimonials</Link></div></li>
            <li><div><Link to="/aboutus" className="newy">About Us</Link></div></li>
            <li><div><Link to="/login" className="newy">Log In</Link></div></li>
        </ul>
        </div>
    </div>
    )
}
