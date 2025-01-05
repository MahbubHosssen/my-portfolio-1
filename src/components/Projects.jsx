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
                <h1 className='text-3xl text-center dark:text-white/80'>My Latest Projects</h1>
                <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo dark:text-white/80'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-Ovo' >


                {
                    projects.map((project, idx) => <div key={idx} className="card card-compact bg-base-100 shadow-md hover:shadow-black hover:bg-[#fcf4ff] hover:-translate-y-1 dark:bg-[#11001F] dark:hover:bg-[#2a004a] dark:hover:shadow-white transition duration-200">
                        <figure>
                            <img
                                src={project.image}
                                className='h-60 w-full'
                                alt="" />

                        </figure>
                        <div className="card-body space-y-2">
                            <div className='flex items-center gap-1 flex-wrap dark:text-white/80'>
                                {
                                    project.languages.map((language, idx) => <div key={idx} className="badge badge-outline dark:text-white/80">{language}</div>)
                                }

                                {/* <div className="badge bg-[#039BE5]">CSS</div>
                                <div className="badge badge-primary">JS</div>
                                <div className="badge badge-secondary">React</div>
                                <div className="badge badge-accent">mongoDB</div>
                                <div className="badge badge-ghost">Express</div> */}
                            </div>

                            <h2 className="card-title font-semibold dark:text-white/80">{project.name}</h2>
                            <Link to={`${project.live}`} target='_blank'><button className='border-b-2  w-fit dark:text-white/80'>Live Link</button></Link>
                            <Link to={`${project.github_client}`} target='_blank'><button className='border-b-2  w-fit dark:text-white/80'>Client site code</button></Link>


                            {project.github_server && <Link to={`${project.github_server}`} target='_blank'><button className='border-b-2  w-fit dark:text-white/80'>Server site code</button></Link>}

                            <div className="card-actions justify-end">
                                <Link to={`project/${project.id}`}><button className="border rounded-full border-black py-3 px-6 hover:bg-lime-300 transition shadow-[2px_2px_0_#000] dark:text-white/80 dark:hover:bg-[#11001F] dark:hover:text-white dark:shadow-[2px_2px_0_white]">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Projects;