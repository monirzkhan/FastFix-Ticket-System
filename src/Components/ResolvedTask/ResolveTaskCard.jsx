import React from 'react';

const ResolveTaskCard = ({ data }) => {
    return (
        <div className="card w-full bg-[#E0E7FF] card-sm shadow-sm my-4">
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>


            </div>
        </div>
    );
};

export default ResolveTaskCard;