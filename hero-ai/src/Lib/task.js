
import  tasks  from "../Data/task.json"
 export const getTasks =async()=>{

return tasks
}

export const postTask =async(newTask)=>{
newTask.id =tasks.length+1;
  tasks.push(newTask);

  // tasks.unshift(newTask);
  return {ok:true,message:" Congratulations! The task has been added successfully"};

 
}