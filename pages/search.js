import React from 'react'
import Filter from '../components/Search/filter';
import Tours from '../components/Search/tours';

const Search = () => {
    return (
        <div className='container mx-auto px-4 py-10'>
            <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start md:space-x-5'>
                <Filter />
                <Tours />
            </div>
        </div>
    )
}

export default Search