import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <section className="bg-gray-100 py-10 order dark:bg-[#11001F] dark:text-white/80">
            <div id='about' className="container mx-auto w-full md:w-2/3 text-justify dark:text-white/80">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center dark:text-white/80">About Me</h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-center dark:text-white/80">
                    Hi, I am <span className="font-semibold text-gray-800 dark:text-white/80">Mahbub Hossen, Nice to Meet You</span>,
                </p>
                <p>An enthusiastic and self-motivated web developer with a passion for crafting interactive and visually appealing user interfaces. Currently, I am
                    focusing on building my skills in <span className="font-semibold text-gray-800 dark:text-white/80">React</span> and modern web development technologies.
                    My journey in coding started from curiosity, and now it has turned into a passion to create meaningful digital experiences.</p>

                <p className="text-gray-600 leading-relaxed mb-6 dark:text-white/80">
                    My goal is to contribute to impactful projects that solve real-world problems while continuously improving my expertise.
                    I believe in the power of teamwork, innovation, and a growth mindset to excel in this ever-evolving tech industry.
                </p>
                <p className="text-gray-600 leading-relaxed dark:text-white/80">
                    Outside of coding, I enjoy <span className="font-semibold text-gray-800 dark:text-white/80">Traveling</span>, which keeps my creativity
                    flowing and helps me stay inspired. Feel free to reach out if you'd like to collaborate, discuss projects, or simply connect!
                </p>
            </div>
        </section>
    );
};

export default AboutMe;