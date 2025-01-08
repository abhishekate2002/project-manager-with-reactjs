import NewTask from "./NewTask";

export default function Task({task, onAdd,onDelete}){
    return(
        <section>
            <h2 className="text-xl font-bold text-stone-700 mb-4">Task</h2>
            <NewTask onAdd={onAdd}/>
            {task.length === 0 && <p className="text-stone-800 my-4">
                This project does not have any task yet
            </p>}

            {task.length > 0 && 
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {task.map((task) =>{
                    <li key={task.id} className="flex justify-between my-4">
                        <span>{task.text}</span>
                        <button className="text-stone-700 hover:text-red-500">Clear</button>
                    </li>
                })}
            </ul>}
        </section>
    )
}