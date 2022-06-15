import React from 'react';
import { Link } from "react-router-dom";
function HeaderNavbar() {
  
    

  return (
    <div className='flex flex-row justify-between h-12 items-center overflow-hidden shadow-md bg-zinc-800'>
        <div className='justify-start '>
            <div>
                <Link to="/" className="my-auto flex flex-row">
                    <img src={require("../img/icon-aevum-solo-logo-shadow-250px.webp")}  className="max-h-10" alt="logo"/>
                    <img src={require("../img/icon-aevum-solo-text-250px.webp")} className="max-h-10 hidden md:block" alt="logo with text"/>
                </Link>
            </div>
        </div>
        <div className='justify-end flex  items-center px-5'>
            <div className='flex flex-row gap-5 text-slate-200'>
                <div>
                    <Link to="/" className="my-auto">Home</Link>
                </div>
                <div>
                    <Link to="/linktree" className="my-auto">LinkTree</Link>
                </div>
                      
                        
            </div>
        </div>
	  </div>
  )
}

export default HeaderNavbar;