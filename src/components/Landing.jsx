import React from 'react'
import LandingImg from "../assets/images/illustration-intro.png";

const Landing = () => {
  return (
    
    <section >
    <div className='container '>
    <div className='element-center flex-col mt-[150px] animate__animated animate__slideInUp transition-all duration-1000'>
    <div className='w-[750px] max-w-full '>
            <img className='w-full h-fit' src={LandingImg}
              alt="landing-img"/>
        </div>
        <div className='text-white text-center'>
        <h1 className='text-[30px] md:text-[40] font-semibold mb-[15px]'>
        All your files in one secure location,
              <br />
              accessible anywhere.
 
        </h1>
        <p className='font-normal text-lg px-[15px] md:w-[600px] max-w-full mb-[15px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam
              nulla impedit commodi.
        </p>
        </div>
        <a href="/" className='btn w-[200px] h-[60px] rounded-[30px] element-center text-white font-medium mt-[10px]'>
            Get Started
        </a>
        </div>
       
    </div>
    <div className='w-full h-[100px]'>
    <img
          src="/src/assets/images/bg-curvy-desktop.svg"
          className="w-full h-full"
        />
    </div>

    </section>
  )
}

export default Landing