import React, { useState } from "react";

const AcceptTask = ({ data }) => {
  const [complete, setComplete] = useState('');
   
  const CompleteHamdler = (()=>{
     
  })

  return (
    <>
      <div className="flex-shrink-0 h-full w-[306px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2">{data.description}</p>
        <div className="flex gap-3 mt-5 justify-between">
          <button
           onClick={CompleteHamdler}
            className="rounded-xl bg-green-700 py-1 px-2 text-sm"
          >
            Mark as completed
          </button>
          <button className="bg-red-700 rounded-xl py-1 px-2 text-sm">
            Mark as failed
          </button>
        </div>
      </div>
    </>
  );
};

export default AcceptTask;
