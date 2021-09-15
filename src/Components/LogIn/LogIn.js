import React from 'react';
import './LogIn.css';

export default function LogIn() {
    return (
        <div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Niramit&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Capriola&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@500&display=swap');

            </style>
            <div>
                <div className="a1">
            <h1 className="li-h1"> Log In </h1>

            <div className="main">
                <p className="box"> Email ID </p>
                <input className="box1" type="email" id="email" />
                <p className="box"> Password </p>
                <input className="box1" type="password" id="password" />
                
            </div>
            <a className="butn"> Log In </a>
            </div>
            </div>
        </div>
    )
}
