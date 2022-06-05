import React, { useState } from 'react'
// import RangeSlider from 'rsuite/RangeSlider';
import MultiRangeSlider from '../../common/MultiRangeSlider';


const Filter = () => {
    const [priceRange, setPrirceRange] = useState({ min: 0, max: 1000 })
    const [box, setBox] = useState(true);
    const [box1, setBox1] = useState(true);
    const [box2, setBox2] = useState(true);
    const [box3, setBox3] = useState(true);

    const [numberOfTour, setNumberOfTour] = useState(3);
    const [travelStyleNumber, setTravelStyleNumber] = useState(3);
    const tourType = [
        {
            name: "City trips",
        },
        {
            name: "Ecotourism",
        },
        {
            name: "Escorted tour",
        },
        {
            name: "City trips",
        },
        {
            name: "Ecotourism",
        },
        {
            name: "Escorted tour",
        }
    ]
    const travelStyle = [
        {
            name: "Cultural",
        },
        {
            name: "Nature & Adventure",
        },
        {
            name: "Marine",
        },
        {
            name: "Cultural",
        },
        {
            name: "Nature & Adventure",
        },
        {
            name: "Marine",
        }
    ]

    const rangeHandler = (min, max) => {
        let value = { min: min, max: max }
        console.log("value", value)
        setPrirceRange({ ...value });
    }
    return (
        <div className='w-full hidden lg:w-3/12 lg:flex flex-col space-y-6'>
            <div className='w-full flex flex-col  space-y-6 border border-[#D1D1D1] p-6 rounded-xl f-f-p '>
                <div className='flex items-center py-7 space-x-5 border-b border-[#D1D1D1]'>
                    <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.0619 33.9172L27.1024 23.5247C29.263 21.0694 30.5625 17.9316 30.5625 14.5046C30.5625 6.68611 23.7911 0.328979 15.4619 0.328979C7.13274 0.328979 0.345703 6.69352 0.345703 14.512C0.345703 22.3304 7.11708 28.6875 15.4463 28.6875C18.9846 28.6875 22.2411 27.5378 24.8244 25.6165L35.823 36.0387C36.465 36.6469 37.42 36.6469 38.0619 36.0387C38.7038 35.4304 38.7038 34.5254 38.0619 33.9172ZM3.55526 14.512C3.55526 8.36996 8.89408 3.37773 15.4463 3.37773C21.9985 3.37773 27.3373 8.36996 27.3373 14.512C27.3373 20.654 21.9985 25.6462 15.4463 25.6462C8.89408 25.6462 3.55526 20.6466 3.55526 14.512Z" fill="#0070C0" />
                    </svg>
                    <div className='space-y-1'>
                        <p className='text-lg leading-[27px] text-[#6D6542]'>
                            Tour Description
                        </p>
                        <input placeholder='Search for....' className='text-base focus:outline-none outline-none leading-[24px] font-medium text-primary-black placeholder:text-[#0070C0]' />

                    </div>
                </div>
                <div className='flex items-center py-7 space-x-5 border-b border-[#D1D1D1]'>
                    <svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.9154 2.06024L25.0155 0.292824C24.9314 0.280446 24.8417 0.280197 24.7576 0.292824L12.9867 2.04109L1.2158 0.292824C1.00026 0.260666 0.778735 0.310551 0.610902 0.428731C0.443069 0.546912 0.346191 0.721384 0.346191 0.90531V25.1254C0.346191 25.4271 0.604014 25.6853 0.957899 25.7379L12.8578 27.5053C12.9408 27.5208 13.0324 27.5169 13.1157 27.5053L24.8866 25.7571L36.6575 27.5053C36.7004 27.5117 36.7436 27.5148 36.7865 27.5148C36.9591 27.5148 37.128 27.4641 37.2624 27.3694C37.4302 27.2512 37.5271 27.0768 37.5271 26.8928V2.67273C37.5271 2.371 37.2693 2.11274 36.9154 2.06024ZM3.32407 24.8259L1.8275 24.6037V10.9841C1.82921 10.9826 1.83106 10.9814 1.83276 10.9801L2.53113 10.3936L7.70513 14.7387L5.59952 16.507C5.31029 16.7499 5.31029 17.1437 5.59952 17.3867C5.74417 17.5082 5.9337 17.5689 6.12323 17.5689C6.31277 17.5689 6.5023 17.5082 6.64695 17.3867L12.246 12.6846V19.6749L9.80504 17.5421C9.52151 17.2945 9.05275 17.2866 8.75775 17.5247C8.46289 17.7627 8.45356 18.1564 8.73701 18.4041L9.83103 19.3599L3.34052 24.8107C3.33466 24.8156 3.3297 24.8209 3.32407 24.8259ZM12.2461 26.1512L5.10283 25.0902L10.8579 20.2571L12.2461 21.4701V26.1512ZM12.2461 10.9253L8.75264 13.8591L3.57864 9.51395L6.71583 6.87927L10.0065 9.64277C10.1511 9.76425 10.3407 9.82495 10.5302 9.82495C10.7197 9.82495 10.9093 9.76425 11.0539 9.64277C11.3432 9.39988 11.3432 9.00602 11.0539 8.76307L7.76327 5.99957L8.86899 5.07099C9.15822 4.82809 9.15822 4.43424 8.86899 4.19129C8.57969 3.9484 8.11086 3.9484 7.82148 4.19129L1.8275 9.22516V1.64699L12.2461 3.19434V10.9253ZM24.1459 24.6037L13.7274 26.1511V21.5127L17.8983 19.5013C18.253 19.3302 18.3754 18.95 18.1717 18.6521C17.9681 18.3542 17.5154 18.2513 17.1606 18.4225L13.7274 20.0782V11.5614L17.6712 9.66578L24.1459 20.186V24.6037ZM24.1459 17.4766L18.9581 9.04732L24.1459 6.55384V17.4766ZM24.1459 5.1205L13.7274 10.1281V3.19434L24.1459 1.64692V5.1205ZM36.0458 26.1511L28.6298 25.0497L33.8291 20.6833C34.1183 20.4404 34.1183 20.0466 33.8291 19.8036C33.5398 19.5607 33.071 19.5607 32.7816 19.8036L26.9304 24.7174C26.9043 24.7393 26.8815 24.7627 26.8602 24.7869L25.6272 24.6037V1.64699L36.0458 3.19434V10.0338L29.3746 15.6362C29.0854 15.8791 29.0854 16.2729 29.3746 16.5159C29.5193 16.6374 29.7088 16.6981 29.8984 16.6981C30.0879 16.6981 30.2774 16.6374 30.4221 16.5159L31.0464 15.9916L36.0458 20.1901V26.1511ZM36.0458 11.7931V18.4308L32.0939 15.112L36.0458 11.7931Z" fill="#0070C0" />
                        <path d="M30.8678 13.0232C31.0983 13.0232 31.3156 12.9331 31.4558 12.7794C31.8346 12.364 35.1567 8.66909 35.1567 6.86466C35.1567 4.87861 33.2326 3.26283 30.8678 3.26283C28.5029 3.26283 26.5789 4.87861 26.5789 6.86466C26.5789 8.66909 29.901 12.364 30.2798 12.7794C30.4199 12.9331 30.6372 13.0232 30.8678 13.0232ZM30.8678 4.50684C32.4159 4.50684 33.6754 5.56455 33.6754 6.86466C33.6754 7.76277 32.1342 9.86688 30.8678 11.3544C29.6013 9.86688 28.0602 7.76277 28.0602 6.86466C28.0602 5.56449 29.3196 4.50684 30.8678 4.50684Z" fill="#0070C0" />
                        <path d="M32.9365 6.86465C32.9365 5.9067 32.0085 5.1274 30.8678 5.1274C29.7271 5.1274 28.7991 5.9067 28.7991 6.86465C28.7991 7.8226 29.727 8.6019 30.8678 8.6019C32.0085 8.6019 32.9365 7.8226 32.9365 6.86465ZM30.8679 7.3579C30.544 7.3579 30.2805 7.13659 30.2805 6.86465C30.2805 6.59265 30.544 6.3714 30.8679 6.3714C31.1917 6.3714 31.4552 6.59271 31.4552 6.86465C31.4552 7.13659 31.1917 7.3579 30.8679 7.3579Z" fill="#0070C0" />
                        <path d="M3.97003 17.8754L3.22937 18.4974C2.94014 18.7403 2.94014 19.1342 3.22937 19.3771C3.37409 19.4985 3.56355 19.5593 3.75316 19.5593C3.94277 19.5593 4.13223 19.4986 4.27688 19.3771L5.01754 18.7551C5.30676 18.5122 5.30676 18.1184 5.01754 17.8754C4.72824 17.6325 4.2594 17.6325 3.97003 17.8754Z" fill="#0070C0" />
                        <path d="M19.3817 18.691C19.5067 18.691 19.6335 18.6644 19.7498 18.6083L20.7867 18.1082C21.1415 17.9372 21.2638 17.557 21.0601 17.2591C20.8565 16.9613 20.4038 16.8583 20.049 17.0295L19.0121 17.5296C18.6573 17.7006 18.535 18.0808 18.7386 18.3787C18.8756 18.579 19.125 18.691 19.3817 18.691Z" fill="#0070C0" />
                        <path d="M27.7451 17.0046L27.0785 17.5644C26.7893 17.8073 26.7893 18.2011 27.0785 18.4441C27.2231 18.5656 27.4127 18.6263 27.6022 18.6263C27.7917 18.6263 27.9813 18.5656 28.1259 18.4441L28.7925 17.8843C29.0817 17.6414 29.0817 17.2476 28.7925 17.0046C28.5032 16.7617 28.0344 16.7617 27.7451 17.0046Z" fill="#0070C0" />
                    </svg>
                    <div className='space-y-1'>
                        <p className='text-lg leading-[27px] text-[#6D6542]'>
                            Your Location
                        </p>
                        <select placeholder='Choose a Location' value={"Choose a Location"} className='text-base appearance-none focus:outline-none outline-none leading-[24px] font-medium text-[#0070C0]' >
                            <option className='text-[#0070C0]'>Choose a Location</option>
                        </select>
                    </div>
                </div>
                <div className='pb-5'>
                    <button className={`flex w-full f-f-p space-x-4 text-lg leading-[27px] items-center justify-center font-medium bg-[#0070C0] px-10 py-4 rounded-[5px] text-white hover:scale-110 transition-all ease-in-out duration-300`}>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5864 22.1951L17.6288 15.5974C19.0004 14.0386 19.8254 12.0466 19.8254 9.87091C19.8254 4.90732 15.5266 0.87146 10.2387 0.87146C4.95088 0.87146 0.64209 4.91203 0.64209 9.87562C0.64209 14.8392 4.94094 18.8751 10.2288 18.8751C12.4751 18.8751 14.5425 18.1451 16.1826 16.9254L23.1651 23.542C23.5726 23.9281 24.1789 23.9281 24.5864 23.542C24.994 23.1558 24.994 22.5813 24.5864 22.1951ZM2.6797 9.87562C2.6797 5.97633 6.06908 2.80698 10.2288 2.80698C14.3885 2.80698 17.7779 5.97633 17.7779 9.87562C17.7779 13.7749 14.3885 16.9443 10.2288 16.9443C6.06908 16.9443 2.6797 13.7702 2.6797 9.87562Z" fill="white" />
                        </svg>
                        <span>Select</span>
                    </button>
                </div>
            </div>
            {/* Map */}
            <div className='h-[173px] w-full flex flex-col space-y-6 border text-primary-black border-[#D1D1D1] rounded-xl f-f-p relative'>
                <img className='w-full h-full object-cover object-center' src='/assets/search/map.png' />
                <div className='absolute inset-0'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src='/assets/landingpage/pointer.png' />
                        <p className='texxt-[22px] leading-[33px] f-f-p text-primary-black font-bold'>Show on Map</p>
                    </div>
                </div>
            </div>

            <div className='w-full border space-y-4 px-6 py-7 text-primary-black border-[#D1D1D1] rounded-xl f-f-p'>
                <div className='flex items-center justify-between'>
                    <p className='text-xl leading-[30px] font-medium'>Price Range ($)</p>
                    <svg role={"button"} onClick={() => setBox(!box)} className={`${box ? "" : "rotate-180 transition-all ease-in-out duration-300"}`} width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.0231 12.0276C4.50262 10.4063 5.97247 8.77427 7.44715 7.14228L9.10916 5.39676L10.9429 7.10494C12.4224 8.74227 13.9068 10.3743 15.3863 12.0116C15.7973 12.4649 16.2856 12.6356 16.8465 12.4809C17.9924 12.1663 18.3598 10.6303 17.5137 9.69161C14.7916 6.67294 12.0598 3.66495 9.33765 0.651614C9.30381 0.614281 9.26513 0.582281 9.17326 0.496948C9.12008 0.576948 9.0814 0.667614 9.01854 0.736948C7.50034 2.42228 5.98214 4.09694 4.4591 5.77694C3.28902 7.06761 2.12378 8.35827 0.953699 9.64361C0.518547 10.1236 0.344486 10.6836 0.518547 11.3449C0.837659 12.5609 2.1963 12.9343 3.0231 12.0276Z" fill="#757575" />
                    </svg>
                </div>
                <p className='f-f-p text-lg leading-[27px] font-medium'>  {`$${priceRange.min} -$${priceRange.max}`}</p>
                <MultiRangeSlider
                    min={0}
                    max={1000}
                    onChange={({ min, max }) => rangeHandler(min, max)}
                />

            </div>
            <div className='w-full flex flex-col space-y-6 text-primary-black border border-[#D1D1D1] rounded-xl f-f-p '>
                <div className='flex flex-col space-y-4 px-6 py-7 border-b border-[#D1D1D1]'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl leading-[30px] font-medium'>Review Score</p>
                        <svg role={"button"} onClick={() => setBox1(!box1)} className={`${box1 ? "rotate-0" : "rotate-180 "} transition-all ease-in-out duration-300`} width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.0231 12.0276C4.50262 10.4063 5.97247 8.77427 7.44715 7.14228L9.10916 5.39676L10.9429 7.10494C12.4224 8.74227 13.9068 10.3743 15.3863 12.0116C15.7973 12.4649 16.2856 12.6356 16.8465 12.4809C17.9924 12.1663 18.3598 10.6303 17.5137 9.69161C14.7916 6.67294 12.0598 3.66495 9.33765 0.651614C9.30381 0.614281 9.26513 0.582281 9.17326 0.496948C9.12008 0.576948 9.0814 0.667614 9.01854 0.736948C7.50034 2.42228 5.98214 4.09694 4.4591 5.77694C3.28902 7.06761 2.12378 8.35827 0.953699 9.64361C0.518547 10.1236 0.344486 10.6836 0.518547 11.3449C0.837659 12.5609 2.1963 12.9343 3.0231 12.0276Z" fill="#757575" />
                        </svg>
                    </div>
                    {box1 && [...Array(5)].map((item, idx) => {
                        return (
                            <div key={idx} className='flex items-center space-x-2'>
                                <div className="bg-white dark:bg-gray-800 border rounded-sm text-primary-black border-[#DDDDDD] w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div className="check-icon hidden bg-[#0070C0] text-white rounded-sm">
                                        <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                                {[...Array(5 - idx)].map((item, idx) => {
                                    return (
                                        <span
                                            key={idx}
                                            className={"bg-transparent focus:outline-none star"}
                                        >
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.8024 0.858643L9.50722 6.10554H15.0241L10.5609 9.3483L12.2657 14.5952L7.8024 11.3524L3.33912 14.5952L5.04394 9.3483L0.580662 6.10554H6.09758L7.8024 0.858643Z" fill="#FA5636" />
                                            </svg>
                                        </span>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                {/* Tour Type */}
                <div className='flex flex-col space-y-4 px-6 py-7 text-primary-black border-b border-[#D1D1D1]'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl leading-[30px] font-medium'>Tour Type</p>
                        <svg role={"button"} onClick={() => setBox2(!box2)} className={`${box2 ? "rotate-0" : "rotate-180"}  transition-all ease-in-out duration-300 `} width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.0231 12.0276C4.50262 10.4063 5.97247 8.77427 7.44715 7.14228L9.10916 5.39676L10.9429 7.10494C12.4224 8.74227 13.9068 10.3743 15.3863 12.0116C15.7973 12.4649 16.2856 12.6356 16.8465 12.4809C17.9924 12.1663 18.3598 10.6303 17.5137 9.69161C14.7916 6.67294 12.0598 3.66495 9.33765 0.651614C9.30381 0.614281 9.26513 0.582281 9.17326 0.496948C9.12008 0.576948 9.0814 0.667614 9.01854 0.736948C7.50034 2.42228 5.98214 4.09694 4.4591 5.77694C3.28902 7.06761 2.12378 8.35827 0.953699 9.64361C0.518547 10.1236 0.344486 10.6836 0.518547 11.3449C0.837659 12.5609 2.1963 12.9343 3.0231 12.0276Z" fill="#757575" />
                        </svg>
                    </div>
                    {box2 && tourType.map((type, idx) => {
                        return (idx + 1 <= numberOfTour &&
                            <div key={idx} className='flex items-center space-x-2'>
                                <div className="bg-white dark:bg-gray-800 border rounded-sm border-[#DDDDDD] w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div className="check-icon hidden bg-[#0070C0] text-white rounded-sm">
                                        <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                                <p className='text-[15px] text-[#6D6542]'>{type.name}</p>
                            </div>
                        )
                    })}
                    {box2 && <div role={"button"} onClick={() => numberOfTour === tourType.length ? setNumberOfTour(3) : setNumberOfTour(tourType.length)} className='flex items-center space-x-2'>
                        <p className='text-[#0070C0] text-[15px] leading-[22px] font-medium'>
                            {numberOfTour === tourType.length ? "Less" : "More"}
                        </p>
                        <svg width="11" height="8" className={`${numberOfTour !== tourType.length ? "rotate-0" : "rotate-180"}  transition-all ease-in-out duration-300`} viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.37497 1.29113C8.52494 2.22264 7.68046 3.16028 6.8332 4.09792L5.87832 5.10078L4.82478 4.11937C3.97475 3.17867 3.12193 2.24103 2.2719 1.30033C2.03578 1.03987 1.75521 0.941816 1.43297 1.03068C0.774612 1.21146 0.563492 2.09395 1.04962 2.63324C2.61358 4.36757 4.18309 6.09577 5.74704 7.82703C5.76649 7.84848 5.78871 7.86687 5.84149 7.91589C5.87205 7.86993 5.89427 7.81784 5.93038 7.77801C6.80264 6.80972 7.6749 5.84757 8.54994 4.88235C9.22219 4.14082 9.89166 3.39929 10.5639 2.66082C10.8139 2.38505 10.9139 2.06331 10.8139 1.68335C10.6306 0.984715 9.84999 0.770223 9.37497 1.29113Z" fill="#757575" />
                        </svg>
                    </div>
                    }
                </div>
                {/* Travel Style */}
                <div className='flex flex-col space-y-4 px-6 py-7 border-b border-[#D1D1D1]'>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl leading-[30px] font-medium'>Travel Style</p>
                        <svg role={"button"} onClick={() => setBox3(!box3)} className={`${box3 ? "rotate-0" : "rotate-180"}  transition-all ease-in-out duration-300 `} width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.0231 12.0276C4.50262 10.4063 5.97247 8.77427 7.44715 7.14228L9.10916 5.39676L10.9429 7.10494C12.4224 8.74227 13.9068 10.3743 15.3863 12.0116C15.7973 12.4649 16.2856 12.6356 16.8465 12.4809C17.9924 12.1663 18.3598 10.6303 17.5137 9.69161C14.7916 6.67294 12.0598 3.66495 9.33765 0.651614C9.30381 0.614281 9.26513 0.582281 9.17326 0.496948C9.12008 0.576948 9.0814 0.667614 9.01854 0.736948C7.50034 2.42228 5.98214 4.09694 4.4591 5.77694C3.28902 7.06761 2.12378 8.35827 0.953699 9.64361C0.518547 10.1236 0.344486 10.6836 0.518547 11.3449C0.837659 12.5609 2.1963 12.9343 3.0231 12.0276Z" fill="#757575" />
                        </svg>
                    </div>
                    {box3 && travelStyle.map((type, idx) => {
                        return (idx + 1 <= travelStyleNumber &&
                            <div key={idx} className='flex items-center space-x-2'>
                                <div className="bg-white dark:bg-gray-800 border rounded-sm border-[#DDDDDD] w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div className="check-icon hidden bg-[#0070C0] text-white rounded-sm">
                                        <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                                <p className='text-[15px] text-[#6D6542]'>{type.name}</p>
                            </div>
                        )
                    })}
                    {box3 && <div role={"button"} onClick={() => travelStyleNumber === travelStyle.length ? setTravelStyleNumber(3) : setTravelStyleNumber(travelStyle.length)} className='flex items-center space-x-2'>
                        <p className='text-[#0070C0] text-[15px] leading-[22px] font-medium'>
                            {travelStyleNumber === tourType.length ? "Less" : "More"}
                        </p>
                        <svg width="11" height="8" className={`${travelStyleNumber !== travelStyle.length ? "rotate-0" : "rotate-180"}  transition-all ease-in-out duration-300`} viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.37497 1.29113C8.52494 2.22264 7.68046 3.16028 6.8332 4.09792L5.87832 5.10078L4.82478 4.11937C3.97475 3.17867 3.12193 2.24103 2.2719 1.30033C2.03578 1.03987 1.75521 0.941816 1.43297 1.03068C0.774612 1.21146 0.563492 2.09395 1.04962 2.63324C2.61358 4.36757 4.18309 6.09577 5.74704 7.82703C5.76649 7.84848 5.78871 7.86687 5.84149 7.91589C5.87205 7.86993 5.89427 7.81784 5.93038 7.77801C6.80264 6.80972 7.6749 5.84757 8.54994 4.88235C9.22219 4.14082 9.89166 3.39929 10.5639 2.66082C10.8139 2.38505 10.9139 2.06331 10.8139 1.68335C10.6306 0.984715 9.84999 0.770223 9.37497 1.29113Z" fill="#757575" />
                        </svg>
                    </div>
                    }
                </div>
            </div>

            <style>
                {`  .checkbox:checked + .check-icon {
                            display: flex;
                        }`}
            </style>
        </div>

    )
}

export default Filter