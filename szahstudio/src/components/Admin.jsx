import React, { useState } from 'react'
import '../styles/admin.css';


function Admin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div>
    <div className="login_container">
        <form>
            <div className="form_item">
                <label htmlFor="username" className='form_content'>Username:</label>
                <input type="text" className='form_content' placeholder='Username' name='username' autoComplete='off'/>
            </div>
            <div className="form_item">
                <label htmlFor="password" className='form_content'>Password:</label>
                <input type="password" className='form_content' placeholder='Password' name='password' />
            </div>
            <button type='submit' className='btn btn-lg mt-5'>Login</button>
        </form>
    </div>
  </div>
  )
}

export default Admin