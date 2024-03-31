import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  

  return (
    <>
      <UserContextProvider>
      {/* jo bhi iske bich me likha hai usko sare states ka access mil jaega */}
      

      <h1>hi my name is aditi</h1>
      <Login/>
      <Profile/>

      </UserContextProvider>
    </>
  )
}

export default App
