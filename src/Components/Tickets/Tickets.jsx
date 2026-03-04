import React from 'react';

const Tickets = () => {
    return (
        <div>
            <h1 className='font-bold text-xl'>
                Customer Tickets
            </h1>
            <div>
                <div onClick={()=>console.log('hi')} className="card w-120 bg-base-100 card-sm shadow-sm p-2">
                    <div className="card-body">
                        <div className='flex justify-between items-center'>
                            <div>
                                <h2 className="card-title">Login Issues - Can't Access Account</h2>
                            </div>
                            <div className="badge badge-success rounded-full  text-green-800">
                                
                                <i class="fa-solid fa-circle"></i> Success
                            </div>
                        </div>
                        <p className='text-[#627382]'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                        <div className="flex justify-between items-center my-4 ">
                            <div className='flex justify-between items-center gap-4'>
                                <span className='text-[#627382]'>#0001</span>
                                <span>High Priority</span>
                            </div>
                            <div className='flex justify-between items-center gap-6 text-[#627382]'>
                                <p >John Smith</p>
                                <p><i class="fa-regular fa-calendar"></i> 1/15/26</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tickets;