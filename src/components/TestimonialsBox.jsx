import React from 'react'

const TestimonialsBox = ({ image, desc, name, position }) => {
  return (
    <div className='text-white bg-[#21293c] rounded-[5px] p-[30px] shadow-[6px_6px_1px_6px_#1c202c]'>
    <p className='text-sm font-normal tracking-[0.8px] mb-[30px] '>{desc}</p>
    <div className='flex items-center gap-[15px]'>
         <img
          src={`/src/assets/images/${image}`}
          className="w-[50px] h-[50px] rounded-full object-contain"
        />
   
    <div>
        <strong className='block mb-[5px]'>{name}</strong>
        <p className='font-normal text-sm'>{position}</p>
    </div>
    </div>
    </div>
  )
}

export default TestimonialsBox
