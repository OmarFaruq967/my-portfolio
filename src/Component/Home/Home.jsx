import React from 'react';
import Hero from './Hero';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../ContactUs/Contact';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div className=''>
           <Hero/>
           <About/>
           <Skill/>
           <Portfolio/>
           <Contact/>
        </div>
    );
};

export default Home;