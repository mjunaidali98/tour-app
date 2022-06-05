import React from 'react'
import Header from '../components/Map/Header'
import Tours from '../components/Map/Tours'

const Map = () => {
    return (
        <>
            <Header />
            <div className='relative'>
                <div className='container mx-auto flex flex-col-reverse xl:flex-row items-start'>
                    <div className='w-full xl:w-4/6 mb-10 xl:pr-10'>
                        <Tours />
                    </div>
                    <div className='w-full xl:w-2/6'>
                        <iframe
                            className='w-full h-[357px] xl:h-[701px]'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                        >
                        </iframe>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Map