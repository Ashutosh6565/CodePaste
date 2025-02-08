// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
// import { addToPastes, UpdateToPastes } from '../redux/pasteSlice';
// const Home = () => {
// const [title ,setTitle] = useState('');
// const [searchParams, setSearchParams]  = useSearchParams();
// const [value ,setvalue] = useState('');
// const pasteId = searchParams.get("pasteId");
// const dispatch = useDispatch();
// const allPastes = useSelector((state) => state.paste.pastes)
// useEffect(() => {
//   if(pasteId){
//     const paste = allPastes.find((p) => p._id === pasteId);
//     setTitle(paste.title);
//     setvalue(paste.content);
//   }
  
// },[pasteId])
// function createPaste(){
//     const paste = {
//       title: title,
//       content: value,
//       _id: pasteId || Date.now().toString(36),
//       createdAt: new Date().toISOString(),
//     }
   
//     if(pasteId) {
//       //update
//       dispatch(UpdateToPastes(paste))
//     }else{
//       dispatch(addToPastes(paste))
//     }
//     setTitle('');
//     setvalue('');
//     setSearchParams({});
// }
//   return (
//     <div>
//     <div className='flex flex-row gap-7 place-content-between'>
//       <input
//       className='p-1 rounded-2xl bg-black text-white mt-2 w-[66%] pl-4' 
//       placeholder='enter title here'
//       value={title}
//       onChange={(e) => setTitle(e.target.value)}
//       />
//       <button 
//         onClick={createPaste}
//       className='p-2 rounded-2xl bg-black  mt-2'>
//         {
//         pasteId ? "Update My Paste " : "Create My Paste"
//       }
//       </button>
//       </div>
//       <div className='mt-8'>
//         <textarea  className='rounded-2xl mt-4 min-w-[500px] p-4'
//         placeholder='enter the Content here'
//         value={value}
//         onChange={(e) => setvalue(e.target.value)}
//         rows={20}
//         />
//       </div>
//     </div>

//   )
// }
// export default Home





import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, UpdateToPastes } from '../redux/pasteSlice';
const Home = () => {
const [title ,setTitle] = useState('');
const [searchParams, setSearchParams]  = useSearchParams();
const [value ,setvalue] = useState('');
const pasteId = searchParams.get("pasteId");
const dispatch = useDispatch();
const allPastes = useSelector((state) => state.paste.pastes)
useEffect(() => {
  if(pasteId){
    const paste = allPastes.find((p) => p._id === pasteId);
    setTitle(paste.title);
    setvalue(paste.content);
  }
  
},[pasteId])
function createPaste(){
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }
   
    if(pasteId) {
      //update
      dispatch(UpdateToPastes(paste))
    }else{
      dispatch(addToPastes(paste))
    }
    setTitle('');
    setvalue('');
    setSearchParams({});
}
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white p-5">
    <div className="flex flex-col md:flex-row gap-7 w-full max-w-4xl">
      <input
        className="p-3 rounded-lg bg-gray-800 text-white w-full md:w-2/3 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={createPaste}
        className="p-3 rounded-lg text-amber-950  bg-blue-600 hover:bg-blue-700 hover:text-amber-50 transition-all duration-300 ease-in-out"
      >
        {pasteId ? "Update My Paste" : "Create My Paste"}
      </button>
    </div>
    <div className="mt-8 w-full max-w-4xl">
      <textarea
        className="rounded-lg w-full min-h-[300px] p-4 bg-gray-800 text-white resize-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
        placeholder="Enter the content here"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        rows={10}
      />
    </div>
  </div>
  
  )
}
export default Home





