import React from 'react'
import './Contactus.css'
import I01 from '../Images/I01.png'
import I02 from '../Images/I03.png'
import I03 from '../Images/I02.png'



export default function Contactus() {
    return (
        <div className="ContactUs">
            <br/>
            <p className="heading3"> Contact Us </p>
            <br/>
            <div className="cus">
            <p className="T"> <img className="I" src={I01} /> hr.contact.ten@gmail.com </p>
            <p className="T"> <img className="I" src={I02} /> +918595986120 </p>
            <p className="T"> <img className="I" src={I03} /> Delhi </p>
            </div>



            <style>
            @import url('https://fonts.googleapis.com/css2?family=Philosopher:wght@700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');
            </style>
        </div>
    )
}
