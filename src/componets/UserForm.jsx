import React from 'react'
import { useState } from 'react'
import './UserForm.css'

function UserForm({showUser}) {

  // const [username, setUsername] = useState('')
  const [value, setValue] = useState('')

  const handleForm = (e) => {
    e.preventDefault()

    if(value){
      showUser(value);
      setValue('')
    }
    // setUsername(value)
    // console.log(e);
  }
  // console.log(value);

  return (
    <div>
        <form action="#" className='userForm' onSubmit={handleForm}>
            <input type="text" value={value} onChange={e=>{setValue(e.target.value)}} placeholder='Enter a valid username'/>
            <button type='submit'>Find</button>
        </form>
    </div>
  )
}

export default UserForm