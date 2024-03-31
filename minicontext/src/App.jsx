import { useState } from 'react'
import UserContextProvider from './context/UserContextprovider'


function App() {
  

  return (
    <>
      <UserContextProvider>
      {/* jo bhi iske bich me likha hai usko sare states ka access mil jaega */}

      <h1>hi</h1>

      </UserContextProvider>
    </>
  )
}

export default App
