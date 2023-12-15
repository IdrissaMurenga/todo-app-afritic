"use client"
import { useState } from "react"
import TodoHeader from "./TodoHeader"
import TodoList from "./TodoList"
import TodoAddForm from "./TodoAddForm";
import TodoEditForm from "./TodoEditForm";


const Todo = () => {
    const [openModal,setOpenModal] = useState(false);
    const [todoTask,setTodoTask] = useState("");
    const [taskArray,setTaskArray] = useState([]);
    const [newModal,setNewModal] = useState(false)
    const [editTodo,setEditTodo] = useState("")

    // FUNCTION ADDING NEW TODO TASK
    const addTask = () => {
        if(todoTask === "") {
            return;
        }
        const taskObject = {
            id : Date.now(),
            text : todoTask,
            complete : false
        }
        setTaskArray([...taskArray,taskObject])
        setTodoTask("")
    }
    const addSubmit = (e) => {
        e.preventDefault()
        addTask()
    }

    // EDIT TODO TASK
    const editClick = (todoTask) => {
        setNewModal(true)
        setEditTodo({...todoTask})
    }
    const editOnChange = (e) => {
        setEditTodo({...editTodo,text:e.target.value})
    }
    const editTask = (id,editTodo) => {
        const editedTask = taskArray.map((task) => task.id === id ? editTodo: task )
        setTaskArray(editedTask)
    }
    const handleEdit = (e) => {
        e.preventDefault()
        editTask(editTodo.id,editTodo)
    }
    // DELETE TODO TASK
    const deleteTask = (id) => {
        const taskToDelete = taskArray.filter((task)=>task.id !== id)
        setTaskArray(taskToDelete)
    }

    const checkComplete = (id) => {
        const checkTask = taskArray.map((task)=>{
            if(task.id === id){
                return({...task,complete:true})
            } return task
        })
        setTaskArray(checkTask)
    }
  return (
    <main>
        <TodoHeader setOpenModal={setOpenModal} />
        <TodoEditForm
            newModal = {newModal} 
            setNewModal = {setNewModal}
            editTodo = {editTodo}
            editOnChange = {editOnChange}
            handleEdit = {handleEdit}
        />            
        <TodoAddForm 
            openModal = {openModal} 
            setOpenModal = {setOpenModal}
            todoTask = {todoTask}
            setTodoTask = {setTodoTask}
            addSubmit = {addSubmit}
        />
        <TodoList 
            taskArray = {taskArray}
            editClick = {editClick}
            deleteTask = {deleteTask}
            checkComplete = {checkComplete}
        />
    </main>
  )
}

export default Todo
