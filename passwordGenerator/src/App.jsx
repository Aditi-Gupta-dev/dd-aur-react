import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
// useRef
// useRef is a React Hook that lets you reference a value that’s not needed for rendering....
// const ref = useRef(initialValue)

  const [length,setlength]=useState(8);
  const [allowNum,setallowNum]=useState(false);
  const [allowChar,setallowChar]=useState(false);
  const [password,setpassword]=useState("");

  const passwordRef=useRef(null);

  const passwordGen=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(allowNum) str+="0123456789";
    if(allowChar) str+="!@#$%^&*(){}[]";
    

    for (let i = 1; i <=length; i++){
   let index= Math.floor(Math.random()*str.length+1);
   pass+=str.charAt(index);
     
  }


setpassword(pass);

  }
  ,[length,allowNum,allowChar,setpassword])
  // set password nahi bhi dogi to chalega memoization ka concept hai to optimise krta hai code or kuch nahi dena acha hai nahi bhi doge to chalega agr bas password doge to infinite loop me fas jaoge

  // useEffect is a React Hook that lets you synchronize a component with an external system.
  useEffect(()=>{
    passwordGen()
  },[length,allowNum,allowChar,passwordGen])

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,4); //isse pehle ke 4 hi select honge
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <h1 className='mx-[15%] w-full'>Password generator</h1>
      <div className='w-full max-w-md m-[15%] rounded-lg px-4 py-2 my-8 text-orange-400 bg-gray-700'>
      <div className='flex shadow-sm rounded-lg overflow-hidden mb-4'>
      <input
        type='text' value={password} className='outline-none w-full
        py-1 px-3'
         placeholder='Password'
          readOnly
          ref={passwordRef} />
        <button className='outline-none bg-blue-600 hover:text-orange-300 text-white px-3 py-1 shrink-0 m-2' onClick={copyPassword}>Copy</button>
      </div>

        <div className='flex text-sm gap-x-2'>

        <div className='flex items-centergap-x-1'>

          <input type="range" min={6} max={25} value={length} className=' cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}/>
          <label>Length: {length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox"  defaultChecked={allowNum} className=' cursor-pointer' onChange={()=>{setallowNum((prev)=>!prev)}}/>
          <label>Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
        <input type="checkbox"  defaultChecked={allowNum} className=' cursor-pointer' onChange={()=>{setallowChar((prev)=>!prev)}}/>
          <label>Character</label>
        </div>

        </div>
      </div> 


    
    </>
  )
}

export default App
