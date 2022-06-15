import React from 'react';
import { Link } from "react-router-dom";
import data from '../pages/LinktreeData';

function FooterNavbar() {
  
    

  return (
    <div className='bg-zinc-800 p-5 text-slate-200 py-10'>
      <div className='flex flex-row justify-evenly'>
          <div className='justify-start flex flex-col gap-2'>
          
            <h5 className='text-3xl font-semibold'>Projects</h5>
            <hr></hr>
            {data.map((data)=>(data.type==="project" &&
            <div key={data.title}>
              <a href={data.url} className='cursor-pointer hover:text-red-500'>{data.title}</a>
            </div>
            ))}
            
          </div>
          <div className='justify-start flex flex-col gap-2'>
            <h5 className='text-3xl font-semibold'>SiteMap</h5>
            <hr></hr>
            <Link to="/" className="cursor-pointer hover:text-red-500">Home</Link>
            <Link to="/linktree" className="cursor-pointer hover:text-red-500">LinkTree</Link>
          </div>
          <div className='justify-start flex flex-col gap-2'>
            <h5 className='text-3xl font-semibold'>Social</h5>
            <hr></hr>
            {data.map((data)=>(data.type==="social" &&
            <div key={data.title}>
              <a href={data.url} className='cursor-pointer hover:text-red-500'>{data.title}</a>
            </div>
            ))}
          </div>
      </div>
      <br></br>
      <div className='flex justify-center py-5'>
        <p>Copyright @Aevum Electronics 2022</p>
      </div>
    </div>
  )
}

export default FooterNavbar;