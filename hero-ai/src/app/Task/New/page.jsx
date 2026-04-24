"use client";
import { newTaskAction } from "@/Lib/actions";
import {Button, FieldError, Form, Input, Label, ListBox,  Select, TextField} from "@heroui/react";
const NewTask = () => {
    return (
        <div className="p-8">
            <h2 className="text-5xl text-red-500 text-center">New Task</h2>
            <div className="w-1/2 mx-auto">
                 <Form action={newTaskAction} className="flex flex-col gap-4">
                                  <TextField isRequired 
                                  minLength={5}
                                 validate={(value)=>

                                 {
                                  if(value.length < 5){
                                    return "Task title must be at least 5 characters long"
                                  }
                                 }}

                                 className="w-full" name="title">
                                    <Label>Title</Label>
                                    <Input placeholder="Enter your task" />

                                    <FieldError>
                                        
                                    </FieldError>
                                  </TextField>
                
                                  <TextField className="w-full" name="description">
                                    <Label>Task Description</Label>
                                    <Input placeholder="Describe your task here" />
                                  </TextField>
                
                                  <Select
                                    name="priority"
                                    className="w-[256px]"
                                    placeholder="Select one">
                                    <Label>Priority</Label>
                                    <Select.Trigger>
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        <ListBox.Item id="low" textValue="Low">
                                          Low
                                          <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="medium" textValue="Medium">
                                          Medium
                                          <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="high" textValue="High">
                                          High
                                          <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                      </ListBox>
                                    </Select.Popover>
                                  </Select>
                
                                  <Select
                                    name="status"
                                    className="w-[256px]"
                                    placeholder="Select one">
                                    <Label>Status</Label>
                                    <Select.Trigger>
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        <ListBox.Item id="pending" textValue="Pending">
                                          Pending
                                          <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="inProgress" textValue="In Progress">
                                          In Progress
                                          <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="completed" textValue="Completed">
                                          Completed
                                          <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                      </ListBox>
                                    </Select.Popover>
                                  </Select>
                
                                  <TextField className="w-full" name="assignedTo">
                                    <Label>Assigned to</Label>
                                    <Input placeholder="Task assigned to" />
                                  </TextField>
                
                                  
                                  <div className="flex justify-between">
                                      <Button slot="close" variant="secondary">
                                      Cancel
                                    </Button>
                                    <Button slot="close" type="submit">
                                      Submit
                                    </Button>
                                  
                                  </div>
                                </Form>
            </div>
        </div>
    );
};

export default NewTask;