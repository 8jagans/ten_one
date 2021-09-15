import React from 'react'
import TENLOGO2 from '../Images/TENLOGO2.png';
import './Header.css';

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
            <li><a href="/">Home</a></li>
            <li><a href="/onlinecourses">Online Courses </a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/login">Log In</a></li>
        </ul>
        </div>
    </div>
    )
}
