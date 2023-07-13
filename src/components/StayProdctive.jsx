import React from 'react'
import StayProductiveImg from "../assets/images/illustration-stay-productive.png";
import ArrowImg from "/src/assets/images/icon-arrow.svg";


const StayProdctive = () => {
  return (
    <section className='pb-[150px]'>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center'>
            <div>
            <img src={StayProductiveImg} alt="stay-img" />
            </div>
     
        <div className='text-white'>
            <h3 className='font-medium text-[35px] leading-[50px]'>
            Stay productive,
            <br />
            wherever you are
            </h3>
       
        <div className='my-[15px] font-normal text-sm tracking-[0.8px]' >
            <p className='mb-[15px]'>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              excepturi incidunt quo deserunt quidem accusamus iure ab earum
              reprehenderit debitis!</p>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              excepturi incidunt quo deserunt quidem accusamus iure ab earum
              reprehenderit debitis!</p>
        </div>
       <a href="/" className='text-primary  hover:text-[#42B0D1] border-b-2 border-primary border-solid pb-[5px] flex items-center gap-[10px] w-fit transition-colors duration-200'>
       See how Fylo works
       <img         src={ArrowImg}
              alt="arrow-img"
              className="w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite]"
 />
       </a>
       </div>
       </div>
    </section>
  )
}

export default StayProdctive
