import React, { useState } from 'react';
import TaskStatusCard from './TaskStatusCard';

const TaskStatus = ({ selectTask }) => {
    
    
    return (
        <div>
            <h1 className='font-bold text-lg my-4'>Task Status: {selectTask.length}</h1>
           <div className='m-4'>
            {
            selectTask.length>0? selectTask.map(card=><TaskStatusCard card={card}></TaskStatusCard>)
            :<p className='text-[#627382] text-sm'>select a ticket to add to Task Status</p>
           }
           </div>
            
        </div>
    );
};

export default TaskStatus;