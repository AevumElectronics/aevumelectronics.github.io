import React from 'react';
export default function ProjectCard(props) {
    const image = props.img;

    return (
        
        <div className="m-auto  gap-y-5 overflow-hidden
            rounded-md shadow-md bg-zinc-50
            w-[90%] max-w-[900px]
            hover:shadow-xl hover:shadow-zinc-400  hover:scale-105 ease-in-out duration-300
            active:shadow-xl active:shadow-red-300
             ">
            <a href={props.url} className="cursor-pointer flex items-center flex-col md:flex-row" 
                target="_blank" rel="noopener noreferrer">
                <div className='md:max-w-md'>
                    <img src={image[0]} alt={props.title} 
                        className="h-[300px]  object-contain"/>
                </div>
                <div className="flex-1 text-center text-zinc-700 p-5">
                    <h1 className='text-5xl font-bold text-center mb-5'>{props.title}</h1>
                    <h2 className='mt-5 text-xl whitespace-normal'>{props.description}</h2>
                </div>
            </a>
        </div>
        
)}


