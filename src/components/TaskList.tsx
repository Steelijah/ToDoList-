import React, {useState} from 'react';
import Task from "./Task";

const TaskList: React.FC = () =>
{
    const [tasks, setTasks] = useState<string[]>([])

    const taskEdit = (index: number, text:string) =>
    {
        setTasks(prev => {
            const temp = [...prev]
            temp[index] = text
            return temp
        })
    }

    const taskRemove = (index:number) => setTasks(prev => prev.filter((t,i) => i !== index))


    const handlerAddTaskClick = () => setTasks (prev => [...prev, 'New Task'])

    return (
        <div className={'field'}>
            <button className={'btn new'} onClick={handlerAddTaskClick}>Add task
            </button>
            {tasks.map((item, index) =>
                <Task key={index} taskEdit={taskEdit}
                      taskRemove={taskRemove} index={index} task={item}/>)}
        </div>
    );
}

export default TaskList;