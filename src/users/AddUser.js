
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

export default function AddUser() {

  let navigate=useNavigate()

  const [user, setUser]=useState({   /* objekt */
    name:"",
    lastName:"",
    email:"",
  })
  
  const{name,lastName,email}=user

  const onInputChange=(e)=>{

    setUser({...user, [e.target.name]:e.target.value}); /* ke dodava novi objekti */

  }

  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user/addUser", user)
    navigate("/users")
  }


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border roundedn p-4 mt-2 shadow'> {/* ova e za add user pravoagolna linija */}
        <h2 className='text-center m-4'>Register User</h2> {/* ova e za vo pravoagolnikot da pisuva register */}

        <form onSubmit={(e)=>onSubmit(e)}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
            </label> 
            <input type={"text"}
            className="form-control"
            placeholder='Enter your name'
            name="name"
            value={name}
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
           value={lastName}   
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
            value={email}  
           onChange={(e)=>onInputChange(e)}   
           />        
        </div>
        <button type='submit' className='btn btn-outline-dark'> 
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
