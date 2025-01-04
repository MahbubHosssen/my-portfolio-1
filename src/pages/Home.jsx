import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import MySkills from '../components/MySkills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {


    

    return (
        <div className='w-11/12 max-w-6xl mx-auto'>
            <Banner /> 
            <AboutMe />
            <MySkills />

            <Projects />
            <Contact />
        </div>
    );
};

export default Home;