import React  from 'react';
import './Cover.css';
import TENLOGO1 from '../Images/TENLOGO1.png';
import TENLOGO2 from '../Images/TENLOGO2.png';
import D01 from '../Images/D01.png';
import D02 from '../Images/D02.png';



function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

function Home () {
return(
<div className="default"> 
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap');
  </style>
 
  <div className="Co1o">
    <p className="Co1-text">  A <span className="Co1-text-1"> World of Knowledge </span> <br/> at <span className="Co1-text-1"> Your Fingertips </span> </p>
  </div>

  <div className="Co2o">
    <p className="Co2-text"> Our Courses </p>
    <p className="Co2-text-2"> New Journey <br/> Begins Here </p>
  </div>

  <div className="two"> <FadeInSection> 
    <div className="Co4o">
      <img className="Co4o-img" src={D01}></img>
      <p className="Co4o-text"> Python </p>
      <p className="Co4o-para"> Learn an interpreted high-level general-purpose programming language with Us.</p>
    </div> </FadeInSection> </div>

  <div className="two"> <FadeInSection> 
    <div className="Co5o"> 
      <img className="Co5o-img" src={D02}></img>
      <p className="Co5o-text"> WIX </p> 
      <p className="Co5o-para"> Learn to create a professional website using Wix</p>
    </div> </FadeInSection> </div>

  <div>
    <h1 className="testi"> Testimonials </h1>
  </div>
  </div>  
  )
}

export default Home