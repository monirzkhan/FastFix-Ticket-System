
import TaskStatusCard from './TaskStatusCard';

const TaskStatus = ({ 
    selectTask, progress, setProgress, resolve, setResolve, setSelectComplete, selectComplete,completeTask ,setCompleteTask
}) => {


    return (
        <div>
            <h1 className='font-bold text-lg my-4'>Task Status: {selectTask.length}</h1>
            <div className='my-4'>
                {
                    selectTask.length > 0 ? selectTask.map(card => <TaskStatusCard
                        completeTask={completeTask}
                        setCompleteTask={setCompleteTask}
                        progress={progress}
                        setProgress={setProgress}
                        resolve={resolve}
                        setResolve={setResolve}
                        key={card.id}
                        card={card}
                        selectComplete={selectComplete}
                        setSelectComplete={setSelectComplete}

                    >


                    </TaskStatusCard>)
                        : <p className='text-[#627382] text-sm'>select a ticket to add to Task Status</p>
                }
            </div>

        </div>
    );
};

export default TaskStatus;