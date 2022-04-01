import React from 'react';
import './App.css';
import Home from "./components/Home/Home";
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Navbar from './components/Navbar/Navbar';
import Testimonial from './components/Testimonial/Testimonial';
import SliderComponent from './components/Review/SliderComponent';
function App() {

 return (
    <div className='App'>
      <Navbar />
      <Home/>
      <About />
      <Services />
     <Portfolio />
     <Testimonial />
     
     <SliderComponent />
    </div>

      
  );
}

export default App;
