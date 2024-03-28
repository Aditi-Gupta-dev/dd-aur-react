import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  // let img1="https://picsum.photos/seed/picsum/200/300";
  // let img2="https://picsum.photos/id/257/200/300";
  const allnames=["aditi","sneha","astha"]
  const iarr=["https://picsum.photos/seed/picsum/200/300","https://picsum.photos/id/257/200/300"]

  let [counter,setCounter]=useState(0);

  //usestate me ek state ot ek setitem function dete haib . function call back accept krta hai .. prevcounter prev state ko fetcg krne ke lia hai
  const addone=()=>{
    setCounter((prevCounter)=>prevCounter+1);
   setCounter((prevCounter)=>prevCounter+1);
   setCounter((prevCounter)=>prevCounter+1);
   setCounter((prevCounter)=>prevCounter+1);
  }
  const removeone=()=>{
    setCounter(counter-1);
  }

  
  return (

    <>
       <h1 className="text-2xl font-bold text-black bg-white shadow-inner p-3 rounded-xl mb-2">
      Hello world!
    </h1>
    <Card   image={iarr[0]}/>
    <Card name="sneha" image={iarr[1]} />
    <Card name={allnames[2]} image={iarr[1]} />

{/* 
    //onClick bas function chahta hai uska koe return value nahi hona chahia isilia onClick me function or call back hi pass krte hai */}
    <h1>the value: {counter}</h1>
    <button onClick={addone}>Add</button>
    <button onClick={removeone}>Remove</button>
    </>
  )
}

export default App
