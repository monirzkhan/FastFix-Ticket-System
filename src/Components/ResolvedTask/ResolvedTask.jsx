import React from 'react';
import ResolveTaskCard from './ResolveTaskCard';

const ResolvedTask = ({completeTask}) => {
    return (
        <div className='my-4'>
            <h1 className='font-semibold text-lg my-4'>
                Resolved Task {completeTask.length}
            </h1>
            {
               completeTask.length===0? <p className='text-[#627382] text-sm'> No resolved tasks yet.</p>
               :completeTask.map(data=><ResolveTaskCard key={data.id} data={data}></ResolveTaskCard>)
            }
            
        </div>
    );
};

export default ResolvedTask;