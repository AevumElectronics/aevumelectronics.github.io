import React from 'react';

export default function HeroSection() {
    return (
        <div id="homehero" className="flex p-10 items-center my-10 mx-auto gap-x-5 gap-y-10

            rounded-md shadow-md bg-zinc-50
            flex-col w-[90%] max-w-[900px]
            md:flex-row 
            ">
        
            <div className="flex-1">
                <img src={require("../img/logo-aevum-sm.webp")} alt="logo" className="max-h-56 object-contain"/>
            </div>
            <div className="flex-1 text-center text-zinc-700">
                <h1 className='text-5xl font-bold text-center mb-5'>Ciao</h1>
                <h2 className='mt-5 text-xl whitespace-normal'>I'm Aevum</h2>
            </div>
        </div>
)}

