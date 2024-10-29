import { useState } from 'react'
import UserProfile from './components/UserProfile'
import './App.css'
import { UserProvider } from './components/UserContext'
import UpdateUser from './components/UpdateUser'

function App() {
  

  return (
    <>
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
    </>
  )
}

export default App
