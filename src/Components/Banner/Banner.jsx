import React from 'react';
import bgImage from '../../assets/vector1.png'

const Banner = ({ progress,resolve}) => {
    return (
        <div className='md:flex justify-center gap-8 md:my-8 my-4 mx-4'>
            {/* In-progress  */}
            <div>
                <div className="md:my-0 my-4 relative overflow-hidden text-white rounded-2xl py-16 bg-linear-to-r from-[#632EE3]  to-[#9F62F2] md:w-160 w-120 shadow-sm">

                    <img
                        src={bgImage}
                        className='absolute left-0 top-0 h-full object-cover opacity-100' />

                    <img
                        src={bgImage}
                        className='absolute right-0 top-0 h-full object-cover opacity-100 scale-x-[-1]' />

                    <div className="card-body text-center  py-4">
                        <p className="font-bold text-xl">In-Progress</p>
                        <h1 className='font-bold text-5xl'>{progress}</h1>



                    </div>
                </div>
            </div>
            {/* Resolved  */}
            <div>
                <div>
                    <div className="relative overflow-hidden text-white rounded-2xl py-16 bg-linear-to-r from-[#54CF68]  to-[#00827A] md:w-160  w-120 shadow-sm">

                        <img
                            src={bgImage}
                            className='absolute left-0 top-0 h-full object-cover opacity-100' />

                        <img
                            src={bgImage}
                            className='absolute right-0 top-0 h-full object-cover opacity-100 scale-x-[-1]' />

                        <div className="card-body text-center  py-4">
                            <p className="font-bold text-xl">Resolved</p>
                            <h1 className='font-bold text-5xl'>{resolve}</h1>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;