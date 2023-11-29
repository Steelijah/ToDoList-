import React, {useRef, useState} from "react";
interface Props {
    index:number,
    task:string,
    taskRemove:(index:number)=> void,
    taskEdit: (index:number, value:string)=>void
}
const Task: React.FunctionComponent<Props> = ({index,task,taskRemove,taskEdit}: Props) =>
// const Task: React.FC<Props> = (props: Props) =>
{
    const newText = useRef<HTMLTextAreaElement>(null)
    const [isEdit, setIsEdit] = useState<boolean>(false)

    const handlerEditClick = () => setIsEdit(true)

    const handlerRemoveClick =  () => taskRemove(index)

    const handlerSaveClick = () =>
    {
        const value = newText.current!.value
        taskEdit(index, value)
        setIsEdit(false)
    }

    const renderNorm = () =>
    {
        return (
            <div className='box'>
                <div>{task}</div>
                <button className={'btn light'} onClick={handlerEditClick}>Edit</button>
                <button className={'btn red'} onClick={handlerRemoveClick}>Remove</button>
            </div>
        );
    }

    const renderEdit = () =>
    {
        return (
            <div className={'box'}>
                <textarea defaultValue={task} ref={newText}></textarea>
                <button className={'btn success'} onClick={handlerSaveClick}>Save</button>
            </div>
        )
    }


        if(isEdit)
            return renderEdit()
        else
            return renderNorm()
}

export default Task