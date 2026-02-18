
const CompleteTask = ( ) => {

 const [complete, setComplete] = useState();

  return (
    <>
       <div  className="flex-shrink-0 h-full w-[306px] p-5 bg-green-400 rounded-xl">
          <div className="flex justify-between items-center">
            <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
            <h4 className="text-sm">14 sep 2025</h4>
          </div>
          <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            aliquid velit, laborum repellat hic nulla!
          </p>
          <div className="mt-2">
            <button className='w-full'>Complete</button>
          </div>
        </div>
    </>
  )
}

export default CompleteTask
