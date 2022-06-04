import React from 'react'
import { logos } from '../../utils/constant'
const Companies = () => {
    return (
        <div className=' my-12 sm:my-16 md:my-20 lg:my-24 xl:my-28 '>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 px-10 gap-6 pb-20'>
                {logos.map((logo) => {
                    return (
                        <div>
                            <div className='flex items-center justify-center w-[250px] h-[65px] '>
                                <img className='object-cover object-center' src={logo.image} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Companies