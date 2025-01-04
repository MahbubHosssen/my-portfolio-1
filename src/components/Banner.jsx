import React from 'react';
import profile from '../assets/profile-img.png'
import handIcon from '../assets/hand-icon.png'
import { Link } from 'react-router-dom';
import arrowWhiteIcon from '../assets/arrow-icon-dark.png'
import downloadIcon from '../assets/download-icon.png'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';

const Banner = ({isDarkMood}) => {
    return (
        <div className='flex flex-col h-screen items-center justify-center gap-4 -z-10'>
            <div className='md:flex flex-row-reverse justify-between items-center text-center md:gap-32'>
                <div className=''>
                    <img src={profile} alt="" className='rounded-full w-32 md:w-full mx-auto' />
                </div>
                <div className='flex flex-col items-center md:items-start'>
                    <h3 className='flex gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi I am Mahbub Hossen <img src={handIcon} alt="" className='w-6' /></h3>
                    <h1 className='text-3xl sm:text-6xl lg:text-[40px]'>Frontend Web Developer</h1>

                    <div className='md:flex my-3 -ml-4 items-center'>


                        <Link to='/sample-resume.pdf'
                            target='_blank'
                            download
                            className='hidden lg:flex items-center gap-2 px-10 border border-gray-500 rounded-full py-3 ml-4 font-Ovo w-fit cursor-pointer dark:border-white/50'

                        >
                            My Resume {isDarkMood ? <AiOutlineDownload className='text-lg' /> : <AiOutlineDownload className='text-lg' />}
                        </Link>


                        <div className='flex gap-3 mt-4 md:mt-0 ml-8 md:ml-4'>
                            <Link to="https://www.linkedin.com/in/mahbub-hossen-6b0136335/" target='_blank'><FaLinkedin className='text-3xl text-[#0A63BC]' /></Link>
                            <Link to="https://github.com/MahbubHosssen" target='_blank'><FaGithub className='text-3xl text-[#151413] ' /></Link>
                            <Link to='https://api.whatsapp.com/send/?phone=%2B8801629007430&text&type=phone_number&app_absent=0' target='_blank'><FaWhatsapp className='text-3xl text-[#3EBD4E]' /></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;