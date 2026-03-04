import { toast } from "react-toastify";



const TicketsCard = ({ ticket, setProgress, setSelectStatus }) => {

    const { id, title, description, customer, priority, status, createdAt } = ticket;

    const handleProgressCard = (cardData) => {
        setProgress(prev => prev + 1);
        setSelectStatus(prev => [...prev, cardData]);
        toast("Ticket in Progress!");

    }
 

    return (

        <div>
            <div disabled onClick={() => {
                handleProgressCard(ticket);
               

            }} className="card w-120 bg-base-100 card-sm shadow-sm p-2">
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h2 className="card-title">{title}</h2>
                        </div>
                        <div className={`badge  rounded-full ${status === "Open" ? 'badge-success' : 'badge-warning'} `}>

                            <i className="fa-solid fa-circle"></i> {status}
                        </div>
                    </div>
                    <p className='text-[#627382]'>{description}</p>
                    <div className="flex justify-between items-center my-4 ">
                        <div className='flex justify-between items-center gap-4'>
                            <span className='text-[#627382]'>#000{id}</span>
                            <span className={`${priority === "High" ? 'text-red-500' : 'text-yellow-400'}`}>{priority} Priority</span>
                        </div>
                        <div className='flex justify-between items-center gap-6 text-[#627382]'>
                            <p >{customer}</p>
                            <p><i className="fa-regular fa-calendar"></i> {createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default TicketsCard;