import React from 'react'
import Card from './Card'
import { articles } from '../../utils/constant'
const Articles = () => {
    return (
        <div className=' my-12 sm:my-16 md:my-20 lg:my-24 xl:my-28 '>
            <h1 className='table px-3 text-primary-black mx-auto text-center text-2xl md:text-[30px] lg:text-[40px] xl:text-[50px] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[20px] font-bold border-b-8 border-[#FAD219] '>
                Recent Articles
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-20'>
                {articles.map((_card, idx) => {
                    return (
                        <Card {..._card} key={idx} />
                    )
                })}
            </div>
        </div>
    )
}

export default Articles