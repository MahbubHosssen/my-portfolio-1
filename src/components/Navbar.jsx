import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import arrowIcon from '../assets/arrow-icon.png'
import bgImg from '../assets/header-bg-color.png'
import moonThemeIcon from '../assets/moon_icon.png'
import menuBlackIcon from '../assets/menu-black.png'
import closeBlackIcon from '../assets/close-black.png'
import sunIcon from '../assets/sun_icon.png'
import downloadIcon from '../assets/download-icon.png'
import { AiOutlineDownload } from 'react-icons/ai';
import menuIconWhite from '../assets/menu-white.png'
import closeWhiteIcon from '../assets/close-white.png'

const Navbar = ({ isDarkMood, setIsDarkMood }) => {
    console.log(isDarkMood)
    const [isScroll, setIsScroll] = useState(false)
    const menuRef = useRef()

    const openMenu = () => {
        menuRef.current
        // menuRef.current.classList.remove('-right-64')
        menuRef.current.style.transform = 'translateX(-256px)'
        console.log(menuRef)
        // console.log(menuRef.current.classList[4].remove())
    }

    const closeMenu = () => {
        menuRef.current.style.transform = 'translateX(256px)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])


    const menuLinks = <>
        <li><a onClick={closeMenu} href='#top' className='font-Ovo'>Home</a></li>
        <li><a onClick={closeMenu} href='#about' className='font-Ovo'>About Me</a></li>
        <li><a onClick={closeMenu} href='#skills' className='font-Ovo'>Skills</a></li>
        <li><a onClick={closeMenu} href='#projects' className='font-Ovo'>My Projects</a></li>
        <li><a onClick={closeMenu} href='#contact' className='font-Ovo'>Contact Me</a></li>
    </>

    return (
        <div>
            {
                isDarkMood || <div className='fixed top-0 right-0 w-11/12 translate-y-[-85%]  '>
                    <img src={bgImg} alt="" className='w-full' />
                </div>
            }


            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex justify-between items-center py-4 z-50 ${isScroll && 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-[#11001F] dark:shadow-white/20'}`}>
                <Link to={{ hash: '#top' }}>MH B</Link>

                <ul className={`hidden md:flex items-center md:gap-6 lg:gap-8 rounded-full py-3 px-12  shadow-sm bg-opacity-50 z-50 ${isScroll || 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
                    {menuLinks}
                </ul>

                <div className='flex items-center gap-4'>
                    <img onClick={() => setIsDarkMood(!isDarkMood)} src={isDarkMood ? sunIcon : moonThemeIcon} alt="" className='w-6 cursor-pointer' />

                    <Link to='/sample-resume.pdf'
                        target='_blank'
                        download
                        className='hidden lg:flex items-center gap-2 px-10 border border-gray-500 rounded-full py-3 ml-4 font-Ovo w-fit cursor-pointer dark:border-white/50'

                    >
                        My Resume {isDarkMood ? <AiOutlineDownload className='text-lg' /> : <AiOutlineDownload className='text-lg' />}
                    </Link>

                    <div onClick={openMenu} className='block md:hidden ml-3'>
                        <img src={isDarkMood ? menuIconWhite: menuBlackIcon} alt="" className='w-6 cursor-pointer' />
                    </div>
                </div>
            </nav>

            <ul ref={menuRef} className='flex md:hidden flex-col fixed -right-64 top-0 py-16 px-10 gap-4 h-screen bg-red-100 bottom-0 w-64 z-50 transition duration-500 dark:bg-[#2a004a]'>
                <div onClick={closeMenu} className='absolute top-6 right-6 '>
                    <img src={isDarkMood? closeWhiteIcon : closeBlackIcon} alt="" className='w-5 cursor-pointer' />
                </div>
                {menuLinks}
            </ul>
        </div>
    );
};

export default Navbar;