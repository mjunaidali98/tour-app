import React, { useState } from 'react'
import { tour } from '../../../utils/constant'
import { listToMatrix } from '../../../utils/functions'
import Card from '../../PopularTours/Card'

const Tours = () => {
    const [page, setPage] = useState(0);
    return (
        <div className='w-9/12 flex flex-col'>
            <div className='flex flex-col lg:flex-row w-full space-y-2 space-x-4 lg:space-y-0 justify-between items-center f-f-p'>
                <div className='w-full lg:w-8/12 xl:w-9/12 flex justify-between items-center space-x-2 '>
                    <p className='text-primary-black text-2xl leading-[36px] font-medium'>
                        13 tours found
                    </p>
                    <p className='text-[#0070C0] '>
                        Show on the map
                    </p>
                </div>
                <div className='w-full lg:w-4/12 xl:w-3/12 flex items-center justify-between lg:justify-end space-x-4  text-base'>
                    <p className='text-primary-black'>
                        Sort by:
                    </p>
                    <select
                        placeholder='Select'
                        className='p-2 f-f-p text-[13px] leading-[19px] font-semibold w-[150px] outline-none focus:outline-none border border-[#D1D1D1]'
                    >
                        <option className='f-f-p text-[13px] leading-[20px]'>
                            Recommended
                        </option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 py-10'>
                {listToMatrix(tour, 10)[page].map((_card, idx) => {
                    return (
                        <Card card={_card} key={idx} smallSize />
                    )
                })}
            </div>

            <div className='flex items-center justify-center'>
                <svg onClick={() => page <= 0 ? setPage(0) : setPage(page - 1)} width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.44815 7.614C4.7022 6.9333 3.95134 6.25704 3.20048 5.57856L2.3974 4.81389L3.18331 3.97022C3.93662 3.28952 4.68748 2.60659 5.44079 1.92588C5.64936 1.7368 5.72788 1.51212 5.65672 1.25407C5.51195 0.72686 4.80526 0.557796 4.37339 0.947089C2.98455 2.1995 1.60062 3.45636 0.214226 4.70877C0.19705 4.72434 0.182327 4.74213 0.143066 4.7844C0.179873 4.80887 0.221588 4.82667 0.253487 4.85559C1.02886 5.55406 1.79932 6.25254 2.57223 6.95324L2.57232 6.95332C3.16613 7.49165 3.75995 8.02776 4.35131 8.5661C4.57215 8.76631 4.8298 8.84639 5.13407 8.76631C5.69353 8.61949 5.8653 7.9944 5.44815 7.614Z" fill="#757575" />
                </svg>

                {listToMatrix(tour, 10).map((item, idx) => {
                    return (
                        <span key={idx} onClick={() => setPage(idx)} className={`f-f-p mx-2 h-8 w-8  flex items-center justify-center text-lg ${idx === page ? "border border-[#0070C0]" : ""}`}>{idx + 1}</span>
                    )
                })}

                <svg onClick={() => page >= listToMatrix(tour, 10).length - 1 ? "" : setPage(page + 1)} width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.4205 1.917C1.16645 2.59771 1.91731 3.27397 2.66817 3.95245L3.47126 4.71711L2.68534 5.56078C1.93203 6.24149 1.18117 6.92442 0.427861 7.60512C0.219289 7.79421 0.140768 8.01889 0.211927 8.27693C0.356701 8.80414 1.06339 8.97321 1.49526 8.58392C2.8841 7.33151 4.26804 6.07465 5.65443 4.82224C5.6716 4.80667 5.68633 4.78887 5.72559 4.74661C5.68878 4.72214 5.64707 4.70434 5.61517 4.67542C4.8398 3.97694 4.06933 3.27846 3.29642 2.57776L3.29634 2.57769C2.70252 2.03935 2.10871 1.50324 1.51734 0.964905C1.2965 0.764698 1.03885 0.684616 0.734585 0.764699C0.175121 0.911517 0.00335655 1.53661 0.4205 1.917Z" fill="#757575" />
                </svg>


            </div>
        </div>
    )
}

export default Tours