import React from 'react'
import TaskListNumber from '../header/TaskListNumber';
import TaskList from '../TaskList/TaskList';
import Header from '../header/Header';

  
 

const EmployeeDashboard = (props) => {

  return (
    <>
    <div className='p-10 bg-[#1c1c1c] h-screen'>
    
        <Header  changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>

    </div>
    </>
  )
}

export default EmployeeDashboard;
