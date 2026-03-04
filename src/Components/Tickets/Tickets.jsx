import React, { use } from 'react';
import TicketsCard from '../TicketsCard/TicketsCard';

const Tickets = ({ ticketsPromise, progress, setProgress, selectTask, setSelectStatus }) => {
    const tickets = use(ticketsPromise);

    return (
        <div>
            <h1 className='font-bold text-xl my-4'>
                Customer Tickets: {tickets.length}
            </h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    tickets.map(ticket => <TicketsCard
                        selectTask={selectTask}
                        setSelectStatus={setSelectStatus}
                        progress={progress}
                        setProgress={setProgress}
                        key={ticket.id}
                        ticket={ticket}>

                    </TicketsCard>)
                }

            </div>
        </div>
    );
};

export default Tickets;