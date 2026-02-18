import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return (
    <>
      <div
        id="TaskList"
        className="h-[55%] flex overflow-x-auto items-center justify-start w-full   mt-10 py-5 gap-5 flex-nowrap"
      >
        {data.tasks.map((e, idx)=>{
          if(e.active){
            return<AcceptTask key={idx} data={e}/>
          }
          if(e.newTask){
            return<NewTask key={idx} data={e}/>
          }
          if(e.Completed){
            return<CompleteTask key={idx} data={e}/>
          }
          if(e.failed){
            return<FailedTask key={idx} data={e}/>
          }
        })}
        
      </div>
    </>
  );
};

export default TaskList;
