import React from 'react'
import { useState } from 'react'

import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = () => {

const [userData, setUserData] = useContext(AuthContext);
  
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

const [newTask, setNewTask] = useState([]);

  const submitHandler = (e) =>{
    e.preventDefault();
    setNewTask({taskTitle, description,taskDate,category,active:false,newTask:true,failed:false,completed:false})
     
    
    const data = userData;

    data.forEach(function(e){
       if(assignTo == e.firstName){
         e.tasks.push(newTask)
          e.taskCount.newTask = e.taskCount.newTask + 1;
         
         console.log(e.tasks);
        }
    })
    // setUserData(data)

    setTaskTitle('');
    setCategory('');
    setAssignTo('');
    setTaskDate('');
    setDescription('');
    
    }

  return (
    <>
      <div  className="p-5 bg-[#1c1c1c] mt-5 rounded ">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex flex-wrap bg-[#1c1c1c]  w-full items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input 
              value={taskTitle}
              onChange={(e)=>setTaskTitle(e.target.value)}

              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4" type="text" placeholder="Make a UI design" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input 
              value={taskDate}
              onChange={(e)=>setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4" type="date" placeholder="dd/mm/yyyy" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input 
              value={assignTo}
              onChange={(e)=>setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4" type="text" placeholder="Employee name" />
            </div>
            <div>
              <h3 className="text-sm text-white text-gray-300 mb-0.5">Category</h3>
              <input 
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4" type="text" placeholder="Design Development etc..." />
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea 
             value={description }
          onChange={(e)=>setDescription(e.target.value)}
            className="w-full text-white h-44 text-em py-2 px-4 rounded outline-none bg-tranparent border-[1px] border-gray-400" name="" id="" cols={30} rows={10}></textarea>
          <button 
         
          className="bg-emerald-500 text-white py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default CreateTask

