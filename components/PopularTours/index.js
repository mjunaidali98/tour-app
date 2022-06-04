import React from 'react'
import Card from './Card'
import { tour } from '../../utils/constant'
const Tours = ({ title, buttonText }) => {

    return (
        <>
            <div className='f-f-p my-3 lg:my-4 xl:my-5'>
                <h1 className='table px-3 text-primary-black mx-auto text-center text-2xl md:text-[30px] lg:text-[40px] xl:text-[50px] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[20px] font-bold border-b-8 border-[#FAD219] '>
                    {title}
                </h1>
                <div className='grid grid-col-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 py-10 md:py-12 lg:py-16 xl:py-20'>
                    {tour.map((_card, idx) => {
                        return (
                            <Card card={_card} key={idx} />
                        )
                    })}
                </div>
            </div>
            {buttonText &&
                <div className='flex justify-center lg:justify-end mb-20'>
                    <button className='bg-[#0070C0] px-8 py-2 rounded-[5px] text-white hover:scale-105 transition-all ease-in-out duration-300'>
                        {buttonText}
                    </button>
                </div>
            }
        </>
    )
}

export default Tours