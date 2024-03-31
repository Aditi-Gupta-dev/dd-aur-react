import React,{useContext,useState} from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const {setuser}=useContext(UserContext);

    const handleSubmit=()=>{
        e.preventDefault();
        setuser({username,password})
    }
  return (

    <>
    <div>
      <h2>login</h2>
      <input type="text" 
     value={username}
     onChange={(e)=>setUsername(e.target.value)} placeholder='username'/>
      <input type="text" 
     value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
      <button onClick={handleSubmit}>Submit</button>

    </div>
    </>
  )
}

export default Login
