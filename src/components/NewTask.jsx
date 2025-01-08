import { useState } from "react"

export default function NewTask({onAdd}){

    const [enteredTask, setEnteredTasl] = useState()

    function handleChange(e){
        setEnteredTasl(e.target.value);
    }

    function handleClick(){
        onAdd(enteredTask)
        setEnteredTasl('');
        
    }
    return(
        <div className="flex item-center gap-4">
            <input 
            type="text" 
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            onChange={handleChange}
            value={enteredTask}/>

            <button className="text-stone-700 hover:text-stone-900" onClick={handleClick}>
                Add Task
            </button>
        </div>
    )
}