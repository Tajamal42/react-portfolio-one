import React from 'react';
import HeroImg from '../assets/heroImage.webp';
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradiant-to-b from-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-4xl sm:text-7xl font-bold">I'm a Full Stack Developer</h1>
                <p className="text-gray-500 py-4 max-w-md">
                    I have 8 years of experience building and desgining software. Currently, I love to work on web application using technologies like React, Redux, Tailwind, Next JS and GraphQL.
                </p>
                <div>
                    <Link smooth duration={500} to="portfolio"  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">Portfolio <span className="group-hover:rotate-90 duration-300"><MdKeyboardArrowRight size={25}/></span></Link>
                </div>
            </div>
            <div>
                <img src={HeroImg} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
            </div>
        </div>
    </div>
  )
}

export default Home