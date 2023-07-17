import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'HTML',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: node,
            title: 'Node',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            src: graphql,
            title: 'Graph Ql',
            style: 'shadow-pink-400'
        },
        {
            id: 7,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 8,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-sky-400'
        }

    ]
  return (
    <div name="experience" className="w-full h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline">Experience</p>
                <p className="py-6">These are the technologies I'hv worked with</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-12 sm:px-0 text-center">
                {
                    techs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md ${style}`}>
                            <img src={src} className="w-20 mx-auto" alt="experiences" />
                            <p className="mt-4">{title}</p>
                        </div> 
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Experience