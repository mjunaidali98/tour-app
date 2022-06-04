import React, { useState } from 'react'
import { intro } from '../../utils/constant'
const Intro = () => {
    const [data] = useState(intro);
    return (
        <>
            <div className='container mx-auto px-10 lg:px-10 py-10'>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 '>
                    {data.map((_card, idx) => {
                        return (
                            <div key={idx} className='flex space-x-6 f-f-p p-6'>
                                <div className=''>
                                    <img className='' src={_card.image} />
                                </div>
                                <div className='w-10/12 f-f-p'>
                                    <p className='text-2xl leading-[36px] font-bold text-primary-black'>{_card.heading}</p>
                                    <p className='text-[15px] leading-[29px] text-primary-gray'>{_card.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='border-b border-[##D1D1D1] mx-4 mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28'></div>

        </>
    )
}

export default Intro