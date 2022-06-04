import React from 'react'

const Card = ({ image, title, tours }) => {
    return (
        <div className={`relative rounded-[10px] focus:scale-105 hover:scale-105 transition-all ease-in-out duration-300 focus:shadow-lg hover:shadow-xl`}>
            <img className='w-full h-[394px] md:h-full object-cover object-center rounded-[10px] z-10' src={image} />
            <div className='absolute z-20 inset-0 black-mask rounded-[10px]'></div>
            {tours ? <div className='absolute top-5 right-5 '>
                <div className='h-[33px] bg-[#EC2846] rounded-[50px] w-[115px] text-center text-white text-base flex items-center justify-center leading-[20px]'>
                    {`${tours} Tours`}
                </div>
            </div> : null
            }
            <div className='absolute left-5 bottom-5 z-20'>
                <p className='f-f-p text-[35px] leading-[45px] text-white font-bold w-[300px] truncate'>
                    {title}
                </p>

            </div>
        </div>
    )
}

export default Card