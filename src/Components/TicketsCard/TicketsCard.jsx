import { toast } from "react-toastify";



const TicketsCard = ({ ticket, setProgress, setSelectTask, selectTask, }) => {

    const { id, title, description, customer, priority, createdAt } = ticket;
    const isAlreadySelected = selectTask.some(task => task.id === id);

    const handleProgressCard = (cardData) => {


        if (isAlreadySelected) {
            toast.error("Ticket already in Progress!");
            return;
        }

        setProgress(prev => prev + 1);
        setSelectTask(prev => [...prev, cardData]);
        toast.success("Ticket in Progress!");

    }

    return (

        <div>
            <div onClick={() => {
                handleProgressCard(ticket);


            }} className={`card md:w-120 w-90 bg-base-100 card-sm shadow-sm p-2
                ${isAlreadySelected ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h2 className="card-title">{title}</h2>
                        </div>
                        <div className={`badge  rounded-full ${isAlreadySelected ? 'badge-warning py-5 px-4' : 'badge-success'} `}>

                            <i className="fa-solid fa-circle"></i>  {isAlreadySelected ? 'InProgress' : 'Open'}
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