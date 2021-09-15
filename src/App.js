import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import HomeP from './Components/HomePage.js';
import TestimonialsP from './Components/TestimonialsPage.js';
import LoginP from './Components/LogInPage.js';
import AboutusP from './Components/AboutusPage.js';
import OnlinecoursesP from './Components/OnlinecoursesPage';




function App() {
  return (
    <div className="divd">
    <BrowserRouter>
      <div>
      <Route path="/" exact component={HomeP}></Route>
      <Route path="/onlinecourses" exact component={OnlinecoursesP}></Route>
      <Route path="/testimonials" exact component={TestimonialsP}></Route>
      <Route path="/login" exact component={LoginP}></Route>
      <Route path="/aboutus" exact component={AboutusP}></Route>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
