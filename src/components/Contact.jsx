import React, { useState } from 'react';
import footerBg from '../../public/footer-bg-color.png'
import rightArrowIcon from '../assets/right-arrow-white.png'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = ({isDarkMood}) => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ff8eb5c1-4d27-4386-9588-4f18f26293aa");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    // footerBg
    return (
        <div id='contact' className={`w-full px-[12%] py-16`}>
            <div>
                <h4 className='text-center mb-2 text-lg font-Ovo dark:text-white/80'>Connect With Me</h4>
                <h2 className='text-center text-5xl font-Ovo dark:text-white/80'>Get in touch</h2>
                <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo dark:text-white/80'>I'd love to here from you! If you have any question, comments or feedback please use the form below.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                    <div className='grid grid-cols-2 gap-6  mb-8'>
                        <input type="text" name='name' placeholder='Enter your name' required className='flex-1 p-3 border-[0.5px] border-gray-400 rounded-md bg-white outline-none dark:text-white dark:bg-[#2a004a]/30 dark:border-white/90'/>
                        <input type="email" name='email' placeholder='Enter your email' required className='flex-1 p-3 border-[0.5px] border-gray-400 rounded-md bg-white outline-none dark:text-white dark:bg-[#2a004a]/30 dark:border-white/90' />
                    </div>
                    <textarea rows='6' name='message' placeholder='Enter your message' required className='w-full p-4 border-[0.5px] border-gray-400 rounded-md bg-white outline-none mb-6 dark:bg-[#2a004a]/30 dark:text-white dark:border-white/90'></textarea>

                    <button type='submit' className='py-3 px-8 flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-[#2a004a] dark:text-white dark:hover:bg-[#11001F]'>Submit Now <img src={rightArrowIcon} alt="" className='w-4' /></button>
                </form>
                <div className='dark:text-white/80'>
                    <h4 className='text-lg font-bold'>Address</h4>
                    <p>Dhaka, Bangladesh - 1211</p>
                    <h4 className='text-lg font-bold mt-4'>Email</h4>
                    <p>mhbabu2002@gmail.com</p>
                    <h4 className='text-lg font-bold mt-4'>Number</h4>
                    <p>+8801629007430</p>
                    <h4 className='text-lg font-bold mt-4'>Social</h4>
                    <div className='flex gap-3'>
                        <Link to="https://www.linkedin.com/in/mahbub-hossen-6b0136335/" target='_blank'><FaLinkedin className='text-3xl text-[#0A63BC]' /></Link>
                        <Link to="https://github.com/MahbubHosssen" target='_blank'><FaGithub className='text-3xl text-[#151413]' /></Link>
                        <Link to='https://api.whatsapp.com/send/?phone=%2B8801629007430&text&type=phone_number&app_absent=0' target='_blank'><FaWhatsapp className='text-3xl text-[#3EBD4E]' /></Link>
                    </div>
                </div>
            </div>
            <p className='mt-4 text-lg'>{result}</p>
        </div>
    );
};

export default Contact;