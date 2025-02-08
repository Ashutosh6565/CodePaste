// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { removeFromPastes } from '../redux/pasteSlice';
// import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';

// const Paste = () => {

//   const pastes = useSelector((state) => state.paste.pastes);
//   const [searchTerm, setSearchTerm] = useState('');
//   const dispatch = useDispatch();

//   const filteredData = pastes.filter(
//     (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   function handleDelete(pasteId){
//     dispatch(removeFromPastes(pasteId)); 
//   }
//   return (
//     <div>
//       <input 
//       className='p-2 rounded-2xl min-w-[600px] mt-5'
//       type="search"
//       placeholder='search here'
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className='flex flex-col gap-5'>
//     {
//       filteredData.length > 0 && 
//       filteredData.map(
//         (paste) => {
//           return (
//             <div className='border' key ={ paste?._id}>
//               <div>
//                 {paste.title}
//               </div>
//               <div>
//                 {paste.content}
//               </div>
//               <div className='flex flex-row place-content-evenly gap-4'>
//                 <button  >
//                   <Link to={`/?pasteId=${paste?._id}`}>Edit</Link>
//                 </button>
//                 <button>
//                  <Link to={`/pastes/${paste?._id}`}>View</Link>
//                 </button>
                  
                
//                 <button onClick={() =>handleDelete(paste?._id)} >
//                   Delete
//                 </button>
//                 <button onClick={() => {
//                   navigator.clipboard.writeText(paste?.content)
//                   toast.success("copied to clipboard")
//                 }}>
//                   copy
//                 </button>
//                 <button >
//                   share
//                 </button>
//               </div>
//               <div>
//                 {paste.createdAt}
//               </div>
//               </div>
//           )
//         }
//       )
//     }
//       </div>
//     </div>
//   )
// }

// export default Paste



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gray-900 text-white p-5">
  <input
    className="p-3 rounded-lg w-full max-w-lg bg-gray-800 text-white transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
    type="search"
    placeholder="Search here"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <div className="mt-5 w-full max-w-4xl flex flex-col gap-5">
    {filteredData.length > 0 &&
      filteredData.map((paste) => (
        <div
          key={paste?._id}
          className="border p-4 rounded-lg bg-gray-800 transition-all duration-300 ease-in-out hover:scale-105"
        >
          <div className="text-lg font-bold">{paste.title}</div>
          <div className="text-sm text-gray-300">{paste.content}</div>
          <div className="flex gap-[200px] mt-3">
            <Link to={`/?pasteId=${paste?._id}`} className="text-blue-400 hover:text-blue-600">
              Edit
            </Link>
            <Link to={`/pastes/${paste?._id}`} className="text-green-400 hover:text-green-600">
              View
            </Link>
            <button onClick={() => handleDelete(paste?._id)} className="text-red-400 hover:text-red-600">
              Delete
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(paste?.content);
                toast.success("Copied to clipboard");
              }}
              className="text-yellow-400 hover:text-yellow-600"
            >
              Copy
            </button>
          </div>
        </div>
      ))}
  </div>
</div>

  );
};

export default Paste;
