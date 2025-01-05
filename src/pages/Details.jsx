import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData()
    const { id } = useParams()
    // console.log(param)

    const filter = data.filter(project => project.id === parseInt(id))

    const { image, name, live, github_client, github_server, languages, feature } = filter[0] || {}
    console.log(languages)
    return (
        <div className='w-11/12 max-w-6xl mx-auto py-36'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='flex flex-col space-y-2'>
                    <p className='text-2xl'>Project: {name}</p>

                    <Link to={`${live}`} target='_blank'><button className='border-b-2  w-fit dark:text-white/80'>Live Link</button></Link>

                    <Link to={`${github_client}`} target='_blank'><button className='border-b-2  w-fit dark:text-white/80'>Client site code</button></Link>


                    {github_server && <Link to={`${github_server}`} target='_blank'><button className='border-b-2  w-fit dark:text-white/80'>Server site code</button></Link>}

                    <div className='pt-6'>
                        <h4 className='text-xl'>Technology</h4>
                        <div className='flex gap-6 mt-2'>
                            {
                                languages.map((lang, idx) => <div key={idx} className="badge badge-outline dark:text-white/80">{lang}</div> )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-12'>
                <h2 className='text-3xl mb-2'>Feature</h2>
                {
                    feature.map((item, idx) => <li className='font-Ovo dark:text-white/80' key={idx}>{item}</li> )
                }
            </div>
        </div>
    );
};

export default Details;