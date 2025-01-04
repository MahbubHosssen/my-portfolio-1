import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('/public/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div id='projects'>
            <div>
                <h1 className='text-3xl text-center'>My Latest Projects</h1>
                <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-Ovo' >


                {
                    projects.map((project, idx) => <div key={idx} className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body space-y-2">
                            <div className='flex items-center gap-1 flex-wrap'>
                                {
                                    project.languages.map((language, idx) => <div key={idx} className="badge badge-outline">{language}</div>)
                                }

                                {/* <div className="badge bg-[#039BE5]">CSS</div>
                                <div className="badge badge-primary">JS</div>
                                <div className="badge badge-secondary">React</div>
                                <div className="badge badge-accent">mongoDB</div>
                                <div className="badge badge-ghost">Express</div> */}
                            </div>

                            <h2 className="card-title font-semibold">{project.name}</h2>
                            <Link to=''><button className='border-b-2  w-fit'>Live Link</button></Link>
                            <Link to=''><button className='border-b-2  w-fit'>Github Repo Link</button></Link>
                            <div className="card-actions justify-end">
                                <button className="border rounded-full border-black py-3 px-6 hover:bg-lime-300 transition shadow-[2px_2px_0_#000]">View Details</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Projects;