import React from 'react'
import './Footer.css';
import TENLOGO1 from '../Images/TENLOGO1.png';
import SM01 from '../Images/SM01.png';
import SM02 from '../Images/SM02.png';
import SM03 from '../Images/SM03.png';


export default function Footer() {
return (
    <div className="footer">
      <h1> <span className="foot">T</span>he <br/> <span className="foot">E</span>ntrepreneurship <br/> <span className="foot">N</span>etwork </h1> 
      <img className="footer-logo" src={TENLOGO1} ></img>
      <a href="https://www.instagram.com/theentrepreneurshipnetwork/"> <img className="Footer-sm1" src={SM01} ></img> </a>
      <a href="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/"> <img className="Footer-sm2" src={SM02} ></img> </a>
      <a href="https://twitter.com/We_Are_TEN?s=08"> <img className="Footer-sm3" src={SM03} ></img> </a>
    </div>         
    )
}
