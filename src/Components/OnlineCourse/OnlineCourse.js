import React, { createContext } from 'react'
import './OnlineCourse.css';
import OC01 from '../Images/OC01.png'
import OC02 from '../Images/OC02.png'
import OC03 from '../Images/OC03.png'
import OC04 from '../Images/OC04.png'
import OC05 from '../Images/OC05.png'
import OC06 from '../Images/OC06.png'
import OC07 from '../Images/OC07.png'
import OC08 from '../Images/OC08.png'
import OC09 from '../Images/OC09.png'



export default function OnlineCourse() {

const cntn = [
    { 
        id: 1, 
        sr: OC01,
        ttlt: 'Python Development',
        price:'500'
    },   
    { 
        id: 2, 
        sr: OC02,
        ttlt: 'React Development',
        price:'500'
    },   
    {
        id: 3, 
        sr: OC03,
        ttlt: 'Java Spring Boot',
        price:'900'
    },   
    { 
        id: 4, 
        sr: OC04,
        ttlt: 'Java Spring Boot',
        price:'300'
    }, 
    { 
        id: 5, 
        sr: OC05,
        ttlt: 'UX Designer',
        price:'400'
    }, 
    { 
        id: 6, 
        sr: OC06,
        ttlt: 'Wix Web Development',
        price:'300'
    }, 
    { 
        id: 7, 
        sr: OC07,
        ttlt: 'Wordpress Development',
        price:'300'
    }, 
    { 
        id: 8, 
        sr: OC08,
        ttlt: 'Software Testing',
        price:'700'
    }, 
    { 
        id: 9, 
        sr: OC09,
        ttlt: 'Graphic Creation',
        price:'500'
    }       
];
    
return (
<div>
    <div className="head">
        <br />
        <p className="title2"> Online Courses </p>
        <div className="br1"> <br/> </div>
    </div>
    
    <div className="cards"> 
    {cntn.map((ele) => (
        <div className="containr">
            <img className="imgc" src={ele.sr} />
            <div className="texty">
                <p> {ele.ttlt} </p>
                <p> ₹ {ele.price} </p>                 
            </div>
        </div>
    ))}
    </div>


    <style>
    @import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@500&display=swap');
    </style>
            
    </div>
    )
};