import React from 'react';

const TaskStatusCard = ({card}) => {
    return (
         <div className="card w-96 bg-base-100 card-sm shadow-sm my-4">
                <div className="card-body">
                    <h2 className="card-title">{card.title}</h2>
                    
                    <div className="justify-end card-actions">
                        <button className="btn btn-success text-white w-full"> Complete</button>
                    </div>
                </div>
            </div>
    );
};

export default TaskStatusCard;