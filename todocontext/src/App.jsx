import { useEffect, useState } from 'react'
import { TodoProvider } from './context';
import { TodoForm, TodoItem } from './components';


function App() {

  const [todos,setTodos]=useState([]); 
  
  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>{prevTodo.id===id?todo : prevTodo}))

  }

    //array banana hai jisme sari values hai bas ek nahi hai ...use filter
    const deleteTodo=(id)=>{
      setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  
    }

  const toggleComplete=(id)=>{
    console.log(id);
    setTodos((prev)=>
    prev.map((prevTodo)=>
    prevTodo.id===id ? {...prevTodo, completed:!prevTodo.completed} : prevTodo))
    //sari values lelo or jo change krna hai usko over write kr do

  }




  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  //constext se todos le or change krne me settodos me aa jae to aise me dependancy me todo de skte hai lekin isko or optimise krne ke lia ek or useEffect banate hai
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    {/* cpy link: https://github.com/hiteshchoudhary/chai-aur-react/blob/main/todoContextapiNotes.md */}

    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*context se jo todos laae the usme loop lagana hai,loop ke ander todo item ko prop bhi pass krenge */}
                        {/* //to create uniques dic we use keys */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                          <TodoItem todo={todo}/>

                          </div>
                        ))}
                    </div>
                </div>
            </div>
    
    </TodoProvider>
  )
}

export default App
