import React, { useState } from 'react'

const Card = ({ card }) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div className='flex flex-col'>
            <div className='relative rounded-[10px] '>
                <img className='rounded-t-[10px] w-full h-full' src={card.image} />
                <img className='absolute right-0 top-0 rounded-[10px]' src='/assets/landingpage/red_rectangle.png' />
                <p className='absolute right-2 top-2.5 rotate-45 f-f-p text-base text-white '>{card.percent}</p>
            </div>
            <div className='flex flex-col f-f-p p-4 space-y-2 border border-[#DDDDDD] border-t-0 rounded-[10px] rounded-t-none'>
                <p className='text-xl leading-[23px] text-primary-black'>{card.title}</p>
                <div className='flex justify-between w-full'>
                    <div className='flex space-x-3 items-center'>
                        <img src='/assets/landingpage/small_pointer.png' />
                        <p className='text-sm text-primary-gray leading-[17px]'>{card.location}</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <p className='text-sm text-primary-gray leading-[17px] pr-1'>{`${card.reviews} Reviews `} </p>
                        {[...Array(card.reviews)].map((star, index) => {
                            index += 1;
                            return (
                                <span
                                    type="button"
                                    key={index}
                                    className={"bg-transparent focus:outline-none star"}
                                >
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.8024 0.858643L9.50722 6.10554H15.0241L10.5609 9.3483L12.2657 14.5952L7.8024 11.3524L3.33912 14.5952L5.04394 9.3483L0.580662 6.10554H6.09758L7.8024 0.858643Z" fill="#FA5636" />
                                    </svg>
                                </span>
                            );
                        })}
                    </div>
                </div>
                <div className='flex space-x-3 items-center '>
                    <img src='/assets/landingpage/compass.png' />
                    <p className='text-sm text-primary-gray leading-[17px]'>{card.time}</p>
                </div>
                <div className='flex justify-between items-center f-f-p'>
                    <div className='flex items-center space-x-3'>
                        <p className='text-sm text-primary-gray leading-[17px]'>From</p>
                        <p className='text-[15px] md:text-xl text-[#EC2846] leading-[17px] line-through'>{card.from}</p>
                        <p className='text-[25px] md:text-3xl text-[#0070C0] leading-[30px] font-bold'>{card.from}</p>
                    </div>
                    <button className='bg-[#0070C0] px-10 py-2 rounded-[5px] text-white'>
                        Select
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Card