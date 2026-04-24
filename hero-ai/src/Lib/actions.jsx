"use server"
import { revalidatePath } from "next/cache";
import { postTask } from "./task";
import { redirect } from "next/navigation";

export const createTask = async (formData) => {
  "use server";
  // const name =formData.get("name");
  // const description =formData.get("description");
  // const priority =formData.get("priority");
  // const status =formData.get("status");
  // const assignedTo =formData.get("assignedTo");
  // const dueDate =formData.get("dueDate");

  // const newTask={
  //  title,
  //  description,
  //  priority,
  //  status,
  //  assignedTo,
  //  dueDate

  // }

  // const formData = new FormData(formElement);

  const newTask = Object.fromEntries(formData.entries());

  // console.log(obj);

  console.log("Adding a task with name:", newTask);

  const res = await postTask(newTask);
  if(res.ok){
    revalidatePath("/Task")
  }
  return res;
};

export const newTaskAction = async (formData)=>{
'use server';
console.log("formdata",formData);
const newTask=Object.fromEntries(formData.entries());

if(!newTask.title){
  return {success:false,error:"Task title is required"}
}
if(newTask.title.trim().length < 5){
  return {success:false,error:"Task title must be at least 5 characters long"}
}
if(!newTask.description){
  return {success:false,error:"Task description is required"}
}

console.log("Adding a task with name:",newTask);
const res = await postTask(newTask);
if(res.ok){
  revalidatePath("/Task");
  redirect ("/Task")
}
return res;

}
