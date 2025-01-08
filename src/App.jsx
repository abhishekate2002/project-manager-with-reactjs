
import ProjectsSideBar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject.jsx";


function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    task:[],
  })

  function handleAddTask(text){
    setProjectState(prevState =>{
      const taskId = Math.random();
      const newTask={
        text:text,
        projectid: prevState.selectedProjectId,
        id: taskId,
      }
      return{
        ...prevState,
       
        task:[newTask,...prevState ]
      }
    })

  }
  function handleDeleteTask(){}
  function handleCancelProject(){
    setProjectState((prevState) =>{
      return{
        ...prevState,
        selectedProjectId: undefined
    }
    }

    )
  }

  function handleSelectProject(id){
    setProjectState(prevState => {
      return{

        ...prevState,
        selectedProjectId: id, 
        
      }
    }
    )
  }

  function handleStartingAddProject(){
    setProjectState(prevState => {
      return{

        ...prevState,
        selectedProjectId: null, 
        
      }
    }
    )
  }

  function handleDeleteProject(){
    setProjectState((prevState) =>{
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: projectState.projects.filter(
          (project) =>project.id !== prevState.selectedProjectId),
    }
    }

    )
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)


  let content  = <SelectedProject 
  project={selectedProject} 
  onDelete={handleDeleteProject} 
  onAddTask={handleAddTask }
  onDeleteTask={handleDeleteTask}
  tasks={projectState.task}
  />
  
  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject}/>
  }
  else if(projectState.selectedProjectId === undefined){
    content =<NoProjectSelected onStartAddProject ={handleStartingAddProject}/>

  }
  else{

  }

  function handleAddProject(projectData){
    setProjectState(prevState =>{
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectState)
  return (
    <main className="h-screen my-8 flex gap-8">
        <ProjectsSideBar onSelectProject={handleSelectProject} onStartAddProject={handleStartingAddProject} projects={projectState.projects}/>
        {content}
    </main>
   
  );
}

export default App;
