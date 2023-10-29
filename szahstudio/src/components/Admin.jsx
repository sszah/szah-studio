import React, { useState } from 'react'
import '../styles/admin.css';


function Admin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (username === 'admin' || password === 'admin'){
            alert("Berhasil Login")
            window.location = "/crud"
        }
        else{
            alert("username atau password salah")
            window.location = '/admin'
        }
    }
  return (
    <div>
    <div className="login_container">
        <form onSubmit={handleSubmit}>
            <div className="form_item">
                <label htmlFor="username" className='form_content'>Username:</label>
                <input type="text" className='form_content' placeholder='Username' name='username' value={username} onChange={e=>{setUsername(e.target.value)}} autoComplete='off'/>
            </div>
            <div className="form_item">
                <label htmlFor="password" className='form_content'>Password:</label>
                <input type="password" className='form_content' placeholder='Password' onChange={e =>{setPassword(e.target.value)}} name='password' value={password} />
            </div>
            <button type='submit' className='btn btn-lg mt-5'>Login</button>
        </form>
    </div>
  </div>
  )
}

export default Admin