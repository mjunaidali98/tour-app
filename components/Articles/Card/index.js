import React from 'react'

const Card = ({ image, heading, description }) => {
    return (
        <div className='flex flex-col w-full f-f-p space-y-2'>
            <div className=''>
                <img className='w-full h-full object-cover object-center' src={image} />
            </div>
            <p className='text-xl leading-[leading-23px] font-semibold text-primary-black'>{heading}</p>
            <p className='text-base text-primary-gray' >{description}</p>
        </div>
    )
}

export default Card