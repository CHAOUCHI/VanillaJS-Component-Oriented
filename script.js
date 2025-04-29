/**
 * Retourne un Element à append dans un container.
 * @param {{title:string}} task 
 * @returns {Node}TaskElement
 */
function TaskComponent(task) {
    const templateTask = document.querySelector(".task-template");
    
    const newTaskTag = templateTask.content.cloneNode(true);
    newTaskTag.querySelector(".title").textContent = task.title;
    newTaskTag.querySelector(".delete").addEventListener("click",()=>{
        /**Réagir au clic sur la poubelle */
    })
    return newTaskTag;
}

/**
 * Un objet contenant toutes les fonctions utiles à l'affichage de mon front
 */
const UIService = {
    displayAllTasks(){
        const taskContainer = document.querySelector(".tasks-container");
    
        TaskService.getAllTasks().forEach(task => {
            taskContainer.appendChild(TaskComponent(task));
        });
    }
}

/**
 * Un objet contenant toutes les fonctions utile à l'accès au localStorage
 */
const TaskService = {
    getAllTasks(){
        const JSONTasks = localStorage.getItem("tasks") ?? "[]";
        // if(JSONTasks == null){
        //     localStorage.setItem("tasks","[]");
        //     return [];
        // }else{
        // }
        return JSON.parse(JSONTasks);
    }
}

/**
 * Point d'entréee du programme
 */
function main(){
    UIService.displayAllTasks();
   

}
main();
