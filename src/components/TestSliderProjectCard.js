import React, {useState} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/outline'
export default function ProjectCard(props) {
    const image = props.img;

    const[slideIndex, setSlideIndex] = useState(0);
    function slideLeft(){
        if(slideIndex>0) setSlideIndex(slideIndex-1);
    }
    function slideRight() {
        if(slideIndex<image.length-1) setSlideIndex(slideIndex+1);

    }


/*     const [countDown, setCountDown] = useState(0);
    
      useEffect(() => {
        console.log(countDown);
        const interval = setInterval(() => {
          setCountDown(countDown+1);
          
          setSlideIndex(countDown%image.length)
        }, 2000);
    
        return () => clearInterval(interval);
      }, [countDown]); */
      

    return (
        <div className="flex m-auto items-center gap-y-5 overflow-hidden
            rounded-md shadow-md bg-zinc-50
            flex-col w-[90%] max-w-[700px]
            md:flex-row ">

            <div id="slider" className='flex md:max-w-md'>
                {(image.length!==1) && 
                <ChevronLeftIcon className='w-10 cursor-pointer text-zinc-700' onClick={slideLeft}/>}
                <div>
                    <img src={image[slideIndex]} alt={props.title} 
                        className="h-[300px]  object-contain"/>
                </div>
                {(image.length!==1) && 
                <ChevronRightIcon className='w-10 cursor-pointer text-zinc-700' onClick={slideRight}/>}
            </div>

            <div className="flex-1 text-center text-zinc-700 p-5">
                <h1 className='text-5xl font-bold text-center mb-5'>{props.title}</h1>
                <h2 className='mt-5 text-xl whitespace-normal'>{props.description}</h2>
            </div>
        </div>
)}


