import React from 'react'

const Cards = ({data}) => {
    const {title, description, price, image, status} = data;
    
    return (
    <div>
      <div className='shadow-lg rounded-4xl min-h-100'>
        <div className='bg-gray-200 flex justify-center items-center py-10 rounded-t-4xl'>
            <img className='h-40 w-40 object-contain' src={image} alt={title} />
        </div>
        <div className='p-5 space-y-3'>
            <h2 className='text-xl font-bold'>{title}</h2>
            <p className='leading-5 text-sm text-gray-500'>{description}</p>
            <h1 className='font-bold text-2xl'>${price}<span className='font-normal text-[16px] text-gray-500'>/months</span></h1>
            <button className='w-full bg-red-600 text-white p-2 font-semibold text-lg rounded-xl my-1 cursor-pointer active:scale-95'>Subscribe Now</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
