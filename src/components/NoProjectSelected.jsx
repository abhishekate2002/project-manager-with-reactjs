import projectsImage from "../assets/no-projects.png"
import Button from "./Button"
export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className="mt-2 text-center w-2/3">
        <img src={projectsImage } alt="empty-task-list" className="w-16 h-16 object-contain mx-auto"/>
        <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">No Project selected</h2>
        <p className="text-stone-700 mb-4">Select a project or get started with new one</p>
        <p className="text-stone-700 mt-8">
            <Button onClick={onStartAddProject}>Create new project</Button>
        </p>
        </div>
    )
}