import React from 'react'
import Card from './Card'
import { destinations } from '../../utils/constant'
const PopularDestination = () => {
    return (
        <div className='f-f-p  my-5 lg:my-8 xl:my-10'>
            <h1 className='table px-3  text-primary-black mx-auto text-center text-2xl md:text-[30px] lg:text-[40px] xl:text-[50px] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[20px] font-bold border-b-8 border-[#FAD219] '>Popular Destinations</h1>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-20'>
                {destinations.map((_card, idx) => {
                    return (
                        <div className={`${!idx ? "md:col-span-2" : null}`}>
                            <Card {..._card} key={idx} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PopularDestination