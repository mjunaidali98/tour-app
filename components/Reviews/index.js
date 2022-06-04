import React from 'react'

const Reviews = () => {
    return (
        <div className=' my-12 sm:my-16 md:my-20 lg:my-24 xl:my-28 f-f-p w-3/4 mx-auto'>
            <h1 className='table px-3 text-primary-black mx-auto text-center text-2xl md:text-[30px] lg:text-[40px] xl:text-[50px] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[20px] font-bold border-b-8 border-[#FAD219] '>
                Customer Reviews
            </h1>
            {/* Image */}
            <div className='pb-10 pt-20 flex items-center justify-center w-full'>
                <div className='w-[172px] h-[172] relative'>
                    <img className='w-full h-full object-cover object-center' src='/assets/landingpage/c1.png' />
                    <div className='absolute -bottom-5 -right-5'>
                        <div className='bg-[#3B444F] rounded-full h-20 w-20 text-[70px] text-white font-bold leading-[20px] flex items-center justify-center'>
                            <p className='align-middle mt-6'>
                                “
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Review */}
            <p className='text-[#6D6542] text-center italic f-f-p text-xl leading-[33px] font-semibold p-10 '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
            <div className='py-5'>
                <p className='text-[#6D6542] text-center f-f-p text-[25px] leading-[41px] font-bold '>
                    Augustu Silva
                </p>
                <p className='text-[#0070C0] text-center f-f-p text-xl leading-[25px] font-medium '>
                    Client
                </p>
            </div>

        </div>
    )
}

export default Reviews