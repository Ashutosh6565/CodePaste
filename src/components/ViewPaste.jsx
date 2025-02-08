// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams, useSearchParams } from 'react-router-dom';
// import { addToPastes, UpdateToPastes } from '../redux/pasteSlice';
// const ViewPaste = () => {
//   const {id} = useParams();
//   const allPastes = useSelector((state) => state.paste.pastes);
//   const paste = allPastes.filter((p) => p._id === id)[0];

//   return (
    
//       <div>
//       <div className='flex flex-row gap-7 place-content-between'>
//         <input
//         className='p-1 rounded-2xl bg-black text-white mt-2 w-[66%] pl-4' 
//         placeholder='enter title here'
//         value={paste.title}
//         disabled
//         onChange={(e) => setTitle(e.target.value)}
//         />
//         {/* <button 
//           onClick={createPaste}
//         className='p-2 rounded-2xl bg-black  mt-2'>
//           {
//           pasteId ? "Update My Paste " : "Create My Paste"
//         }
//         </button> */}
//         </div>
//         <div className='mt-8'>
//           <textarea  className='rounded-2xl mt-4 min-w-[500px] p-4'
//           placeholder='enter the Content here'
//           value={paste.content}
//           disabled
//           onChange={(e) => setvalue(e.target.value)}
//           rows={20}
//           />
//         </div>
//       </div>
//   )
// }

// export default ViewPaste
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white p-5">
  <div className="w-full max-w-4xl">
    <input
      className="p-3 rounded-lg bg-gray-800 text-white w-full transition-all duration-300 ease-in-out"
      value={paste?.title}
      disabled
    />
    <textarea
      className="rounded-lg w-full min-h-[300px] p-4 bg-gray-800 text-white resize-none transition-all duration-300 ease-in-out"
      value={paste?.content}
      disabled
    />
  </div>
</div>

  );
};

export default ViewPaste;
