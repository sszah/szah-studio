import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/crud.css'


function Crud() {

    const [deskripsi, setDeskripsi] = useState('sadasdada')
    const [foto, setFoto] = useState('')

    

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <div>
        <div className="crud_container">
        <form onSubmit={handleSubmit}>
            <div className="form_item">
                <label htmlFor="deskripsi" className='form_content'>deskripsi:</label>
                <input type="text" className='form_content' placeholder='deskripsi' name='deskripsi'  autoComplete='off'/>
            </div>
            <div className="form_item">
                <label htmlFor="foto" className='form_content'>foto:</label>
                <input type="file" className='form_content' placeholder='foto'  name='foto'  />
            </div>
            <button type='submit' className='btn btn-lg mt-5'>Submit</button>
        </form>
        </div>
        <table className='table_container'>
            <tr>
                <th>Foto</th>
                <th>Deskripsi</th>
                <th>Delete/Edit</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>{deskripsi}</td>
                <td>
                    <a href="/edit" className='btn'>Edit</a>
                    <a href="/edit" className='btn'>Delete</a>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Crud