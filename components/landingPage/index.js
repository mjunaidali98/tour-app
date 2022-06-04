import React from 'react'
import Articles from '../Articles'
import Companies from '../Companies'
import Highlight from '../Highlight'
import Intro from '../Intro'
import PopularDestination from '../PopularDestination'
import Tours from '../PopularTours'
import Reviews from '../Reviews'
const LandingPage = () => {
    return (
        <>
            <Intro />
            <div className='container w-full mx-auto px-4'>
                <Tours title={"Popular Tours"} buttonText={"Show More Tours"} />
                <PopularDestination />
                <Tours title={"Recommended Tours"} />
            </div>
            <Highlight />
            <div className='container w-full mx-auto px-4'>
                <Reviews />
                <Articles />
                <Companies />
            </div>
        </>
    )
}

export default LandingPage