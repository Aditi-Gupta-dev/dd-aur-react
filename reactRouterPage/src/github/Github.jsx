import React,{useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'



const Github = () => {

  const data=useLoaderData();
    // const [data,setdata]=useState([]);
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Aditi-Gupta-dev')
    //   .then(res=>res.json())
    //   .then(data=>
    //     {
    //         console.log(data);
    //         setdata(data);
    //     })
        
    // }, [])
    
  return (
    <>
    
      <div className="text-center m-4 text-gray-200 bg-gray-500 text-3xl p-2">
      <img className="h-[200px] w-[200px] rounded-sm shadow-lg mx-[auto] my-2" src={data.avatar_url} alt="" />
      <h2 className='text-center text-lg lg:text-xl md:text-xl'>{data.name}</h2>
      <div className="flex flex-wrap gap-4 justify-center text-sm lg:text-lg md:text-lg"><h3>Github followers :{data.followers}</h3>
      <h3>Public repositories :{data.public_repos}</h3>

      </div>
      <p className='text-sm p-2 m-2'>{data.bio}</p>
      </div>
    </>
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/Aditi-Gupta-dev');
    return response.json();
}
