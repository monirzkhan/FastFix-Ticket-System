import React from 'react';
import { toast } from 'react-toastify';

const TaskStatusCard = ({
    card,progress,setProgress,resolve,setResolve,setSelectComplete, selectComplete,completeTask,setCompleteTask,removeTaskCard
}) => {
    const handleTaskStatus=(data)=>{
        const updateProgress=progress-1;
        const updateResolve=resolve+1;
        
        if(progress===0){
            return
        }
        toast('Task Resolved!')
        setProgress(updateProgress);
        setResolve(updateResolve);
        setSelectComplete([...selectComplete, data]);
        removeTaskCard(data);
        setCompleteTask([...completeTask, data]);
        
        
    }

    return (
         <div className="card w-96 bg-base-100 card-sm shadow-sm my-4">
                <div className="card-body">
                    <h2 className="card-title">{card.title}</h2>
                    
                    <div className="justify-end card-actions">
                        <button onClick={()=>{
                            handleTaskStatus(card)
                        }} className="btn btn-success text-white w-full"> Complete</button>
                    </div>
                </div>
            </div>
    );
};

export default TaskStatusCard;