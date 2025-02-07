import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, UpdateToPastes } from '../redux/pasteSlice';
const Home = () => {
const [title ,setTitle] = useState('');
const [searchParams, setSearchParams]  = useSearchParams();
const [value ,setvalue] = useState('');
const pasteId = searchParams.get("pasteId");
const dispatch = useDispatch();

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
    <div>
    <div className='flex flex-row gap-7 place-content-between'>
      <input
      className='p-1 rounded-2xl bg-black text-white mt-2 w-[66%] pl-4' 
      placeholder='enter title here'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <button 
        onClick={createPaste}
      className='p-2 rounded-2xl bg-black  mt-2'>
        {
        pasteId ? "Update My Paste " : "Create My Paste"
      }
      </button>
      </div>
      <div className='mt-8'>
        <textarea  className='rounded-2xl mt-4 min-w-[500px] p-4'
        placeholder='enter the Content here'
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        rows={20}
        />
      </div>
    </div>

  )
}

export default Home
