import React from 'react'
import { useState } from 'react'
import UserForm from './UserForm'
import UserInfo from './UserInfo'
import './Wrapper.css'

 function Wrapper() {
  const [username, setUsername] = useState('')

  const  showUser = (user) => {
    // console.log(user);
     setUsername(user)
  }
  // console.log(username);
  return (
    <div className='container'>
        <h1>Github User finder</h1>
        <UserForm showUser={showUser}/>
        <UserInfo gitUser={username}/>
    </div>
  )
}

export default Wrapper
