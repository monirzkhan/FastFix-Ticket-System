import React from 'react';
import TicketsCard from '../TicketsCard/TicketsCard';

const Tickets = ({ tickets, progress, setProgress, selectTask, setSelectTask, }) => {

    return (
        <div className='px-4'>
            <h1 className='font-bold text-xl my-4'>
                Customer Tickets: ({tickets.length})
            </h1>
            <div className='grid md:grid-cols-2 grid-cols-1 justify-items-center-safe gap-8 '>
                {
                    tickets.length > 0 ?
                        tickets.map(ticket => <TicketsCard

                            selectTask={selectTask}
                            setSelectTask={setSelectTask}
                            progress={progress}
                            setProgress={setProgress}
                            key={ticket.id}
                            ticket={ticket}>

                        </TicketsCard>)
                        : 'No Tickets Opened'
                }

            </div>
        </div>
    );
};

export default Tickets;