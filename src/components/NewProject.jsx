import Input from "./Input.jsx"
import Button from "./Button.jsx"

import {useRef} from "react"
import Modal from "./Modal.jsx";
export default function NewProject({onAdd, onCancel}){
    const modal = useRef()
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();


    function handleSave(){
        const entertitle = title.current.value;
        const enterDescription = description.current.value;
        const enterDueDate = dueDate.current.value;
        //validating data



        if(
        entertitle.trim() === "" || 
        enterDescription.trim() === ""|| 
        enterDueDate.trim() === ""){

            //SHOW THE ERROR MODAL  
            modal.current.open();
            return;

        }

        onAdd({
            title : entertitle,
            description: enterDescription,
            dueDate: enterDueDate
        })
    }


    return(
        <>
    <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">Oops... Looks like you forgot to enter the value</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field</p>
    </Modal>
    <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-2 my-4">
        <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
            </li>
        <li>
            <Button onClick={handleSave}>Save</Button>
            </li>
        </menu>

        <div>
            <Input ref={title} type="text" label="Title"/>
            <Input ref={description}  label="Description" textarea/>
            <Input ref={dueDate} type="date" label="Due Date"/>
        </div>
    </div>
    
    </>
    )
}