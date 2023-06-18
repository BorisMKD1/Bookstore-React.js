import { Email } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

  let navigate=useNavigate()

  const {id}=useParams()

  const [user, setUser]=useState({   /* objekt */
    id: 0,
    name:"",
    lastName:"",
    email:"",
  })
  
  // const{name,lastName,email}=user

  const onInputChange=(e)=>{
    setUser({...user, [e.target.name]:e.target.value}); /* ke dodava novi objekti */

  }
  
  useEffect(()=>{
    loadUser()
  }, [])


  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/editUser`, user)
    navigate("/")
  }

  const loadUser =async()=>{
    const result=await axios.get(`http://localhost:8080/user/byId/${id}`)
    setUser(result.data)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border roundedn p-4 mt-2 shadow'> {/* ova e za edit user pravoagolna linija */}
        <h2 className='text-center m-4'>Edit User</h2> {/* ova e za vo pravoagolnikot da pisuva register */}
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
            </label> 
            <input type={"text"}
            className="form-control"
            placeholder='Enter your name'
            name="name"
            value={user.name}
            onChange={(e)=>onInputChange(e)}    
            /> 
        </div>
        <div className='mb-3'>
          <label htmlFor='lastName' className='form-label'>
            Last Name
            </label> 
            <input type={"text"}
            className="form-control"
            placeholder='Enter your last name'
            name="lastName"
           value={user.lastName}   
            onChange={(e)=>onInputChange(e)}      
            />   
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            E-mail
            </label> 
            <input 
            type={"text"}
            className="form-control"
            placeholder='Enter your e-mail address'
            name="email"
            value={user.email}  
           onChange={(e)=>onInputChange(e)}   
           />        
        </div>
        <button type='submit' className='btn btn-outline-primary'> 
        Submit
        </button>
        <Link className='btn btn-outline-danger mx-2' to="/"> 
        Cancel
        </Link>
        </form>
      </div>
      </div>
    </div>
  )
}
